import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import { ITodo } from './types';
import '../sass/app.sass';
import TodoForm from './components/TodoForm';

const URL = 'http://localhost:3000/todos';
const initDataTodo = { title: '', description: '', id: Math.random().toString(16).slice(-13) + Math.random().toString(16).slice(-13) };

function App() {
  const [items, setItems] = useState<ITodo[]>([]);
  const [todoEdit, setTodoEdit] = useState<ITodo | null>(null);

  useEffect(() => {
    fetch(URL)
      .then((data) => data.json())
      .then((json) => setItems(json));
  }, []);

  const handleCreate = (todo: ITodo) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((json) => setItems((prev) => [...prev, json]));
  };

  const handleEdit = (todo: ITodo) => {
    console.log('Click edit ', todo);
    setTodoEdit(todo);
    // handleTodoUpdate(todo);
  };

  const handleTodoUpdate = (todo: ITodo) => {
    fetch(`${URL}/${todo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    }).then(() => {
      setItems((prev) => prev.map((el) => (el.id === todo.id ? todo : el)));
      setTodoEdit(null);
    });
    // .then((res) => res.json())
    // .then((updatedTodo) => {
    // setItems((prev) => prev.map((el) => (el.id === todo.id ? updatedTodo : el)));
    // });
  };

  const handleDelete = (id: string) => {
    fetch(`${URL}/${id}`, { method: 'DELETE' }).then(() => setItems((prev) => prev.filter((el) => el.id !== id)));
  };

  return (
    <>
      <div className='bgImage'></div>
      <div className='card'>
        <h1>
          <small>
            <code className='codeText'>Hello to </code>
          </small>
          <big className='titleText'>React + Vite + TS Great</big>{' '}
          <small>
            <code className='codeText'>World my dark 1V|aster...</code>
          </small>
        </h1>
        <div className='links'>
          <button>
            <a
              href='https://github.com/DiHand79/typescript-course-2024-01'
              target='_blank'
            >
              TS
            </a>
          </button>
          <button>
            <a
              href='https://github.com/DiHand79/ts2024-hillel-react-vite'
              target='_blank'
            >
              React + TS
            </a>
          </button>
        </div>
      </div>
      <TodoList
        items={items}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      {!todoEdit && (
        <TodoForm
          onSubmit={handleCreate}
          initData={initDataTodo}
        />
      )}
      {todoEdit && (
        <TodoForm
          onSubmit={handleTodoUpdate}
          initData={todoEdit}
        />
      )}
      <footer>
        <h3>
          <a
            href='mailto:dihandod@gmail.com?subject = Feedback&body = Message"'
            target='_blank'
          >
            Stan.Bro aka DiHand79
          </a>
          <span>&nbsp;</span>&<span>&nbsp;</span>
          <a
            href='https://ithillel.ua/'
            target='_blank'
          >
            Hillel 2024
          </a>
        </h3>
      </footer>
    </>
  );
}

export default App;
