import {  ReactNode } from "react";

type CardWrapperType = {
  children:ReactNode
};

const CardWrapper = ({ children }: CardWrapperType) => {

  return (
    <div className="grid grid-cols-responsive-cols auto-rows-min h-full  gap-3 flex-1">
      {children}
    </div>
  );
};

export default CardWrapper;
