import type { info } from "./Types";

type infoDetail = {
    userdetail : info;
}

export const UserInfo = ({ userdetail }: infoDetail) => {
    const {id, name, email} = userdetail;
  return (
    <div>
      <h1>id : {id}</h1>
      <h2>name : {name}</h2>
      <h3>email : {email}</h3>
    </div>
  );
};
