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