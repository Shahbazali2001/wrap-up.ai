import { BrainCircuit, FileOutput, FileText } from "lucide-react";
import { ReactNode } from "react";
import StepItemCard from "./step-item-card";
type Step = {
  icon: ReactNode;
  label: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    label: "Upload your PDF",
    description: "Simply drag & drop your PDF file and get started",
  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
    label: "AI Analysis",
    description: "Our AI processes your PDF and generates a summary",
  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5} />,
    label: "Get Summary",
    description: "Get a clear and concise summary of your PDF in seconds",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-xl mb-4 text-red-500">HOW IT WORKS</h2>
          <h3 className="font-bold text-3xl max-w-2xl mx-auto">
            Transform any PFD into easy to understand summary in three steps
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, index) => (
            <StepItemCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
