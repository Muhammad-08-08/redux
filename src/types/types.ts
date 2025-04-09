export type counterSliceType = {
  value: number;
};

export type todoType = {
  id: number;
  name: string;
  completed: boolean;
};

export type todoSliceType = {
  todo: todoType[];
  input: string;
  editInput: string;
};
