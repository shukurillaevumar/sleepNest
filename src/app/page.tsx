import AutumnCollectionSection from "./autumnCollectionSection copy";
import HeroSection from "./heroSection";
import NewsSection from "./newsSection";
import SummerCollectionSection from "./summerCollectionSection";
import WinterCollectionSection from "./winterCollectionSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WinterCollectionSection />
      <AutumnCollectionSection />
      <SummerCollectionSection />
      <NewsSection />
    </div>
  );
}
