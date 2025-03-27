import React from "react";

const Card = ({title, description, children, image, imageHeight, descriptionHeight}: {title: string, description: string, children: React.ReactNode, image: string, imageHeight?: string, descriptionHeight?: string}) => {
  return (
    <div
      className={
        `w-full bg-white border-x-[1px] border-b-[1px] border-t border-solid rounded-b-[10px] border-[#4d3d8d26] rounded-[10px]`
      }
    >
      <img src={image} className={`w-full rounded-t-[10px] ${imageHeight} object-contain`} />
      <div className="p-4 bg-transparent w-full flex-col text-koii-purple-2 items-start text-start tracking-wider justify-start hover:no-underline border-none no-underline">
        <p className="no-underline hover:no-underline w-full flex items-start font-semibold text-2xl m-0 ">
          {title}
        </p>
        <p className={`m-0 text-base ${descriptionHeight}`}>{description}</p>
      </div>
        {children}
    </div>
  );
}
export default Card