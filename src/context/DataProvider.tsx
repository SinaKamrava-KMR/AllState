import { createContext, useState } from "react";

export const DataContext = createContext<DataContextValue | undefined>(
  undefined
);

const initUser = {
  email: "",
  password: "",
  name: "",
  lastName: "",
  id: 0,
};

const DataProvider = ({ children }: ContentPropsType) => {
  const [user, setUser] = useState<User>(initUser);

  const values: DataContextValue = {
    user,
    setUser,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};




export default DataProvider;
