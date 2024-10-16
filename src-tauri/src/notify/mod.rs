pub mod notify_trait;

use notify_rust::{Notification, Timeout};
use notify_trait::{Notify, NotifyParams};
use tauri::Manager;
pub struct Message;
pub struct Toast;

impl Notify for Message {
    fn notify(&self, params: NotifyParams) {
        match params {
            NotifyParams::NotifyRust {
                title,
                content,
                subtitle,
            } => {
                self.notify_rust(title, content, subtitle);
            }
            NotifyParams::CustomView { app } => {
                // app.invoke(&"customView".to_string(), |window| {
                //     window.emit("customView", "Hello from Rust!");
                // });
            }
        }
    }
}
impl Message {
    fn new() -> Self {
        Message
    }
    fn notify_rust(&self, title: &str, content: &str, subtitle: Option<&str>) {
        // 创建一个可变的 notification 对象
        let mut notification = Notification::new();

        notification
            .summary(title)
            .body(content)
            .timeout(Timeout::Milliseconds(6000)); // milliseconds

        // 如果有 subtitle，则直接调用 subtitle 方法
        if let Some(subtitle) = subtitle {
            notification.subtitle(subtitle);
        }

        // 显示通知
        notification.show().unwrap();
    }
}

impl Notify for Toast {
    fn notify(&self, params: NotifyParams) {
        match params {
            NotifyParams::NotifyRust {
                title,
                content,
                subtitle,
            } => {}
            NotifyParams::CustomView { app } => {
                let app_clone = app.clone(); // 确保 app 可以被使用
                let app_clone = app.clone();

                tokio::spawn(async move {
                    Toast::openNewWindow(app_clone).await; // 在后台运行异步方法
                });
            }
        }
    }
}
impl Toast {
    fn new() -> Self {
        Toast
    }

    async fn openNewWindow(app: tauri::AppHandle) {

        // 计算窗口的位置（右下角）
        let x = 0  as f64;
        let y = 0 as f64;

        let webview_window = tauri::WebviewWindowBuilder::new(
            &app,
            "label",
            tauri::WebviewUrl::App("index.html".into()),
        )
        .always_on_top(true)
        .position(x, y)
        .build()
        .unwrap();
    }
    // fn get_screen_size() -> (u32, u32) {
    //     // winit::dpi::PhysicalSize::new(1920, 1080)
    // }

}
