"use client";
import Banner from "@/components/Navbar/Banner";
import Button from "@/components/CustomButton/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import HomeBanner from "@/components/Home/HomeBanner";
import Testimonial from "@/components/Testimonial";
import CustomForm from "@/components/CustomForm";
import CustomerSuccess from "@/components/Home/CustomerSuccess";
import CustomerAnalytics from "@/components/Home/CustomerAnalytics";
import TrackSection from "@/components/Home/TrackSection";
import Whatsnew from "@/components/Home/whatsnew";
import Enterprise from "@/components/Enterprise";
import Oscrumclcard from "@/components/Oscrumclcard";
import Projactivity from "@/components/Projactivity";
import Tabview from "@/components/Tabview";
import Subtab from "@/components/Subtab";
import Faqs from "@/components/faqs";
import Learn from "@/components/learnhp";
import Selfhosted from "@/app/product/selfhostedproject/self-hosted";
import Teamsgotcontrol from "@/components/Home/teamsgotmorecontrol";
import Connectorangescrum from "@/components/Home/connectorangescrum";


export default function Home() {
  const clickedFunc = () => {
    console.log("clicked");
    alert("clicked...");
  };
  return (
    <>
        <Banner />
        <Navbar />
      <HomeBanner />
      <CustomerSuccess />
      <CustomerAnalytics />
      <TrackSection />
      <Whatsnew/>
     {/* <Subtab/> */}
      <Enterprise/>
      <Testimonial />
      <Learn />
      <Teamsgotcontrol />
      <Connectorangescrum />
       {/* <Tabview/>   */}
        {/* <Projactivity/> */}
        {/* <Faqs /> */}
       {/* <Slide /> */}
      {/* <div className="p-4">
        <h1 className="text-2xl font-bold">Custom Components Example</h1>

        <Button text="Click Me" onClick={() => alert("Button Clicked")} />

        <div className="mt-4">
          <Card
            title="Example Card"
            content="This is a custom card component."
          />
        </div>
      </div> */}
      {/* <Button
        text="Try Free"
        status={false}
        clickedFunc={clickedFunc}
        color="#1d6ae5"
        width="100px"
        height="50px"
        fontStyle="10px"
      />
      <Button
        text="Try Free"
        status={false}
        clickedFunc={clickedFunc}
        color="#ffffff"
        hoverColor="#1d6ae5"
        textColor="#1d6ae5"
        hoverTextColor="#ffffff"
      />
      <Button
        text="Try Free"
        status="white"  
        clickedFunc={clickedFunc}
        color="#1d6ae5"
        hoverColor="#1d6ae5"
        textColor="#1d6ae5"
        hoverTextColor="#ffffff"
      /> */}
      {/* <Progress/> */}
     {/* <Oscrumclcard/>  */}
     

     

      <Footer />
    </>
  );
}