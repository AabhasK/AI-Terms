"use client";
import Contextwindow from "@/components/infocards/contextwindow/contextwindow";
import Embedding from "@/components/infocards/embedding/embedding";
import Token from "@/components/infocards/token/token";
import Tokenization from "@/components/infocards/tokenization/tokenization";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

const page = () => {
  return (
    <div>
      <Sidebar />
      <Token />
      <Tokenization />
      <Embedding />
      <Contextwindow />
    </div>
  );
};

export default page;
