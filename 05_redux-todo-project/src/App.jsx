import React from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/Add";

const App = () => {
  const [input, setInput] = React.useState("");
  const [id, setId] = React.useState(null);

  return (
    <div className="w-full flex flex-col p-14 px-44">
      <AddTodo input={input} setInput={setInput} id={id} setId={setId} />
      <Todos setInput={setInput} setId={setId} />
    </div>
  );
};

export default App;
