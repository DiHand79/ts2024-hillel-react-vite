import '../../sass/todoItem.sass';
import { ITodoProps } from '../types';

export default function TodoItem(props: ITodoProps) {
  const { item, onDelete, onEdit } = props;

  return (
    <div className='todoItem'>
      <b className='itemTitle'>{item.title}</b>
      <span className='itemDescription'>{item.description}</span>
      <button
        className='itemButton'
        onClick={() => onEdit(item.id)}
      >
        📝
      </button>
      <button
        className='itemButton'
        onClick={() => onDelete(item.id)}
      >
        🗑️
      </button>
    </div>
  );
}
