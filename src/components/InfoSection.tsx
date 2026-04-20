import { Table, BarChart3, Brain, Target } from "lucide-react";

const highlights = [
  {
    icon: Table,
    title: "500 Real-World Multimodal Tables",
    description:
      "Curated collection of actual tables from diverse domains featuring charts, maps, icons, and color encodings interleaved with tabular structures.",
  },
  {
    icon: BarChart3,
    title: "4,021 Question-Answer Pairs",
    description:
      "Comprehensive dataset spanning four question types, five reasoning categories, and eight structural archetypes for thorough evaluation.",
  },
  {
    icon: Brain,
    title: "Multi-Modal Reasoning Challenge",
    description:
      "Requires visual grounding, spatial alignment, and multi-step inference, revealing substantial gaps in state-of-the-art multimodal models.",
  },
  {
    icon: Target,
    title: "Rigorous Benchmark for Evaluation",
    description:
      "Evaluation-only release providing a reproducible testbed that reflects the linguistic, structural, and reasoning complexity of real-world tables.",
  }
];

const InfoSection = () => {
  return (
    <section id="info" className="py-8 px-3 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Key Features</h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          MMTabReal provides a comprehensive benchmark for multimodal table understanding with real-world complexity and systematic evaluation coverage.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-4 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
