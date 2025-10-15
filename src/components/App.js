
import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { addUserEmail, addUserName } from "./userSlice"; 
 
const App = () => {
    const userName = useSelector((state) => state.user.name);
  const userEmail = useSelector((state) => state.user.email);
  const dispatch=useDispatch()
  return (
    <div>
        {/* Do not remove the main div */}
    <h1>User Information</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="name" onChange={(e)=>dispatch(addUserName(e.target.value))} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="email" onChange={(e)=>dispatch(addUserEmail(e.target.value))} />
      <div className="output">
        <p>Name - {userName}</p>
        <p>Email - {userEmail}</p>
      </div>
    </div>
  )
}

export default App
