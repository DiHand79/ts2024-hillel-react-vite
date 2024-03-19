import TodoItem from './TodoItem';
import { ITodo, ITodoListProps } from '../types';
import '../../sass/todoList.sass';

export default function TodoList(props: ITodoListProps) {
  const { items, onDelete, onEdit } = props;

  return (
    <>
      {items.map((item: ITodo) => (
        <TodoItem
          item={item}
          key={item.id}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </>
  );
}
