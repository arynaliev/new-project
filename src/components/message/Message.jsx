import React from "react";
import "./message.style.css";
import { FcApproval, FcInfo, FcDisclaimer } from "react-icons/fc";

const Message = ({ type, children }) => {
  const showIcon = () => {
    if (type === "error") {
      return <FcDisclaimer />;
    } else if (type === "success") {
      return <FcApproval />;
    } else if (type === "info") {
      return <FcInfo />;
    }
  };

  return (
    <div className={`message-container ${type}`}>
      {showIcon()}
      <p>{children}</p>
    </div>
  );
};

export default Message;
