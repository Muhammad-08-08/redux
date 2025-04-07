import { Provider, useDispatch, useSelector } from "react-redux";
import { decrement, increment, store } from "./store/redux";

function App() {
  return (
    <Provider store={store}>
      <OnCounter />
    </Provider>
  );
}

function OnCounter() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Count: {count}</h1>
      <div className="flex gap-4">
        <button
          className="px-6 py-3 text-xl font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="px-6 py-3 text-xl font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
