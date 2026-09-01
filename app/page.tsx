import NavBar from "../components/ui/NavBar";
import ParallaxHeroImagesDemo from "../components/parallax-hero-images-demo";
import Text from "@/components/ui/Text";
import Services from "@/components/ui/Services";
import VideoSection from "@/components/ui/VideoSection";
import Steps from "@/components/ui/Staps";
import InfiniteCarousel from "@/components/ui/InfiniteCarousel";
import ImageBg from "@/components/ui/ImageBg";
import Reviews from "@/components/ui/Reviews";
import Footer from "@/components/ui/Footer";
import Call from "@/components/ui/Call";
import MapButton from "@/components/ui/MapButton";
import SchemaAutoHelp from "@/components/ui/SchemaAutoHelp";

export default function Home() {
  return (
    <>
      <NavBar />
      <ParallaxHeroImagesDemo />
      <Services />
      <Text />
      <InfiniteCarousel />
      <Steps />
      <ImageBg />
      <Reviews />
      <VideoSection />
      <Call />
      <MapButton />
      <Footer />
      <SchemaAutoHelp />
    </>
  );
}
