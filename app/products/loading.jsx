import React from "react";
import { Spinner } from "@nextui-org/spinner";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner size="lg" />
    </div>
  );
};

export default loading;
