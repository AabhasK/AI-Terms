"use client";
import Agent from "@/components/infocards/agent/agent";
import Attention from "@/components/infocards/attention/attention";
import ChainofThought from "@/components/infocards/chainthought/cot";
import CNN from "@/components/infocards/CNN/Cnn";
import Contextwindow from "@/components/infocards/contextwindow/contextwindow";
import DiffusionModel from "@/components/infocards/Diffusion model/Diff";
import Embedding from "@/components/infocards/embedding/embedding";
import FineTune from "@/components/infocards/fine-tuning/fine";
import GPT from "@/components/infocards/GPT/gpt";
import Huggingface from "@/components/infocards/hugging face/hug";
import Inference from "@/components/infocards/inference/inference";
import Latent from "@/components/infocards/latentspace/latentspace";
import LLM from "@/components/infocards/llm/llms";
import Model from "@/components/infocards/modelterm/model";
import Neural from "@/components/infocards/neuralnetwork/neuralnet";
import Parameter from "@/components/infocards/parameter/parameter";
import RAG from "@/components/infocards/rag/rag";
import Reinforcement from "@/components/infocards/reinforcement/reinf";
import RNN from "@/components/infocards/RNN/Rnn";
import Token from "@/components/infocards/token/token";
import Tokenization from "@/components/infocards/tokenization/tokenization";
import Transformer from "@/components/infocards/transformer/transformer";
import Vector from "@/components/infocards/VectorDb/Vector";
import Workflow from "@/components/infocards/workflow/workflow";
import Pretrain from "@/components/infocards/pretraining/pretrain";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
import MCP from "@/components/infocards/MCP/MCP";

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
      <RNN />
      <CNN />
      <Parameter />
      <Model />
      <DiffusionModel />
      <Huggingface />
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
      <Vector />
      <GPT />
      <MCP />
    </div>
  );
};

export default page;
