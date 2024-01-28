import '../sass/app.sass';

function App() {
  const onClick = () => console.log('Click test');

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
          <button onClick={onClick}>Click Me...</button>
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
