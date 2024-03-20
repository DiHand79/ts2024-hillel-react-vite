export interface ITodo {
  title: string;
  description: string;
  id: string;
}
export interface ITodoProps {
  item: ITodo;
  onDelete: (id: string) => void;
  onEdit: (todo: ITodo) => void;
}
export interface ITodoListProps {
  items: ITodo[];
  onDelete: (id: string) => void;
  onEdit: (todo: ITodo) => void;
}

export interface ITodoFormCreate {
  onSubmit: (todo: ITodo) => void;
  initData: ITodo;
}
