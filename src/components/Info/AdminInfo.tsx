import type { adminInfoList } from "./Types"

type admininfo = {
    admindetail : adminInfoList;
}

export const AdminInfo = ({admindetail} : admininfo) => {
    const {id, name, email, role, lastLogin} = admindetail
  return (
    <div>
        <h1>id : {id}</h1>
        <h2>name : {name}</h2>
        <h2>email : {email}</h2>
        <h3>role : {role}</h3>
        <h4>last login : {lastLogin.toLocaleString()}</h4>
    </div>
  )
}
