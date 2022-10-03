import React, { useState, useRef } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 30 },
  { name: "Troy", age: 40 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>();
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      UserSearch
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
