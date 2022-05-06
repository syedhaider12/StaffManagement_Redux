import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };
  const checkInputs = () => {
    setErrors(validate(inputs));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      log();
      navigate("/");
    }
  };
  const log = () => {
    dispatch({
      type: "login",
      payload: {
        email: inputs.email,
        password: inputs.password,
      },
    });
  };
  const validate = (values) => {
    const error = {};
    if (!values.email) {
      error.email = "Email is required";
    }
    if (!values.password) {
      error.password = "Password is required ";
    }
    if (values.password.length < 6) {
      error.passwordlength = "Password must be greater than 6 characters  ";
    }

    return error;
  };
  return (
    <>
      <div className="flex justify-center p-3 mt-10">
        <form
          className="px-8 pt-6 pb-8 mb-4 rounded shadow-md lg:w-1/4 md:w-1/2 sm:w-1/2 bg-slate-50"
          onSubmit={handleSubmit}
          onClick={checkInputs}
        >
          <h1 className="pb-3 text-lg font-bold text-center">Admin login</h1>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="email"
              value={inputs.email}
              name="email"
              id="email"
              onChange={handleInput}
              placeholder="Enter Your Email"
            />
            <p className="text-red-600"> {errors.email}</p>
          </div>
          <div className="mb-6">
            <div className="flex flex-row justify-between">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="password"
              value={inputs.password}
              name="password"
              placeholder="Enter Your Passowrd"
              id="password"
              onChange={handleInput}
            />
            {errors.password ? (
              <p className="text-red-600"> {errors.password}</p>
            ) : (
              <p className="text-red-600"> {errors.passwordlength}</p>
            )}
          </div>

          <div className="mt-5 text-center">
            <button
              className="p-2 mt-3 text-white bg-blue-600 border rounded hover:bg-green-600"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signin;
