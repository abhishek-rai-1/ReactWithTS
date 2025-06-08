import type { ReactNode } from "react";

type UserType = {
  name: string;
  age: number;
  isStudent: boolean;
  children: ReactNode;
};

// we can also make the interface

/*
interface UserType {
  name: string;
  age: number;
  isStudent: boolean;
  children: ReactNode;
}
*/

export const User = ({ name, age, isStudent, children }: UserType) => {
  return (
    <div>
      <h2>Name : {name}</h2>
      <h2>Age : {age}</h2>
      <h3>isStudent : {isStudent}</h3>
      <h4>{children}</h4>
    </div>
  );
};
