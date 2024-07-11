import React, {useState} from "react";
import Login from "./Login/Login.jsx";
import HomePage01 from "./HomePage01/HomePage01.jsx"

export default function App() {
  const [Logged, setLogged] = useState(true);
  if (!Logged) {
    return (
    <Login
      setter={setLogged}
    />);
  }
  else return (<HomePage01/>);
}
