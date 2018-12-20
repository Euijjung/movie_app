import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

// 리엑트는 UI라이브러리다, UI,유저인터페이스
// 리엑트DOM은 리액트를 웹사이트에 출력(render)하는 걸 도와주는 모델이다. Document Obiect Model

