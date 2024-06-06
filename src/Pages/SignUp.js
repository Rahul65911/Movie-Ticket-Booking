import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig';

const auth = getAuth(app);

const signUpUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "ommaniya02@gmail.com",
      "12345678"
    ).then((value) => console.log(value));
  }

const SignUp = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <button style={{marginTop: '70px'}} onClick={signUpUser}>Create User</button>
    </div>
  );
};

export default SignUp;