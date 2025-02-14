import React, { useState } from "react";

const App = () => {
  const [formdata, setformdata] = useState({
    first: "",
    second: "",
  });
  const [result, setresult] = useState(0);

  const ChangeHadler = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const sawvalue = () => {
    setresult(Number(formdata.first) + Number(formdata.second));
  };

  return (
    <>
      <input
        type="number"
        placeholder="value"
        name="first"
        onChange={ChangeHadler}
        value={formdata.first}
      />
      <input
        type="number"
        placeholder="value"
        name="second"
        onChange={ChangeHadler}
        value={formdata.second}
      />
      <button onClick={sawvalue}>Add</button>
      <h1>{result}</h1>
    </>
  );
};

export default App;
