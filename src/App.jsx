import React, {useState} from 'react'

const App = () => {

  // {/* useState is a Hook that allows you to have state variables in functional components. 
  //   You can call it inside a function component to add some local state to it.
  //    React will preserve this state between re-renders. 
  //   useState returns a pair: the current state value and a function that lets you update it. */}
  //   const [num, setNum] = useState(0)
  //   const [user, setUser] = useState("Adityav Nevhal")
  //   const [userNo, setUserNo] = useState([1,2,3,4,5,6,7,8,9])
  //    function ChangeNum(){
  //     setNum(200)
  //     setUser("Arnav Nevhal")
  //     setUserNo([10,19,18,18])
  //    }
    const [num, setnum] = useState(0)
    function Inc(){
      setnum(num+1)
    }
    function Dec(){
      setnum(num-1)
    }
    function jum5(){
      setnum(num+5)
    }
  return (
    <div>
    
    {/* <h1>Value of num is {num} <br/>{userNo}<br/> Name of user is {user}</h1>

    <button onClick={ChangeNum} >Click me!</button> */}
    <h1>{num}</h1>
    <button onClick={Inc}>Increase</button>
    <button onClick={Dec}>Decrease</button>
    <button onClick={jum5}>Jump By 5</button>
    </div>
  )
}

export default App