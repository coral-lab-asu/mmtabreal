import prashamTitiya from "@/assets/prasham_titiya.jpeg";
import vivekGupta from "@/assets/vivek_gupta.jpg";
import chittaBaral from "@/assets/chitta_baral.jpg";
import jainilTrivedi from "@/assets/jainil_trivedi.jpg";


const people = [
  {
    name: "Prasham Titiya",
    role: "Co-first Author",
    affiliation: "Arizona State University",
    link: "https://www.linkedin.com/in/prasham-titiya-99b686205",
    image: prashamTitiya,
  },
  {
    name: "Jainil Trivedi",
    role: "Co-first Author",
    affiliation: "Arizona State University",
    link: "https://www.linkedin.com/in/jainiltrivedi04/",
    image: jainilTrivedi,
  },
  {
    name: "Chitta Baral",
    role: "Author",
    affiliation: "Arizona State University",
    link: "https://chitta.orissalinks.com/www/",
    image: chittaBaral,
  },
  {
    name: "Vivek Gupta",
    role: "Author",
    affiliation: "Arizona State University",
    link: "https://vgupta123.github.io/",
    image: vivekGupta,
  }
];

const PeopleSection = () => {
  return (
    <section id="people" className="py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">People</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {people.map((person, i) => (
            <a
              key={i}
              href={person.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-3 p-2 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xl">
                  {person.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
              )}
              <div>
                <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                  {person.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{person.affiliation}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
