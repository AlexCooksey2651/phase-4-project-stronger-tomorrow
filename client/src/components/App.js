import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login"
import Header from "./Header"
import NavBar from "./NavBar"
import RecordNewLift from "../pages/RecordNewLift"
import Dashboard from "../pages/Dashboard"
import Profile from "../pages/Profile"

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  }, [])

  if (!user) return <Login onLogin={setUser} />

  return (
    <div className="App">
      <Header />
      <NavBar user={user} setUser={setUser}/>
      <Switch >
        <Route exact path="/dashboard">
          <Dashboard user={user}/>
        </Route>
        <Route exact path="/record_new_lift">
          <RecordNewLift />
        </Route>
        <Route exact path="/profile">
          <Profile user={user}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// RESOURCES:
// const rmConverter = {
//   1: 1,
//   2: 0.95,
//   3: 0.92,
//   4: 0.89,
//   5: 0.86,
//   6: 0.83,
//   7: 0.81,
//   8: 0.79,
//   9: 0.77,
//   10: 0.75,
//   11: 0.73,
//   12: 0.71,
//   13: 0.70,
//   14: 0.68,
//   15: 0.67,
//   16: 0.65,
//   17: 0.64,
//   18: 0.63,
//   19: 0.62,
//   20: 0.61
// }

// const oneRmConverter = {
//   1: 1,
//   2: 1.05,
//   3: 1.09,
//   4: 1.12,
//   5: 1.16,
//   6: 1.2,
//   7: 1.23,
//   8: 1.27,
//   9: 1.30,
//   10: 1.33,
//   11: 1.37,
//   12: 1.41,
//   13: 1.44,
//   14: 1.47,
//   15: 1.50,
//   16: 1.54,
//   17: 1.56,
//   18: 1.59,
//   19: 1.61,
//   20: 1.64
// }

// source : https://complementarytraining.net/set-and-rep-schemes-in-strength-training/

