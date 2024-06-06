import React, { useEffect, useState } from 'react'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../firebaseConfig';
const Login = () => {

  const auth = getAuth(app);

  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUser(user)
        // ...
      } else {
        // User is signed out
        setUser(null)
      }
    });
  })

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("Login Success : ", value.user.uid))
      .catch((err) => console.log(err));
  }
  if (user == null){
    return (
      <>
        <div className='sign-in-page'>
          <h1>Sign In Page</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email" />
  
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password" />
  
          <button onClick={signInUser}>Log In</button>
        </div>
      </>
    )
  }
  else{
    return(
      <div>Hello {user.email}</div>
    )
  }
}

export default Login