"use client";
import Banner from "@/components/Navbar/Banner";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
   
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
      <Footer />
    </>
  );
}
