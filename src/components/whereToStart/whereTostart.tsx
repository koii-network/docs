import React, {ReactNode} from "react";
import { WhatToDo } from "./whatTodo";
import { WhereToBegin } from "./whereToBegin";

export const WhereToStart = () => {
  return (
   <div className="pt-20 pb-36 bg-koii-blue-3">
    <WhatToDo />
    <WhereToBegin />
   </div>
  );
};
