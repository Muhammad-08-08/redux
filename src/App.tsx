import { Button, Form, Input } from "antd";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  add,
  completed,
  deleted,
  editInputValue,
  inputValue,
  RootState,
  store,
} from "./store/redux";
import { CheckOutlined, DeleteFilled, EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import EditDrawer from "./components/EditDrawer";

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

function TodoList() {
  const todo = useSelector((state: RootState) => state.todo.todo);
  const input = useSelector((state: RootState) => state.todo.input);
  const editInput = useSelector((state: RootState) => state.todo.editInput);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<{
    id: number;
    name: string;
    completed: boolean;
  } | null>(null);

  const dispatch = useDispatch();

  const OnClose = () => {
    setIsOpen(false);
  };

  const Search = todo.filter((item) => {
    return item.name.toLowerCase().includes(editInput.toLowerCase());
  });

  return (
    <div className="w-[700px] mx-auto bg-slate-800 text-white my-10 p-6 rounded-2xl">
      <EditDrawer isOpen={isOpen} onClose={OnClose} editItem={selectedUser} />
      <Form className="flex gap-3">
        <Form.Item className="w-full">
          <Input
            value={input}
            onChange={(e) => {
              dispatch(inputValue(e.currentTarget.value));
            }}
            placeholder="todo qo'shish"
          />
        </Form.Item>
        <Form.Item>
          <Button
            onClick={() => {
              dispatch(add(input));
            }}
            htmlType="submit"
            type="primary"
          >
            Add
          </Button>
        </Form.Item>
      </Form>
      <Input
        placeholder="Qidirish"
        value={editInput}
        onChange={(e) => {
          dispatch(editInputValue(e.currentTarget.value));
        }}
        className="mb-4"
      />
      {Search.map((item) => {
        return (
          <div key={item.id} className="flex justify-between items-center">
            <p
              className={
                item.completed
                  ? "line-through text-green-600 mb-4"
                  : "text-white mb-4"
              }
            >
              {item.name}
            </p>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  dispatch(completed(item.id));
                }}
              >
                <CheckOutlined className="text-green-600" />
              </Button>
              <Button
                onClick={() => {
                  setSelectedUser(item);
                  setIsOpen(true);
                }}
              >
                <EditOutlined />
              </Button>

              <Button
                onClick={() => {
                  dispatch(deleted(item.id));
                }}
              >
                <DeleteFilled />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
