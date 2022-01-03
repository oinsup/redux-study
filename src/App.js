import React from "react";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const call = useSelector((state)=>state)
  const dispatch = useDispatch()
  return (
    <div>
      <p>{call.name}{call.age}</p>
      <button onClick={() => dispatch({type : "INCREASE"})}>증가</button>
      <button onClick={() => dispatch({type : "DECREASE"})}>감소</button>
      <input type="text" onChange={(e)=> call.name=e.target.value}/>
      <button onClick={() => dispatch({type : "NAME_CHANGE"})}>이름바꾸기</button>
    </div>
  );
}

export default App;
