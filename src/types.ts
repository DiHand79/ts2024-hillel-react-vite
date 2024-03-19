export interface ITodo {
  title: string;
  description: string;
  id: string;
}
export interface ITodoProps {
  item: ITodo;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}
export interface ITodoListProps {
  items: ITodo[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export interface ITodoFormCreate {
  onCreate: (todo: ITodo) => void;
}
