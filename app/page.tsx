import Footer from "@/components/blocks/Footer";
import Header from "@/components/blocks/Header";
import MainScreen from "@/components/screens/MainScreen";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/coming-soon");

  return (
    <main className="flex flex-col w-full h-dvh">
      <Header />
      <MainScreen />
      <div id="about" className="min-h-full bg-red-200">
        내 소개, 일한 경력, 자격증, 장점 ? 가능 스킬
      </div>
      <div id="portfolio" className="min-h-full bg-red-300">
        portfolio
      </div>
      <div id="exp" className="min-h-full bg-red-400">
        experiences
      </div>
      <div id="contact" className="min-h-full bg-red-400">
        contact
      </div>

      <Footer />
      </main>
  );
}
