import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data.
    const message = checkValidData(
      // name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    // Sign In / Sign Up
    if (!isSignInForm) {
      // Sign Up Logic (Firebase: https://firebase.google.com/docs/auth/web/password-auth?hl=en&authuser=0#create_a_password-based_account)
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // Update the profile (from firebase auth)
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!

              // BUG Fix: after registering first time the display name and photoURL is null.
              // Updating the store.
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              // Navigate to Browse page if authenticated/created succesfully.
              // navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      // Sign In Logic (Firebase: https://firebase.google.com/docs/auth/web/password-auth?hl=en&authuser=0#sign_in_a_user_with_an_email_address_and_password)
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);

          // Navigate to Browse page if authenticated/created succesfully.
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <>
      <div className="absolute">
        <img
          src={NETFLIX_BG}
          alt="nf-background-image"
          className="object-cover"
        />
      </div>
      <div>
        <Header />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute p-12 bg-black w-11/12 md:w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="p-4 mt-4 w-full bg-gray-800 rounded-md"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="p-4 mt-4 w-full bg-gray-800 rounded-md"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-4 mt-4 mb-2 w-full bg-gray-800 rounded-md"
          />
          <p className="text-red-600">{errorMessage}</p>
          <button
            className="p-4 mt-6 mb-1 bg-red-700 w-full rounded-md"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "Already a user? Sign in now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
