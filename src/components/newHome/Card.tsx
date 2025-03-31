import React from "react";

interface Badge {
  text: string;
  color: string;
  textColor: string;
}

const Card = ({
  title,
  description,
  children,
  image,
  imageHeight,
  descriptionHeight,
  badges,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
  image: string;
  imageHeight?: string;
  descriptionHeight?: string;
  badges?: Badge[];
}) => {
  return (
    <div
      className={
        `w-full bg-white border-x-[1px] border-b-[1px] border-t border-solid rounded-b-[10px] border-[#4d3d8d26] rounded-[10px]`
      }
    >
      {image && <img src={image} className={`w-full rounded-t-[10px] ${imageHeight} object-contain`} />}
      {badges && badges.length > 0 && (
        <div className="flex flex-wrap gap-2 px-4 pt-4">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs sm:text-sm rounded-full text-center whitespace-nowrap"
              style={{
                backgroundColor: badge.color,
                color: badge.textColor,
              }}
            >
              {badge.text}
            </span>
          ))}
        </div>
      )}
      {(title || description) && (
        <div className="p-4 bg-transparent w-full flex-col text-koii-purple-2 items-start text-start tracking-wider justify-start hover:no-underline border-none no-underline">
          {title && (
            <p className="no-underline hover:no-underline w-full flex items-start font-semibold text-2xl m-0">
              {title}
            </p>
          )}
          {description && (
            <p className={`m-0 text-base ${descriptionHeight}`}>{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

export default Card;