pub enum NotifyParams<'a> {
    NotifyRust { title: &'a str, content: &'a str, subtitle: Option<&'a str> },
    CustomView { app: tauri::AppHandle, },
}

pub trait Notify {
    fn notify(&self, params: NotifyParams);
}

