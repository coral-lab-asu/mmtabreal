import { useState } from "react";
import { X } from "lucide-react";
import example1 from "@/assets/example1.jpg";
import example2 from "@/assets/example2.png";
import example3 from "@/assets/example3.jpeg";

const examples = [
  {
    title: "Example 1",
    image: example1,
    alt: "MMTabReal example 1",
    qa: [
      { q: "Which team has the least number of draws?", a: "Arsenal F.C." },
      { q: "What is the color of the badge of the club with 60 points and a negative goal difference?", a: "Red" },
      { q: "What is Chelsea's longest winning streak?", a: "3" },
      { q: "Which club has the lowest goal difference for a team with a win percentage greater than 50?", a: "Tottenham Hotspurs" },
    ],
  },
  {
    title: "Example 2",
    image: example2,
    alt: "MMTabReal example 2",
    qa: [
      { q: "What is the actual MTD for the third metric on January 18, 2013?", a: "57" },
      { q: "How many FYTD units were sold in total?", a: "5313" },
      { q: "Which metric reported the greatest increase?", a: "FYTD" },
      { q: "What colored variance graph shows a steady decline over time?", a: "Blue" },
    ],
  },
  {
    title: "Example 3",
    image: example3,
    alt: "MMTabReal example 3",
    qa: [
      { q: "Which ID numbers have a benzene bases R3?", a: "[4989, 4990]" },
      { q: "How many Nitrogen atoms exist in R1 and R3 combined?", a: "8" },
      { q: "What is the name of the common ion in R2?", a: "Hydroxide Ion" },
      { q: "How many Hydrogen atoms exist in the R1 of 4988?", a: "13" },
    ],
  },
];

const MainFigureSection = () => {
  const [selectedImage, setSelectedImage] = useState<null | { src: string; alt: string }>(null);

  return (
    <section id="main-figure" className="py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Dataset Examples</h2>
        <div className="grid md:grid-cols-3 gap-4 items-stretch">
          {examples.map((example, index) => (
            <div key={index} className="rounded-xl border border-border overflow-hidden shadow-sm bg-background h-full flex flex-col">
              <button
                type="button"
                className="w-full aspect-[4/3] cursor-zoom-in"
                onClick={() => setSelectedImage({ src: example.image, alt: example.alt })}
                aria-label={`Open ${example.title} image`}
              >
                <img
                  src={example.image}
                  alt={example.alt}
                  className="w-full h-full object-contain bg-background"
                />
              </button>
              <div className="px-3 py-3 border-t border-border">
                <p className="text-sm font-medium text-foreground text-center">{example.title}</p>
                <div className="space-y-2">
                  {example.qa.map((item, qaIndex) => (
                    <p key={qaIndex} className="text-[11px] leading-relaxed text-foreground">
                      <span className="font-semibold">Q:</span> {item.q} <span className="font-semibold">A:</span> {item.a}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center mt-4">
          Figure: Examples 1 to 3 with their respective question-answer pairs from MMTabReal.
        </p>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/85 p-4 md:p-8" onClick={() => setSelectedImage(null)}>
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 rounded-full bg-white/10 hover:bg-white/20 text-white p-2"
            aria-label="Close enlarged image"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default MainFigureSection;
