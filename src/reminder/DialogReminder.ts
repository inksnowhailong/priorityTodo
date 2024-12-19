import { PhysicalPosition, LogicalSize, Window } from "@tauri-apps/api/window";
import { Webview } from "@tauri-apps/api/webview";
/**
 * @description:
 * @return {*}
 */
export default class DialogReminder {
    appWindow: Window|null = null;
    webview: Webview|null = null;
  start() {
    this.appWindow = new Window('dialog');
    this.appWindow.setSize(new LogicalSize(200, 200));
    this.appWindow.setPosition(new PhysicalPosition(0, 0));
    this.appWindow.show();
     // 获取窗口的位置
     this.appWindow.outerPosition().then((position) => {
      console.log(`Window position: x=${position.x}, y=${position.y}`);
    }).catch((error) => {
      console.error('Failed to get window position:', error);
    });
    // loading embedded asset:
    // this.webview = new Webview(this.appWindow, "dialog", {
    //   url: "/index.html",
    //   x: 0,
    //   y: 0,
    //   width: 800,
    //   height: 600,
    // });
    // this.webview.once('tauri://created', function () {
    //     // this.webview successfully created
    //    });
    //    this.webview.once('tauri://error', function (e) {
    //     // an error happened creating the webview
    //     console.log('e :>> ', e);
    //    });

  }
}
