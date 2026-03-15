import React, {useState} from 'react'

const App = () => {

  {/* useState is a Hook that allows you to have state variables in functional components. 
    You can call it inside a function component to add some local state to it.
     React will preserve this state between re-renders. 
    useState returns a pair: the current state value and a function that lets you update it. */}
    const [num, setNum] = useState(0)
    const [user, setUser] = useState("Adityav Nevhal")
     function ChangeNum(){
      setNum(200)
      setUser("Arnav Nevhal")
     }
  return (
    <div>
    
    <h1>Value of num is {num} <br/> Name of user is {user}</h1>

    <button onClick={ChangeNum} >Click me!</button>

    </div>
  )
}

export default App