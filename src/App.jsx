import Form from "./components/Form";
import { useState } from "react";
import Display from "./components/Display";

function App() {

  const [datas, setTodos] = useState([]);

  // 2) cara receive value dari Form
  const receiveValue = ({username, text}) => {
    console.log({username, text})

    // 5) cara buat object utk value input ya
    const newList = {
      id: Math.floor(Math.random() * 1001).toString(16),
      username,
      text,
      checked: false
    }

    // 6) utk kita save value dalam state
    setTodos((prev)=> {
      return [newList, ...prev]
    })

    // call API to create todo
  }

  const handleToggle = (event) => {
    const targetId = event.target.id;
    const targetChecked = event.target.checked;

  setTodos((previous) => {
    const updateTodo = previous.map((todo) => {

      // utk kita halang all click
      // contoh click satu checkbox, tapi all checkbox clicked
      if(targetId != todo.id){
        return todo
      }

      const changeTodo = {
        ...todo,
        checked: targetChecked
      }

      return changeTodo;
    })

    return updateTodo;
  })
    
  // call API to update todo
    
}

  return (
    <>
    <pre>{JSON.stringify(datas, null, 2)}</pre>
     <Form 
      nilai={receiveValue}
     />

     {/* 3) cara hantar value dan display */}

     {
      datas.map((list) => {
        return(
          <Display 
          id={list.id}
          key={list.id}
          username={list.username}
          text={list.text}
          clickOrNot={list.checked}
          toggle={handleToggle}
        />
        )
        
      })
     }
     </>
  )
}

export default App
