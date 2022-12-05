import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const elem = <h2>Hello World!</h2>; // реакт элемент

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!') // так не удобно

// const text = 'Hello world!';

// const elem = (
// 	<div>
// 		<h2 className='text'>Текст: {text}</h2>
// 		<input type='text' />
// 		<button tabIndex={0}>Click</button>
// 	</div>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);
