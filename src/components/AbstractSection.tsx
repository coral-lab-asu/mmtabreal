const AbstractSection = () => {
  return (
    <section id="abstract" className="py-6 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Abstract</h2>
        <p className="text-foreground leading-relaxed text-base md:text-lg">
          Multimodal tables i.e. tabular layouts inter-
leaved with charts, maps, icons, and color encodings are ubiquitous in real applications yet
remain difficult for Multimodal Large Language Models (MLLMs). Despite advances
in text and image understanding, systematic
evaluation of table-centric multimodal reasoning is limited. We introduce MMTABREAL, a
MultiModal Table Benchmark, human-curated
suite of 500 real-world tables paired with 4,021
question–answer pairs. MMTABREAL spans
four question types, five reasoning categories,
and eight structural archetypes. Evaluations of
state-of-the-art models reveal substantial gaps,
especially in visual grounding, spatial alignment, and multi-step inference, with 20–40%
performance drops relative to existing benchmarks. These results highlight the need for
architectures that more tightly fuse vision with
tabular structure and support explicit numeric/ logical operations. MMTABREAL is released
for evaluation only, providing a rigorous, reproducible testbed that reflects the linguistic,
structural, and reasoning complexity of realworld multimodal tables.
        </p>
      </div>
    </section>
  );
};

export default AbstractSection;
