import Card from "./CardItem";

type CardWrapperType = {
  query: string;
};
const CardWrapper = ({ query }: CardWrapperType) => {
  console.log(query);

  return (
    <div className="grid grid-cols-responsive-cols auto-rows-min h-full  gap-3 flex-1">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      
    </div>
  );
};

export default CardWrapper;
