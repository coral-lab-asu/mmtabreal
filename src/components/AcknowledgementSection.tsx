const AcknowledgementSection = () => {
  return (
    <section id="acknowledgement" className="py-6 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Acknowledgement</h2>
        <p className="text-muted-foreground leading-relaxed">
          This research has been supported and conducted at <a href="https://engineering.asu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Arizona State University</a>. We gratefully acknowledge the <a href="https://coral-lab-asu.github.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Complex Data Analysis and Reasoning Lab</a> at <a href="https://scai.engineering.asu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">School of Augmented Intelligence</a>, <a href="https://engineering.asu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Arizona State University</a> for providing computational resources and institutional support.
        </p>
      </div>
    </section>
  );
};

export default AcknowledgementSection;
