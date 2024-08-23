import { Wrapper, Footer, HeaderNine } from "@/components/layout";
import ArchitectureBanner from "@/components/hero-banners/architecture-banner";
import PortfolioFeature from "@/components/features/portfolio-feature";

const HomeMain = () => {
  return (
    <Wrapper>
      <HeaderNine />
      <ArchitectureBanner />
      <PortfolioFeature />
      <Footer />
    </Wrapper>
  );
};

export default HomeMain;
