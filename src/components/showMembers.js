import React from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { reset } from "./timers.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Users() {
  const tser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const removeData = (id) => {
    console.log(id);
    dispatch({ type: "deleteUse", payload: { id } });
    reset();
  };
  return (
    <div className="relative m-3 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              First Name
            </th>
            <th scope="col" className="px-6 py-3">
              Last Name
            </th>
            <th scope="col" className="px-6 py-3">
              User Name
            </th>
            <th scope="col" className="px-6 py-3">
              Password
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tser.map(
            ({ id, firstName, lastName, userName, email, password }, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {firstName}
                  </th>
                  <td className="px-6 py-4 text-bg">{lastName}</td>
                  <td className="px-6 py-4">{userName}</td>
                  <td className="px-6 py-4">{password}</td>
                  <td className="px-6 py-4">{email}</td>
                  <td className="flex px-6 py-4 ">
                    <TrashIcon
                      className="w-5 h-5 "
                      onClick={() => removeData(id)}
                    />
                    <Link to={`/edit/${id}`}>
                      {" "}
                      <PencilIcon className="w-5 h-5 " />
                    </Link>
                  </td>
                </>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
