pub mod notify_trait;

use notify_rust::{Notification, Timeout};
use notify_trait::Notify;

pub struct Message;
pub struct Toast;

impl Notify for Message {
    fn notify(title: &str, content: &str, subtitle: Option<&str>) {
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
    fn notify(title: &str, content: &str, subtitle: Option<&str>) {
        let window_label = "message_window";
        let url = format!("index.html#/message?title={}&content={}&subtitle={}", title, content, subtitle.unwrap_or(""));

        tauri::WebviewWindowBuilder::new(
            &app_handle,
            window_label, // 窗口的唯一标识符
            tauri::WindowUrl::App(url.into()) // 前端应用的路由和参数
        )
        .title("Message Window") // 窗口标题
        .inner_size(300.0, 200.0) // 窗口大小
        .resizable(false) // 禁止调整窗口大小
        .build()
        .unwrap();
    }
}
