import React, { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>GuestList</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button>Add guest</button>
    </div>
  );
};

export default GuestList;
