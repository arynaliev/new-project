import React from "react";
import "./message.style.css";
import { FcApproval, InfoIcon, FcDisclaimer } from "react-icons/fc";

const Message = ({ type, children }) => {
  const showIcon = () => {
    if (type === "error") {
      return <FcDisclaimer />;
    } else if (type === "success") {
      return <FcApproval />;
    } else if (type === "info") {
      return <InfoIcon />;
    }
  };

  return (
    <div className={`message-container ${type}`}>
      {/* <FcApproval /> */}
      <p>{children}</p>
    </div>
  );
};

export default Message;
