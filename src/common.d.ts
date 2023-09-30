type InputType = {
  icon: React.ReactElement,
 
  placeholder: string,
  error: string,
  className: string,
  type: string,
  tabindex: number,
  res:[]|undefined
}



type FormValues = {
  name: string;
  lastName: string;
  email: string,
  password:string
};


type User = {
  id: number,
  email:string,
  password:string,
  name:string,
  lastName:string,
}

type ContentPropsType = {
  children: ReactElement;
};
type DataContextValue = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>> | undefined;
};