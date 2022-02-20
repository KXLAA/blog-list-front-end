import React from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  console.log(notification);
  return <>{notification.visible ? <div>{notification.message}</div> : null}</>;
};

export default Notification;
