import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <AnnouncementBar />
      <Navbar/>
      <Hero/>
    </div>
  );
}
