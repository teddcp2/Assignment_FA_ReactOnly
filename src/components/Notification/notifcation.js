import React from "react";
import "react-toastify/dist/ReactToastify.css";
const Notification = ({ title }) => {
  return (
    <div className="card border-0 text-primary font-weight-bold">
      <div className="card-body">{title}</div>
    </div>
  );
};

export default Notification;
