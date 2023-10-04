import { ReactNode } from "react"
import useDataContext from "../../hooks/context/useDataContext";

type PropsType = {
  children: ReactNode;
  userId:number
}

const ShowActions = ({userId,children}:PropsType) => {
  const {user} = useDataContext()
  return user.id ===userId ? children:<p>You can't Change this post </p>
}

export default ShowActions