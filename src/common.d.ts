type InputType = {
  icon: React.ReactElement;

  placeholder: string;
  error: string;
  className: string;
  type: string;
  tabindex: number;
  res: [] | undefined;
};

type FormValues = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};
type PostFormValues = {
  title: string;
  phone: number;
  description: string;
  address: string;
  price: number;
};
interface PostParamsType extends PostFormValues {
  id?: number | string;
  userId: number;
  latlng: LatLngExpression;
  userName:string
}

type User = {
  id: number;
  email: string;
  password: string;
  name: string;
  lastName: string;
};

type ContentPropsType = {
  children: ReactElement;
};
type DataContextValue = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>> | undefined;
};

type MapType = {
  position: LatLngExpression;
  dragable: boolean;
  onChageLatLng: (latlng: LatLngExpression) => void;
};

type QueryParamsType = {
  address_like: string;
  _limit: number;
  _page: number | string;
};

type PostType = {
  title: string;
  address: string;
  phone: number;
  description: string;
  price: number;
  latlng: [number, number];
  userId: number;
  userName: string;
  id: number;
};

type PostResponseType = {
  posts: PostType[],
  totalPage:number
}

type DebounceType = F & {
  callback:()=>void
}
