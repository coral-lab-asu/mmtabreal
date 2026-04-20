import HeroSection from "@/components/HeroSection";
import MainFigureSection from "@/components/MainFigureSection";
import AbstractSection from "@/components/AbstractSection";
import InfoSection from "@/components/InfoSection";
import DatasetsSection from "@/components/DatasetsSection";
import ResultsSection from "@/components/ResultsSection";
import ErrorDistributionSection from "@/components/ErrorDistributionSection";
import PeopleSection from "@/components/PeopleSection";
import CitationSection from "@/components/CitationSection";
import AcknowledgementSection from "@/components/AcknowledgementSection";
import UniversityLogosSection from "@/components/UniversityLogosSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AbstractSection />
      <MainFigureSection />
      <InfoSection />
      <DatasetsSection />
      <ResultsSection />
      <ErrorDistributionSection />
      <PeopleSection />
      <CitationSection />
      <AcknowledgementSection />
      <UniversityLogosSection />
    </div>
  );
};

export default Index;
