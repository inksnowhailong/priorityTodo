pub trait Notify {
    fn notify(title: &str, content: &str, subtitle: Option<&str>);
}

