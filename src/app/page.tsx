import { AmenitiesSection } from "@/components/sections/amenities/amenities-section";
import { BedroomsSection } from "@/components/sections/bedrooms/bedrooms-section";
import { BookingSection } from "@/components/sections/booking/booking-section";
import { DiningNearbySection } from "@/components/sections/dining-nearby/dining-nearby-section";
import { EstateSection } from "@/components/sections/estate/estate-section";
import { ExperienceSection } from "@/components/sections/experience/experience-section";
import { FaqSection } from "@/components/sections/faq/faq-section";
import { GallerySection } from "@/components/sections/gallery/gallery-section";
import { GuestInfoSection } from "@/components/sections/guest-info/guest-info-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { LivingSection } from "@/components/sections/living/living-section";
import { LocationSection } from "@/components/sections/location/location-section";
import { NearbyBeachesSection } from "@/components/sections/nearby-beaches/nearby-beaches-section";
import { OutdoorSection } from "@/components/sections/outdoor/outdoor-section";
import { PromiseSection } from "@/components/sections/promise/promise-section";
import { WhyChooseSection } from "@/components/sections/why-choose/why-choose-section";
import { MobileBookingBar } from "@/components/layout/mobile-booking-bar";
import { SiteFooter } from "@/components/layout/site-footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EstateSection />
      <PromiseSection />
      <ExperienceSection />
      <DiningNearbySection />
      <BedroomsSection />
      <LivingSection />
      <OutdoorSection />
      <AmenitiesSection />
      <GallerySection />
      <LocationSection />
      <WhyChooseSection />
      <GuestInfoSection />
      <FaqSection />
      <NearbyBeachesSection />
      <BookingSection />
      <SiteFooter />
      <MobileBookingBar />
    </>
  );
}
