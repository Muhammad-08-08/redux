import { Button, Drawer, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { update } from "../store/redux";
import { todoType } from "../types/types";

function EditDrawer({
  editItem,
  isOpen,
  onClose,
}: {
  editItem: todoType | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const dispatch = useDispatch();

  return (
    <Drawer open={isOpen} onClose={() => onClose()}>
      <Form
        initialValues={{ name: editItem?.name }}
        onFinish={(values: { name: string }) => {
          if (editItem) {
            dispatch(update({ id: editItem.id, name: values.name }));
            onClose();
          }
        }}
      >
        <Form.Item name="name">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Saqlash
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}

export default EditDrawer;
