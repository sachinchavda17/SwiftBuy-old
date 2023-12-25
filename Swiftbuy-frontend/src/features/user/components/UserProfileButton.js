import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../userSlice";
import { Icon } from "@iconify/react";
const UserProfileButton = () => {
  const user = useSelector(selectUserInfo);
  return (
    <div className="bg-white text-white p-2 cursor-pointer flex items-center rounded-lg">
      <div className="mr-2 overflow-hidden rounded-md">
        <Icon icon="ep:user-filled" width={"23"} color="black" />
      </div>
      <div className="mr-2 text-sm capitalize text-black">
        {user?.name ? user?.name : "Guest"}
      </div>
      <div>
        <Icon icon="mingcute:down-fill" width={"20"} color="black" />
      </div>
    </div>
  );
};

export default UserProfileButton;
