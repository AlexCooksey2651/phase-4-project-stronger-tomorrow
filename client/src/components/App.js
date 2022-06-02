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

  function handleLogout() {
    fetch('/logout', {
      method: "DELETE"
    })
      .then(r => {
        if (r.ok) {
          setUser(null)
        }
      })
  }

  if (!user) return <Login onLogin={setUser} />

  return (
    <div className="App">
      <Header />
      <NavBar user={user} setUser={setUser} handleLogout={handleLogout}/>
      <Switch >
        <Route exact path="/dashboard">
          <Dashboard user={user}/>
        </Route>
        <Route exact path="/record_new_lift">
          <RecordNewLift />
        </Route>
        <Route exact path="/profile">
          <Profile user={user} handleLogout={handleLogout}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

