import { AdminInfo } from "./AdminInfo";
import type { adminInfoList, info } from "./Types";
import { UserInfo } from "./UserInfo";

const App = () => {
  const user : info = {
    id: 1,
    name: "abhi",
    email: "abhi@gmail.com",
  };

  const admin : adminInfoList = {
    id: 1,
    name: "abhishek",
    email: "abhishek@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <div>
      <UserInfo userdetail = {user}/>
      <AdminInfo admindetail = {admin}/>
    </div>
  );
};

export default App;
