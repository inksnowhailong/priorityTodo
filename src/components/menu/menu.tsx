import { AppstoreOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { useAddModule } from "../TsakManage/useHook";


export default function Menu() {
  const Add = useAddModule();
  return (
    <>
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{ insetInlineEnd: 24 }}
        icon={<AppstoreOutlined />}
      >
        <Add.AddBtn></Add.AddBtn>
      </FloatButton.Group>
      {/* 添加 */}
      <Add.AddMod></Add.AddMod>
    </>
  );
}
