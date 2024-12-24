import { FloatButton } from "antd";
import TaskAdd from "../TsakManage/taskAdd";
import { PlusCircleOutlined } from "@ant-design/icons";

/**
 * add 相关逻辑封装
 * @returns
 */
export const useAddModule = () => {
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
    return <TaskAdd show={show} onClose={close}></TaskAdd>;
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

