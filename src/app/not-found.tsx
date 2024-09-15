"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex-1 ml-[20%] w-full">
      <h1 className="text-center mt-36 text-9xl font-bold">404</h1>
      <span className="text-center block uppercase font-bold ">
        Page Not Found
      </span>
      <span className="block text-center w-1/3 my-2 m-auto">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </span>
      <Button className="block m-auto my-10">
        <Link href="/">Goto Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
