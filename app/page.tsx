"use client";
import Agent from "@/components/infocards/agent/agent";
import Attention from "@/components/infocards/attention/attention";
import ChainofThought from "@/components/infocards/chainthought/cot";
import Contextwindow from "@/components/infocards/contextwindow/contextwindow";
import Embedding from "@/components/infocards/embedding/embedding";
import FineTune from "@/components/infocards/fine-tuning/fine";
import Inference from "@/components/infocards/inference/inference";
import Latent from "@/components/infocards/latentspace/latentspace";
import LLM from "@/components/infocards/llm/llms";
import Model from "@/components/infocards/modelterm/model";
import Neural from "@/components/infocards/neuralnetwork/neuralnet";
import Parameter from "@/components/infocards/parameter/parameter";
import RAG from "@/components/infocards/rag/rag";
import Reinforcement from "@/components/infocards/reinforcement/reinf";
import Token from "@/components/infocards/token/token";
import Tokenization from "@/components/infocards/tokenization/tokenization";
import Transformer from "@/components/infocards/transformer/transformer";
import Workflow from "@/components/infocards/workflow/workflow";
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
      <Reinforcement />
      <ChainofThought />
      <Inference />
      <RAG />
      <Agent />
      <Workflow />
      <LLM />
    </div>
  );
};

export default page;
