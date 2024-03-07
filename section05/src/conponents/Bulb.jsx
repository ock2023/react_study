import React, { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  console.log(light);

  const onClickLight = () => {
    setLight(light === "ON" ? "OFF" : "ON");
  };

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
      <button onClick={onClickLight}>{light === "ON" ? "끄기" : "켜기"}</button>
    </div>
  );
};

export default Bulb;
