import React, { useState, useEffect } from "react";
import "./Alerts.css";
import xIcon from "./Alerts.css";
import ReactDOM from 'react-dom';


/**
 * Neat Idea: When we integrate a state manager we can have a parent component that handles the display of notifications
 * instead of mounting them using reactDOM. Also we could use that container to render multiple notifications
 * at once.
 */
export default function Alerts (props) {

  const [closeTimeout, setCloseTimeout] = useState(null);

  useEffect(() => {
    beginCloseTimeout();
  }, []);

  const closeAlertBar = () => {
    clearTimeout(closeTimeout);
    ReactDOM.unmountComponentAtNode(document.getElementById('alertbar-fixed-container'));
  }

  const beginCloseTimeout = () => {
    if (props.timer) {
      const timeout = setTimeout(() => closeAlertBar(), props.timer);
      setCloseTimeout(timeout);
    }
  }

  return (
    <div className={`alertbar-container ${props.messageType}-container`}
         onMouseEnter={() => clearTimeout(closeTimeout)}
         onMouseLeave={() => beginCloseTimeout()}>
      <div>
        <div className="alertbar-info-container">
          <div>
            <div className={`alertbar-icon ${props.messageType}-alertbar-icon`}></div>
          </div>
          <div>
            <h5 className="rubik-text">{props.title}</h5>
            <h5 className="muted-rubik-text">  {props.message}</h5>
          </div>
        </div>
        <div>
          <div onClick={() => closeAlertBar()} id="close-alertbar-icon">X</div>

        </div>
      </div>
    </div>
  );
}