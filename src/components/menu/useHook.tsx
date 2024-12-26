import { FloatButton } from "antd";
import TaskAdd from "../TsakManage/taskAdd";
import { PlusCircleOutlined } from "@ant-design/icons";


/**
 * @description: 使用taskAdd的hook
 * @param {number} overTime 默认完成时间 默认值是当天的23:59:59
 * @return {*}
 */
export const useAddModule = (
  overTime = new Date(new Date().setHours(23, 59, 59, 999)).getTime()
) => {
  // 是否显示
  const [show, setShow] = useState(false);

  /**
   * 打开弹窗
   */
  const open = () => {
    setShow(true);
  };
  /**
   * 关闭弹窗
   */
  const close = () => {
    setShow(false);
  };

  /**
   * add弹窗组件
   * @returns
   */
  const AddMod: React.FC = () => {
    return <TaskAdd show={show} onClose={close} overTime={overTime}></TaskAdd>;
  };
  /**
   * add按钮组件
   * @returns
   */
  const AddBtn: React.FC = () => {
    return <FloatButton icon={<PlusCircleOutlined />} onClick={open} />;
  };

  return { show, open, close, AddMod, AddBtn };
};
