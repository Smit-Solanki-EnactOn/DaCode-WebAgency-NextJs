// import styles from "./page.module.css";
import BannerWithCta from "@/components/Generic/Section/BannerWithCta/BannerWithCta";
import HeroSection from "@/components/Generic/Section/HeroSection/HeroSection";
import OurStrategy from "@/components/Generic/Section/OurStrategy/OurStrategy";
import OurWorkSection from "@/components/Generic/Section/OurWorkSection/OurWorkSection";
import ServiceSection from "@/components/Generic/Section/ServiceSection/ServiceSection";
import TestimonialSection from "@/components/Generic/Section/TestimonialSection/TestimonialSection";
import BlogSection from "@/components/Generic/Section/BlogSection/BlogSection";

export default function Home() {
  return (
    <main className="main-section-wrapper">
      <HeroSection />
      <ServiceSection />
      <OurWorkSection />
      <OurStrategy />
      <BannerWithCta />
      <TestimonialSection /> 
      <BlogSection />
    </main>
  );
}
