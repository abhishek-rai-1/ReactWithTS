type info = {
  id: number;
  name: string;
  email: string;
};

type adminInfoList = info & {
  role : string;
  lastLogin : Date
};

export {type info, type adminInfoList} 