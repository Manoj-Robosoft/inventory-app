import React, { useState } from "react";

import "./ToggleSwitch.css";

const ToggleSwitch = (props) => {
  const [checked, setChecked] = useState(props.checked);

  const handleToggleChange = (e) => {
    setChecked(!checked);
  };

  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggleChange}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
