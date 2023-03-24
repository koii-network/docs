import React, {ReactNode} from "react";

type Button = {
    children: ReactNode;
};

export const Button = ({children}: Button) => {
  return (
    <button className="py-3.5 px-5 w-full rounded-md border-none no-underline hover:no-underline text-koii-white font-semibold font-base tracking-wider bg-koii-purple-2 cursor-pointer">
        {children}
    </button>
  );
};
