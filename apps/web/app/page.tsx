import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-stone-900 flex flex-col relative overflow-hidden selection:bg-purple-100 selection:text-purple-900">
      {/* Soft warm background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-purple-100/40 via-amber-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Structured Floating Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Security Features Section */}
      <Features />
    </main>
  );
}
