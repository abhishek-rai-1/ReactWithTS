import { useState, type ReactElement } from "react";

type userInfo = {
  name: string;
  age: number;
  email: string;
};

export const UserProfile = () => {
  const [userdetail, setUserdetail] = useState<userInfo>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName = (name: string) => {
    setUserdetail((prev) => ({ ...prev, name }));
  };

  const updateAge = (age: string) => {
    setUserdetail((prev) => ({ ...prev, age: Number(age) }));
  };

  const updateEmail = (email: string) => {
    setUserdetail((prev) => ({ ...prev, email }));
  };

  return (
    <div>
      <h1>User Details</h1>

      <input
        type="text"
        onChange={(e) => updateName(e.target.value)}
        value={userdetail.name}
        placeholder="enter the name"
      />

      <input
        type="number"
        value={userdetail.age > 0 ? userdetail.age : ""}
        onChange={(e) => updateAge(e.target.value)}
      />

      <input
        type="email"
        value={userdetail.email}
        onChange={(e) => updateEmail(e.target.value)}
      />

      <h2>Profile Summary : </h2>

      <p>Name : {userdetail.name}</p>
      <p>Age : {userdetail.age}</p>
      <p>Email : {userdetail.email}</p>
    </div>
  );
};
