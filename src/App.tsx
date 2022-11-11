import React, { useEffect } from 'react';


import './App.css';

function App() {
useEffect( () => {
const res: Promise<any> = fetch('/.netlify/functions/book/add-book')
// const book= res.Json()
// console.log()
.then((res)=> res.json())
 .then(res=>{
  console.log('book res',res.body)
 }).catch((error)=> console.log(error))
}
,[])
  return (
    <div className="App">
    
    
    </div>
  );
}

export default App;
