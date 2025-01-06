import {
  Task,
  TaskCategory,
  TaskImportance,
  TaskStatus,
  RepeatInterval,
} from "@/entities/taskEntities";
import {
  categoryMap,
  TaskImportanceMap,
  TaskStatusMap,
  RepeatIntervalMap,
  RepeatIntervalMaxMap,
} from "@/service/adapter";
import { TaskManagerImpl } from "@/service/impl/TaskManager.impl";
import {
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Slider,
  Row,
  Col,
  InputNumber,
  Switch,
} from "antd";
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

  const taskManager = new TaskManagerImpl();
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
      taskManager.createTask(newtask);
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
      width="50%"
    >
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          estimated_time: dayjs(overTime), // 设置表单字段的默认值
          progress: 0,
          is_repeat: false,
          repeat_interval: "Daily",
          repeat_day: 1,
        }}
      >
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              label="待办名称"
              name="task_name"
              rules={[{ required: true, message: "请输入待办名称" }]}
            >
              <Input placeholder="请输入待办名称" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="待办描述"
              name="description"
              rules={[{ required: true, message: "请输入待办描述" }]}
            >
              <Input.TextArea placeholder="请输入待办描述" />
            </Form.Item>
          </Col>
          <Col span={12}>
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
          </Col>
          <Col span={12}>
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
          </Col>
          <Col span={12}>
            <Form.Item
              label="待办进度"
              name="progress"
              rules={[{ required: true, message: "请输入待办进度" }]}
            >
              <Slider min={0} max={100} />
            </Form.Item>
          </Col>
          <Col span={12}>
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
          </Col>
          <Col span={12}>
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
          </Col>
          <Col span={12}>
            <Form.Item
              label="重复执行"
              name="is_repeat"
              rules={[{ required: true, message: "请选择是否重复执行" }]}
            >
              <Switch checkedChildren="重复" unCheckedChildren="不重复"  />
            </Form.Item>
          </Col>
          <Form.Item
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.is_repeat !== currentValues.is_repeat||prevValues.repeat_interval !== currentValues.repeat_interval
            }
            noStyle
          >
            {({ getFieldValue }) => {
              const isRepeat = getFieldValue("is_repeat");
              const repeatInterval = RepeatIntervalMap[ getFieldValue("repeat_interval") as RepeatInterval];
              const repeatIntervalMax = RepeatIntervalMaxMap[ getFieldValue("repeat_interval") as RepeatInterval];
              return (
                <>
                  <Col span={12}>
                    <Form.Item
                      label="任务重复间隔"
                      name="repeat_interval"
                      rules={[
                        { required: isRepeat, message: "请选择任务重复间隔" },
                      ]}
                    >
                      <Select placeholder="请选择任务重复间隔">
                        {Object.values(RepeatInterval).map((interval) => (
                          <Select.Option key={interval} value={interval}>
                            {RepeatIntervalMap[interval]}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="任务重复日"
                      name="repeat_day"
                      rules={[{ required: isRepeat, message: "请输入任务重复日" }]}
                    >
                      <InputNumber
                        min={1}
                        max={repeatIntervalMax}
                        addonBefore={repeatInterval}
                        placeholder="请输入任务重复日"
                      />
                    </Form.Item>
                  </Col>
                </>
              );
            }}
          </Form.Item>
          <Col span={12}></Col>
        </Row>
      </Form>
    </Modal>
  );
};
export default TaskAdd;
