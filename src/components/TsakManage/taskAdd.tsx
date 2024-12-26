import {
  Task,
  TaskCategory,
  TaskImportance,
  TaskStatus,
} from "@/entities/taskEntities";
import {
  categoryMap,
  TaskImportanceMap,
  TaskStatusMap,
} from "@/service/adapter";
import { invoke } from "@tauri-apps/api/core";
import { Modal, Form, Input, Select, DatePicker, Slider } from "antd";
import dayjs from "dayjs";
import { FC } from "react";

interface AddProps {
  /**
   * @description: 是否显示
   */
  show: boolean;
  /**
   * @description: 默认完成时间
   * @return {*}
   */
  overTime?: number;
  /**
   * @description: 关闭回调 需调用在回调中主动关闭
   * @return {*}
   */
  onClose: () => void;
}

const TaskAdd: FC<AddProps> = ({ show, onClose, overTime }) => {
  if (!show) return null;
  console.log(overTime);

  const [form] = Form.useForm<Task>();
  /**
   * @description: 添加一个新的待办事项
   * @return {*}
   */
  const handleOk = async () => {
    const newtask: Task = await form.validateFields();
    newtask.estimated_time = new Date(newtask.estimated_time).getTime();
    newtask.time_remaining = newtask.estimated_time - Date.now();
    if (newtask.time_remaining < 0) {
      return;
    }
    console.log(newtask);

    try {
      const res = await invoke("invok_command", {
        command: "add_task",
        jsonData: JSON.stringify(newtask),
      });
      handleCancel();
    } catch (error) {}
  };

  const handleCancel = () => {
    onClose?.();
  };

  return (
    <Modal
      title="添加待办事项"
      open={show}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          estimated_time: dayjs(overTime), // 设置表单字段的默认值
        }}
      >
        <Form.Item
          label="待办名称"
          name="task_name"
          rules={[{ required: true, message: "请输入待办名称" }]}
        >
          <Input placeholder="请输入待办名称" />
        </Form.Item>
        <Form.Item
          label="待办描述"
          name="description"
          rules={[{ required: true, message: "请输入待办描述" }]}
        >
          <Input.TextArea placeholder="请输入待办描述" />
        </Form.Item>
        <Form.Item
          label="待办分类"
          name="category"
          rules={[{ required: true, message: "请选择待办分类" }]}
        >
          <Select placeholder="请选择待办分类">
            {Object.values(TaskCategory).map((category) => (
              <Select.Option key={category} value={category}>
                {categoryMap[category]}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="重要性"
          name="importance"
          rules={[{ required: true, message: "请选择重要性" }]}
        >
          <Select placeholder="请选择重要性">
            {Object.values(TaskImportance)
              .filter((value) => typeof value === "number")
              .map((importance) => (
                <Select.Option key={importance} value={importance}>
                  {TaskImportanceMap[importance]}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="预计时间"
          name="estimated_time"
          rules={[{ required: true, message: "请输入预计时间" }]}
        >
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"

            placeholder="请选择预计时间"
          />
        </Form.Item>
        <Form.Item
          label="待办状态"
          name="task_status"
          rules={[{ required: true, message: "请选择待办状态" }]}
        >
          <Select placeholder="请选择待办状态">
            {Object.values(TaskStatus).map((status) => (
              <Select.Option key={status} value={status}>
                {TaskStatusMap[status]}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="待办进度"
          name="progress"
          rules={[{ required: true, message: "请输入待办进度" }]}
        >
          <Slider min={0} max={100} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default TaskAdd;
