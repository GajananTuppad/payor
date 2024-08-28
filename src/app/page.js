import { Wrapper, Footer, HeaderNine } from "@/components/layout";
import ArchitectureBanner from "@/components/hero-banners/architecture-banner";
import PortfolioFeature from "@/components/features/portfolio-feature";
import HelpCenterArticles from "@/components/articles/help-center-articles";

const HomeMain = () => {
  return (
    <Wrapper>
      <HeaderNine />
      <ArchitectureBanner />
      <PortfolioFeature />
      <HelpCenterArticles/>
      <Footer />
    </Wrapper>
  );
};

export default HomeMain;
