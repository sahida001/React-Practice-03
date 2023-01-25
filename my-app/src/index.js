import React from 'react';
import ReactDOM from 'react-dom/client';


const todoTitle = "Call Family";
const todoDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";
const date = new Date();
const dateName = date.getDate();
const dateMonth = date.getMonth();
const dateYear = date.getFullYear();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<div>
  <h1 className='headingStyle'>TODO APP</h1>
  <div className='card'>
    <h3 className='card-title'>{todoTitle}</h3>
    <p className='card-desc'>{todoDesc}</p>
    <p className='card-Footer'>{dateName + "/"+ dateMonth + "/" + dateYear}</p>
    
  </div>
</div>

);


