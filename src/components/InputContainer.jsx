import React from "react";

function InputContainer({inp,writetodo,addTodo}) {
  return (
    <div>
      <div className="input-container">
        <input type="text" value = {inp} onChange={writetodo}/>
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
}

export default InputContainer;
