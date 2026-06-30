import { FileText, Github } from "lucide-react";
import bg from "@/assets/background1.png";
import asuLogo from "@/assets/asu_logo.png";

const authors = [
  { name: "Prasham Titiya", affiliation: "asu", logo: asuLogo, note: "*", link: "https://www.linkedin.com/in/prasham-titiya-99b686205" },
  { name: "Jainil Trivedi", affiliation: "asu", logo: asuLogo, note: "*", link: "#" },
  { name: "Chitta Baral", affiliation: "asu", logo: asuLogo, note: "", link: "#" },
  { name: "Vivek Gupta", affiliation: "asu", logo: asuLogo, note: "", link: "https://vgupta123.github.io/" },
];

const affiliations = [
  { id: "asu", name: "Arizona State University", logo: asuLogo },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent to-background w-full">
      {/* Background logo watermark */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none select-none">
        <img src={bg} alt="" className="w-full h-full object-fill" aria-hidden="true" />
      </div>

      <div className="relative z-10 pt-16 pb-12 px-4 text-center w-full">
        <div className="max-w-4xl mx-auto">
          
          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-3 tracking-tight">
            MMTabReal:
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-serif mb-3">
            Real-World Benchmark for Multimodal Table Understanding
          </p>

          {/* Conference badge 
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium tracking-wide">
              ACL 2026 (Under Review)
            </span>
          </div>
            */}
            
          {/* Authors */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-2">
            {authors.map((author, i) => (
              <span key={i} className="author-name inline-flex items-center gap-1">
                <a href={author.link} target="_blank" rel="noopener noreferrer">
                  {author.name}
                </a>
                {author.note && (
                  <sup className="text-primary text-xs font-bold">{author.note}</sup>
                )}
                <img src={author.logo} alt="" className="h-7 w-7 object-contain inline" />
                {i < authors.length - 1 && <span className="text-muted-foreground">,</span>}
              </span>
            ))}
          </div>

          {/* Co-author notation */}
          <div className="text-sm text-muted-foreground mb-3">
            <span><sup className="text-primary font-bold">*</sup> Co-first authors</span>
          </div>

          {/* Affiliations */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mb-10 text-muted-foreground text-sm">
            {affiliations.map((aff) => (
              <span key={aff.id} className="flex items-center gap-1.5">
                <img src={aff.logo} alt={`${aff.name} logo`} className="h-7 w-7 object-contain" />
                {aff.name}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://arxiv.org/abs/2505.21771" target="_blank" rel="noopener noreferrer"className="paper-link">
              <FileText className="w-4 h-4" />
              Paper
            </a>
            <a href="https://github.com/CoRAL-ASU/MMTabReal" target="_blank" rel="noopener noreferrer" className="paper-link-outline">
              <Github className="w-4 h-4" />
              Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
