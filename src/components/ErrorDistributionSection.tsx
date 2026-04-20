import errorDistributionTypeImage from "@/assets/error_distribution_type.png";

const errorTypes = [
  {
    title: "Entity Disambiguation Issues",
    description: "Image misidentified, leading to incorrect interpretation of content and conclusions"
  },
  {
    title: "Entity Identification Issues",
    description: "Image not recognized at all, preventing meaningful analysis"
  },
  {
    title: "Reasoning Errors",
    description: "Image correctly identified but reasoning process is flawed, resulting in incorrect answers"
  },
  {
    title: "Identification of Visual Attributes",
    description: "Missing or misinterpreting key visual details such as shapes, colors, or patterns"
  },
  {
    title: "Structural Errors",
    description: "Misunderstanding tabular or structured data, including rows, columns, or hierarchical relationships"
  },
  {
    title: "Mathematical Errors",
    description: "Mistakes in reading or computing numerical values, such as counting or calculations"
  },
  {
    title: "Partial Answers",
    description: "Responses are incomplete and miss essential details"
  },
  {
    title: "Extra Information or Hallucination",
    description: "Adding incorrect or unsupported details not present in the image, often due to prior assumptions"
  }
];

const ErrorDistributionSection = () => {
  return (
    <section id="error-distribution" className="py-8 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Error Distribution</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          We conduct a comprehensive error analysis to identify failure modes across different error types. This analysis reveals where current multimodal models struggle most with table understanding.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {errorTypes.map((error, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-background p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-primary">
                    {String.fromCharCode(97 + index)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-sm font-semibold text-foreground mb-1">
                    {error.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {error.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Error Distribution</h3>
          <div className="flex justify-center">
            <div className="inline-block" style={{ maxWidth: "760px", width: "100%" }}>
              <img
                src={errorDistributionTypeImage}
                alt="Error type distribution"
                className="rounded-lg border border-border shadow-md w-full"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Figure: This is the distribution of error types.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorDistributionSection;
