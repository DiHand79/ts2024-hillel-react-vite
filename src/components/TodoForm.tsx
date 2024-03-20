import { useState } from 'react';
import '../../sass/itemAddNewForm.sass';
import { ITodo, ITodoFormCreate } from '../types';

export default function TodoForm(props: ITodoFormCreate) {
  const { onSubmit, initData } = props;
  console.log('initData: ', initData); // twice???

  const [newItem, setNewItem] = useState<ITodo>(initData);

  const handleChange: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    setNewItem((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit: React.FormEventHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(newItem);
    setNewItem({
      ...initData,
      id: Math.random().toString(16).slice(-13) + Math.random().toString(16).slice(-13),
    });
  };

  return (
    <form
      className='addNewItemForm'
      onSubmit={(event) => handleSubmit(event)}
    >
      <h3>Add New Task:</h3>
      <div className='field'>
        <label htmlFor='title'>Titlte: </label>
        <input
          type='text'
          name='title'
          // placeholder='Enter title.'
          value={newItem.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className='field'>
        <label htmlFor='description'>Description: </label>
        <input
          type='text'
          name='description'
          // placeholder='Enter description.'
          value={newItem.description}
          onChange={handleChange}
          required
        />
      </div>
      <button>{initData.title.length ? 'Update' : 'Add'}</button>
    </form>
  );
}
