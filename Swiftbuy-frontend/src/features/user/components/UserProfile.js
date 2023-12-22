import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

export default function UserProfile() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();

  return (
    <div>
      <div>
        {/* {orders &&
          orders?.map((order) => ( */}
            <div>
              <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
                    Name
                  </h1>
                  <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
                    email address
                  </h3>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <p className="mt-0.5 text-sm text-gray-500">Your Address :</p>
                  <div className="flex justify-between mt-2 gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
                    <div className="flex gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {/* {order.selectedAddress.name} */}12345678
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {/* {order.selectedAddress.street} */}234567890
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {/* {order.selectedAddress.pinCode} */}345678
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        {/* Phone: {order.selectedAddress.phone} */}12345678
                      </p>
                      <p className="text-sm leading-6 text-gray-500">
                        {/* {order.selectedAddress.city} */}23456789
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* ))} */}
      </div>
    </div>
  );
}
