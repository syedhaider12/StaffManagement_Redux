import React, { useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import{reset} from './timers.js'
import { useSelector,useDispatch } from "react-redux";

function Edit() {
  const { id } = useParams();
  const navigate=useNavigate();
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const existingUser = user.filter((user) => user.id === id);
  const { firstName, lastName, userName, email, password } = existingUser[0];
  const [edit, setEdit] = useState({
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    email: email,
    password: password,
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEdit({ ...edit, [name]: value });
    console.log(name, value);
  };
  const handleSubmit = (e) => {
    console.log("shah jee");
    e.preventDefault();
    setErrors(validate(edit));
    if (Object.keys(errors).length === 0) {
      editData();
      navigate("/");
      reset();
      
    }
  };
  const editData = () => {
    console.log("thk");
    dispatch({
      type: "editUser",
      payload: {
       id:id,
        firstName: edit.firstName,
        lastName: edit.lastName,
        userName: edit.userName,
        email: edit.email,
        password: edit.password,
      },
    });
  };
  const validate = (values) => {
    const error = {};
    if (!values.firstName) {
      error.firstName = "First Name is required";
    }
    if (!values.lastName) {
      error.lastName = "Last Name is required ";
    }
    if (!values.userName) {
      error.userName = "User Name is required ";
    }
    if (!values.email) {
      error.email = "Email is required ";
    }
    if (!values.password) {
      error.Password = "Password is required ";
    }
    if (values.password.length < 6) {
      error.Passwordlength = "Password must be greater than 6 characters  ";
    }
    return error;
  };

  return (
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
          value={edit.firstName}
          onChange={handleInput}
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
          value={edit.lastName}
          onChange={handleInput}
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
          value={edit.userName}
          id="userName"
          onChange={handleInput}
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
          value={edit.email}
          id="email"
          onChange={handleInput}
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
          value={edit.password}
          id="password"
          onChange={handleInput}
        />
      </div>
      <div className="flex items-center justify-end p-6 border-blueGray-200">
        <button
          className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none "
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Edit;
