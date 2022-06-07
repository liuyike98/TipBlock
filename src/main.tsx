import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import TipBlock from './TipBlock';
import './main.less';
import { Editor } from '@tiptap/react';

const controller = [
  {
    icon: '1',
    onclick: () => {},
  },
  {
    icon: '2',
    onclick: () => {},
  },
  {
    icon: '3',
    onclick: () => {},
  },
  {
    icon: '4',
    onclick: () => {},
  },
  {
    icon: '5',
    onclick: () => {},
  },
  {
    icon: '6',
    onclick: () => {},
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  return (
    <>
      <div className='title'>
        <div className='main'>TipBlock</div>
        <div className='top'>Demo</div>
      </div>
      <div className='example'>
        <div className='controller'>
          {controller.map((item, index) => {
            return (
              <div className='item' key={index} onClick={item.onclick}>
                <div className='icon'>{item.icon}</div>
              </div>
            );
          })}
        </div>
        <TipBlock
          onCreate={(e) => {
            console.log(e);
          }}
        />
      </div>
    </>
  );
}
