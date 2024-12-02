import React from "react";
import { Spinner } from "@nextui-org/react";

const Loading = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner color="default" />
      </div>
    </>
  );
};

export default Loading;
