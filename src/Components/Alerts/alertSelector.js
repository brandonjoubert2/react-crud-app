import ReactDOM from 'react-dom';
import React from "react";
import Alerts from './Alerts';



const triggerAlertbar = (title, message, messageType) => {
  const validMessageTypes = ['error', 'info', 'warning', 'success'];
  if (!validMessageTypes.includes(messageType)) {
    throw Error("Invalid alertbar message type");
  }
  ReactDOM.render(
    <Alerts messageType={messageType} timer={4000} title={title} message={message} />,
    document.getElementById('alertbar-fixed-container')
  );
}

export const showErrorMessage = (title, message) => {
  triggerAlertbar(title, message, 'error');
}

export const showInfoMessage = (title, message) => {
  triggerAlertbar(title, message, 'info');
}

export const showSuccessMessage = (title, message) => {
  triggerAlertbar(title, message, 'success');
}

export const showWarningMessage = (title, message) => {
  triggerAlertbar(title, message, 'warning');
}