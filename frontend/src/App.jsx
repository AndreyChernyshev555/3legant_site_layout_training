import React, {useState} from "react";
import Login from "./Login/Login.jsx";
import HomePage01 from "./HomePage01.jsx";
import HomePage02 from "./HomePage02.jsx";

export default function App() {
  const [Logged, setLogged] = useState(false);
  const [homePage, setHomePage] = useState(0);

  if (!Logged) {
    return (
    <Login
      setter={setLogged}
    />);
  }
  else {
    if (homePage == 0) return (<HomePage01 setFunc={setHomePage}/>);
    else if (homePage == 1) return (<HomePage02 setFunc={setHomePage}/>);
  }
}
