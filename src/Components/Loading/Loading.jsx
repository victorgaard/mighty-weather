import React from "react";
import { Skeleton } from "../Skeleton";

function Loading() {
  return (
    <div className="Skeleton__wrapper">
      <Skeleton type="title" />
      <Skeleton type="paragraph" />
      <Skeleton type="icon" />
      <div className="flex">
        <Skeleton type="header" />
        <Skeleton type="header" />
      </div>
    </div>
  );
}

export { Loading };
