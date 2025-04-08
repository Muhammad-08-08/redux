import { Button, Drawer, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { update } from "../store/redux";

function EditDrawer({
  editItem,
  isOpen,
  setIsOpen,
}: {
  editItem: { id: number; name: string; completed: boolean } | null;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();

  const handleSubmit = (values: { name: string }) => {
    if (editItem) {
      dispatch(update({ id: editItem.id, name: values.name }));
      setIsOpen(false);
    }
  };
  return (
    <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
      <Form initialValues={{ name: editItem?.name }} onFinish={handleSubmit}>
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
