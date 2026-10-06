"use client";
import type { ComponentType } from "react";
import Agent from "@/components/infocards/agent/agent";
import Attention from "@/components/infocards/attention/attention";
import ChainofThought from "@/components/infocards/chainthought/cot";
import ContextEngineering from "@/components/infocards/contextengineering/contextengineering";
import Contextwindow from "@/components/infocards/contextwindow/contextwindow";
import DiffusionModel from "@/components/infocards/Diffusion model/Diff";
import Distillation from "@/components/infocards/distillation/distillation";
import Embedding from "@/components/infocards/embedding/embedding";
import FineTune from "@/components/infocards/fine-tuning/fine";
import GPT from "@/components/infocards/GPT/gpt";
import Hallucination from "@/components/infocards/hallucination/hallucination";
import Inference from "@/components/infocards/inference/inference";
import LLM from "@/components/infocards/llm/llms";
import MCP from "@/components/infocards/MCP/MCP";
import Model from "@/components/infocards/modelterm/model";
import MixtureOfExperts from "@/components/infocards/moe/moe";
import Multimodal from "@/components/infocards/multimodal/multimodal";
import Neural from "@/components/infocards/neuralnetwork/neuralnet";
import Parameter from "@/components/infocards/parameter/parameter";
import Pretrain from "@/components/infocards/pretraining/pretrain";
import PromptCaching from "@/components/infocards/promptcaching/promptcaching";
import Quantization from "@/components/infocards/quantization/quantization";
import RAG from "@/components/infocards/rag/rag";
import ReasoningEffort from "@/components/infocards/reasoning/reasoning";
import Reinforcement from "@/components/infocards/reinforcement/reinf";
import Temperature from "@/components/infocards/temperature/temperature";
import Token from "@/components/infocards/token/token";
import ToolCalling from "@/components/infocards/toolcalling/toolcalling";
import Transformer from "@/components/infocards/transformer/transformer";
import Vector from "@/components/infocards/VectorDb/Vector";
import Workflow from "@/components/infocards/workflow/workflow";
import Hero from "@/components/hero/Hero";
import Sidebar from "@/components/sidebar/Sidebar";
import { allTerms } from "@/lib/glossary";

const cards: Record<string, ComponentType> = {
  token: Token,
  embedding: Embedding,
  "context-window": Contextwindow,
  temperature: Temperature,
  "neural-network": Neural,
  parameter: Parameter,
  model: Model,
  transformer: Transformer,
  attention: Attention,
  "mixture-of-experts": MixtureOfExperts,
  "diffusion-model": DiffusionModel,
  multimodal: Multimodal,
  "pre-training": Pretrain,
  "fine-tuning": FineTune,
  reinforcement: Reinforcement,
  distillation: Distillation,
  quantization: Quantization,
  llm: LLM,
  gpt: GPT,
  inference: Inference,
  "chain-of-thought": ChainofThought,
  "reasoning-effort": ReasoningEffort,
  hallucination: Hallucination,
  "prompt-caching": PromptCaching,
  rag: RAG,
  "vector-db": Vector,
  "tool-calling": ToolCalling,
  "context-engineering": ContextEngineering,
  agent: Agent,
  workflow: Workflow,
  mcp: MCP,
};

const page = () => {
  return (
    <div className="pb-24">
      <Sidebar />
      <Hero />
      {allTerms.map(({ id }) => {
        const Card = cards[id];
        return <Card key={id} />;
      })}
    </div>
  );
};

export default page;
