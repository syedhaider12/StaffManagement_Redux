import React,{useState} from "react";
import {useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import{reset} from './timers.js'
//import {useNavigate} from "react-router-dom"
function Member({handleClose}) {
  const [errors, setErrors] = useState({});
 //const navigate = useNavigate();
  const dispatch = useDispatch();
  const [add , setAdd] =useState({
    firstName:"",
    lastName:"",
    userName:"",
    email:"",
    password:"",

  })
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdd({ ...add, [name]: value });
    console.log(name, value);
  };
  const handleSubmit = (e) => {
    console.log("shah jee")
    e.preventDefault();
    setErrors(validate(add));
    if (Object.keys(errors).length === 0) {

      addData();
     
      setAdd({
        
        firstName:"",
        lastName:"",
        userName:"",
        email:"",
        password:"",
       })
       
    }
    reset();
 
    
   
  };
  const addData=()=>{
  console.log('thk')
    dispatch({
       type: "addUser", 
       payload:{ 
        id:uuidv4(),
        firstName:add.firstName,
    lastName:add.lastName,
    userName:add.userName,
    email:add.email,
    password:add.password,
       }
    })
  }
  const validate = (values) => {
    const error = {};
    if (!values.firstName) {
      error.firstName= "First Name is required";
    }
    if (!values.lastName ) {
      error.lastName= "Last Name is required ";
    }
    if (!values.userName ) {
      error.userName= "User Name is required ";
    }
    if (!values.email ) {
      error.email="Email is required ";
    }
    if (!values.password ) {
      error.Password="Password is required ";
    }
    if(values.password.length<6){
    error.Passwordlength = "Password must be greater than 6 characters  ";
  }
  return error;
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ">
      <div className="relative w-auto max-w-sm mx-auto rounded shadow-md bg-slate-50">
        {/*content*/}

        {/*header*/}
        <div className="p-3 mt-5 ">
          <form className="px-8 pt-6 " onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="firstName"
              >
                Enter your first Name
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 placeholder-red-600 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="firstName"
                id="firstName"
                value={add.firstName}
                onChange={handleInput}
                placeholder={errors.firstName}
              />
             
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="lastName"
              >
                Enter your last Name
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 placeholder-red-600 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="lastName"
                id="lastName"
                value={add.lastName}
                onChange={handleInput}
                placeholder={errors.lastName}
              />
             
            </div>
            <div className="mb-3">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="userName"
              >
                Enter your user Name
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 placeholder-red-600 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="userName"
                value={add.userName}
                id="userName"
                onChange={handleInput}
                placeholder={errors.userName}
              />
            </div>
            <div className="mb-3">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Enter your email
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 placeholder-red-600 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                value={add.email}
                id="email"
                onChange={handleInput}
                placeholder={errors.email}
              />
             
            </div>
            <div className="mb-3">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Enter your password
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 placeholder-red-600 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                value={add.password}
                id="password"
                onChange={handleInput}
                placeholder={errors.Password } 
              />
              {errors.Password? null:
              <p className="text-red-600"> {errors.Passwordlength}</p>}
            </div>
            <div className="flex items-center justify-end p-6 border-blueGray-200">
              <button
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                type="button"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none "
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Member;
