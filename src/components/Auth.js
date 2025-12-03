import { useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import { authValidation } from "../utils/authValidation";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { setUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";

const Auth = () => {
  const [isSignIn,setIsSignIn] = useState(true);
  const [isError,setIsError] = useState('');
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  useEffect(()=>
  {
    if(user)
    {
      navigate("/browse");
    }
  },[]);
  const handleSubmit = (e)=>
  {
    e.preventDefault();
    const test = authValidation(email?.current?.value,password?.current?.value,fullName?.current?.value);
    if(test?.length > 0)
    {
        setIsError(test);
        return ;
    }
    if(!isSignIn)
    {
        //SignUp
        createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
            displayName: fullName?.current?.value
            }).then(() => {
                const {uid,email,displayName}  = auth.currentUser;
                dispatch(setUser({uid,email,displayName}));

                navigate("/browse");
            }).catch((error) => {
            // An error occurred
            // ...
                isError(error?.errorMessage);
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsError(errorCode + "-" + errorMessage);
        });
    }
    else
    {
        //SignIn
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const {uid,email,displayName}  = auth.currentUser;
            dispatch(setUser({uid,email,displayName}));
            navigate("/browse");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsError(errorCode + "-" + errorMessage);
        });
    }
  }
  return (<>
      <Header />
    <div>
      <div className="fixed bg-cover w-full">
        <img
          className="w-full  h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/IN-en-20251124-TRIFECTA-perspective_9f00d07d-f08e-494f-8907-92371138c534_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className="absolute top-[60%] lg:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-11/12 lg:w-3/12 p-10 bg-black rounded-lg">
        <h1 className="font-bold text-2xl text-white py-3 lg:py-6">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && 
        <div className="flex flex-col lg:flex-row lg:items-center">
          <label className="hidden lg:inline-block w-3/12 text-white">Full Name: </label>
          <input
          ref={fullName}
            className="p-2 rounded-sm text-white w-full lg:w-9/12 my-2 bg-gray-600 outline-none"
            type="text"
            placeholder="Enter Full Name"
          />
        </div>}
        <div className="flex flex-col lg:flex-row flex-wrap lg:items-center">
          <label className="hidden lg:inline-block w-3/12 text-white">Email: </label>
          <input
          ref={email}
            className="p-2 rounded-sm text-white w-full lg:w-9/12 my-2 bg-gray-600 outline-none"
            type="text"
            placeholder="Enter Email"
          />
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap lg:items-center">
          <label className="hidden lg:inline-block text-white w-3/12">Password: </label>
          <input
          ref={password}
            className="p-2 rounded-sm text-white w-full lg:w-9/12 my-2 bg-gray-600 outline-none"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <button className="text-white w-full p-2 my-6 bg-red-600 rounded-sm" onClick={(e)=>handleSubmit(e)}>
          {isSignIn ? "Login" : "SignUp"}
        </button>
        {
            isError && <p className="py-1 text-red-600">{isError}</p>
        }
        <p className="text-white ">
            {isSignIn ? "New to Netflix? " : "Already has Account? "}
          <span className="text-red-600 cursor-pointer" onClick={()=> setIsSignIn(!isSignIn)}>{isSignIn ? "Register": "Login"}</span>
        </p>
      </form>
    </div>
    </>
  );
};

export default Auth;
