const DatasetsSection = () => {
  // Dataset Statistics Table
  const stats = [
    { metric: "Total Tables", value: "500" },
    { metric: "Total Questions", value: "4,021" },
    { metric: "Avg. Images per Table", value: "23.67" },
    { metric: "Avg. Rows per Table", value: "19.49" },
    { metric: "Avg. Columns per Table", value: "10.85" },
    { metric: "% Rows with Images", value: "89.27%" },
    { metric: "% Columns with Images", value: "28.42%" },
  ];

  const questionTypes = [
    {
      title: "Explicit Questions",
      description:
        "Directly reference an entity whose image is present in the table, testing straightforward text-to-visual alignment.",
    },
    {
      title: "Implicit Questions",
      description:
        "Require reasoning over entities not explicitly named in the question or answer, but necessary in intermediate steps.",
    },
    {
      title: "Visual Questions",
      description:
        "Depend on visual cues such as icons, logos, maps, or color encodings that must be grounded correctly.",
    },
    {
      title: "Answer-Mention Questions",
      description:
        "Contain direct answer clues in the prompt but still require table navigation and verification for correctness.",
    },
  ];

  return (
    <section id="dataset-statistics" className="py-8 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Dataset Details</h2>
        
        {/* Table 1: Dataset Statistics */}
        <div>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-4">MMTabReal Dataset Statistics</h3>
          <div className="overflow-x-auto rounded-lg border border-border shadow-md">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-3 text-left font-semibold">Metric</th>
                  <th className="px-4 py-3 text-right font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((stat, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                    <td className="px-4 py-2 text-foreground">{stat.metric}</td>
                    <td className="px-4 py-2 text-right font-medium">{stat.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Question Types</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {questionTypes.map((type, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="font-serif text-base font-semibold text-foreground">{type.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed mt-1">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatasetsSection;
