import { MessageInstance } from "antd/es/message/interface"
import { NotificationInstance } from "antd/es/notification/interface"

export {}
declare global {
    interface Window {
      $message: MessageInstance;
      $notification: NotificationInstance;
      $modal: HookAPI;
    }
  }
