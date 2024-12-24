// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod entities; // 引入 entities 模块
use entities::task::Task;


fn main() {
    prioritytodo_lib::run();
    // 模拟前端传递的 JSON 数据


}
