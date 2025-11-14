"use client";
import Attention from "@/components/infocards/attention/attention";
import Contextwindow from "@/components/infocards/contextwindow/contextwindow";
import Embedding from "@/components/infocards/embedding/embedding";
import FineTune from "@/components/infocards/fine-tuning/fine";
import Latent from "@/components/infocards/latentspace/latentspace";
import Model from "@/components/infocards/modelterm/model";
import Neural from "@/components/infocards/neuralnetwork/neuralnet";
import Parameter from "@/components/infocards/parameter/parameter";
import Token from "@/components/infocards/token/token";
import Tokenization from "@/components/infocards/tokenization/tokenization";
import Transformer from "@/components/infocards/transformer/transformer";
import Pretrain from "@/components/pretraining/pretrain";
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
      <Latent />
      <Neural />
      <Parameter />
      <Model />
      <Transformer />
      <Attention />
      <Pretrain />
      <FineTune />
    </div>
  );
};

export default page;
