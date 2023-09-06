import React, { useState } from "react";
import "./NotificationsDisplay.css"; // Import the CSS file

const NotificationsDisplay = ({
  handleShowNotifications,
  showContainer,
  notifications,
  clearAll,
  handleClose
}) => {
  return (
    <div>
      <h2>Notifications</h2>
      <button className="button" onClick={handleShowNotifications}>
        Alert
      </button>
      <div
        id="notificationContainer"
        style={{ visibility: showContainer ? "visible" : "hidden" }}
      >
        {Object.keys(notifications).map((key) => {
          const notification = notifications[key];
          if (notification.log_level === "action") {
            return (
              <div className="notication-box" key={key}>
                <p>{notification.log}</p>
              </div>
            );
          }
          return null;
        })}

        <div className="notification_button">
          <button className="button" onClick={clearAll}>
            Clear All
          </button>
          <button className="button" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsDisplay;
