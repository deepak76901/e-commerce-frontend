import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "./userSlice";
import { selectLoggedInUser } from "../auth/authSlice";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  const handleEdit = () => {
    
  }
  const handleRemove = (e,index) => {

  }

  return (
    <div>
      <div className="mt-8 p-4 bg-white ">
        <h2 className="text-3xl pt-3 pb-3 font-semibold bg-white pl-3">
          Name: {user.name ? user.name : "john doe"}
        </h2>
        <h2 className="text-red-900 pt-3 pb-3 font-semibold bg-white pl-3">
          Email Address: {user.email ? user.email : "johndoe@gmail.com"}
        </h2>

        <div className="mt-8 p-4 bg-white border-t border-gray-200 px-4 py-6 sm:px-6">
          <p className="mt-0.5 text-sm mt-5 text-xl text-gray-500">
            Your Addresses :
          </p>
          {user.addresses.map((address,index) => (
            <div className="flex justify-between gap-x-6 py-5 border-solid  border-3 border-gray-900">
              <div className="flex min-w-0 gap-x-4  ">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {address.name}
                  </p>
                  <p className="mt-1 truncate text-sm leading-5 text-gray-800">
                    {address.street}
                  </p>
                  <p className="text-sm leading-6  text-gray-900">
                    City: {address.city}
                  </p>
                  <p className="text-sm leading-6  text-gray-900">
                    phone: {address.pincode}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <button
                  onClick={(e) => handleEdit(e, index)}
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => handleRemove(e,index)}
                  type="button"
                  className="font-medium text-red-600 hover:text-indigo-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
