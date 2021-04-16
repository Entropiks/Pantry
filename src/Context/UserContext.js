import React, {useState, useEffect, createContext} from "react";
import { auth } from "../firebase";

const userContext = createContext();

const userProvider = (props) => {

  // Using state to store ... state of the user
  const [user, setUser] = useState();

  // useEffect is what happens on first run
  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    auth.onAuthStateChanged((changedUser) => {
      setUser(changedUser);
    });
  }, []);

  return <userContext.Provider value={user}>{props.children}>

  </userContext.Provider>
}

export default userContext;
export {UserProvider};

// Where the user state is stored and shared

