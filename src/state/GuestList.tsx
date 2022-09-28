import React, { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  //need to define what is to be stored in arrays
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h1>GuestList</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add guest</button>
    </div>
  );
};

export default GuestList;
