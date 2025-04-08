import { Button, Form, Input } from "antd";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  add,
  completed,
  deleted,
  inputValue,
  RootState,
  store,
} from "./store/redux";

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
  const dispatch = useDispatch();

  return (
    <div className="w-[700px] mx-auto bg-slate-800 text-white my-10 p-6 rounded-2xl">
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
      {todo.map((item) => {
        return (
          <div className="flex justify-between items-center">
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
                comp
              </Button>
              <Button
                onClick={() => {
                  dispatch(deleted(item.id));
                }}
              >
                delet
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
