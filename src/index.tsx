import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let arr = [2,2,2,2]
function findAverage(array:Array<number>) {
    let arrayL = array.length
    let sum =0
    for(let i=0;i < arrayL;i++){
        sum+=array[i]
    }

    let res = sum/arrayL
    console.log(res)
    return res
}
findAverage(arr)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
