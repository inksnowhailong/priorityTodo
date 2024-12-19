import { AppstoreOutlined,PlusCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

export default function Menu() {

  return (
    <>
    <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{ insetInlineEnd: 24 }}
      icon={<AppstoreOutlined />}
    >
      <FloatButton icon={<PlusCircleOutlined />} />
    </FloatButton.Group>

  </>
  );
}
