import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Preparation from "@/components/Preparation";
import WhatIsSection from "@/components/WhatIsSection";
import WhyChooseSection from "@/components/WhyChooseSection";


export default function Home() {
  return (
    <>
    <Hero/>
    <WhatIsSection/>
    <WhyChooseSection/>
    <Preparation/>
    <Form/>
    <Location/>
    </>
  );
}
