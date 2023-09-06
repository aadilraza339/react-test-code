import "./styles.css";
import PlantTags from "./PlantTags";
import NotificationsDisplay from "./NotificationsDisplay";
import { useState } from "react";

export default function App() {
  const notificationsData = {
    "10": {
      log_level: "action",
      log: "Bot 1 dispatched to station1",
      created_at: "2022-12-26 11:56:00",
      fleet: "test1"
    },
    "11": {
      log_level: "info",
      log: "Bot 3 has low battery",
      created_at: "2023-12-26 11:56:02",
      fleet: "test1"
    },
    "12": {
      log_level: "action",
      log: "Bot 2 started the trip",
      created_at: "2023-12-26 11:56:00",
      fleet: "test1"
    },
    type: "notifications"
  };

  const [notifications, setNotifications] = useState(notificationsData);

  const plantData = [
    { plant_name: "plant1", tag: "production" },
    { plant_name: "plant2", tag: "production" },
    { plant_name: "plant3", tag: "production" },
    { plant_name: "plant4", tag: "warehouse" },
    { plant_name: "plant5", tag: "warehouse" },
    { plant_name: "plant6", tag: "warehouse" }
  ];

  const clearAll = () => {
    setNotifications([]);
  };
  const [showContainer, setShowContainer] = useState(false);

  const handleShowNotifications = () => {
    setShowContainer(!showContainer);
  };
  const handleClose = () => {
    handleShowNotifications();
    setNotifications(notificationsData);
  };
  return (
    <div className="App">
      <NotificationsDisplay
        handleClose={handleClose}
        showContainer={showContainer}
        setShowContainer={setShowContainer}
        handleShowNotifications={handleShowNotifications}
        notifications={notifications}
        clearAll={clearAll}
      />
      <PlantTags plantData={plantData} />
    </div>
  );
}
