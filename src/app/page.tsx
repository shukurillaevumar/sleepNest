import AutumnCollectionSection from "./autumnCollectionSection copy";
import HeroSection from "./heroSection";
import NewsSection from "./newsSection";
import SummerCollectionSection from "./summerCollectionSection";
import WinterCollectionSection from "./winterCollectionSection";

export default function Home() {
  return (
    <div className="max-sm:p-2">
      <HeroSection />
      <WinterCollectionSection />
      <AutumnCollectionSection />
      <SummerCollectionSection />
      <NewsSection />
    </div>
  );
}
