import { Window } from "@tauri-apps/api/window";
import { Webview } from "@tauri-apps/api/webview";
/**
 * @description:
 * @return {*}
 */
export default class DialogReminder {
    appWindow: Window|null = null;
    webview: Webview|null = null;
  start() {
    this.appWindow = new Window("uniqueLabel");

    // loading embedded asset:
    this.webview = new Webview(this.appWindow, "dialog", {
      url: "/index.html",
      x: 0,
      y: 0,
      width: 800,
      height: 600,
    });
    console.log(123123);
    this.webview.once('tauri://created', function () {
        // this.webview successfully created
       });
       this.webview.once('tauri://error', function (e) {
        // an error happened creating the webview
        console.log('e :>> ', e);
       });

  }
}
