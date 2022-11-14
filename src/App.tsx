import React, { useEffect } from 'react';
import Books from './components/Books'
import BookForm from './components/BookForm'

import './App.css';

function App() {
useEffect( () => {
  const id = "1"
const res: Promise<any> = fetch(`/.netlify/functions/add-book?id=${id}`,{
  
  method: 'post',
  body: JSON.stringify({
    name: "learn javascript",
    author: "SIjad kahan ",
    date: new Date()
  }
  ),
  

})
// const book= res.Json()
// console.log()
.then((res)=> res.json())
 .then(res=>{
  console.log('book res',res)
 }).catch((error)=> console.log(error))
}
,[])
  return (
    <div className="App">
      <BookForm />
      <Books />
    
    </div>
  );
}

export default App;
