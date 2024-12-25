/*

*/

import { invoke } from "@tauri-apps/api/core";
import { Modal } from "antd";
import { FC } from "react";

interface AddProps {
  show: boolean;
  onClose?: () => void;
}
const taskAdd: FC<AddProps> = ({ show, onClose }) => {
  if (!show) return null;
  const handleOk = async () => {
    const newData = {
      id: 1,
      task_name: "学习 Rust",
      description: "学习 Rust 编程语言的基本知识",
      category: "Learning",
      importance: "高",
      time_remaining: 120,
      estimated_time: 180,
      task_status: "NotStarted",
      progress: 0,
    };
    try {
      const res = await invoke('invok_command',{
        command: 'add_task',
        jsonData: JSON.stringify(newData),
      });
      console.log(res);

    } catch (error) {}
  };
  const handleCancel = () => {
    onClose && onClose();
  };

  return (
    <Modal
      title="Basic Modal"
      open={show}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};
export default taskAdd;
