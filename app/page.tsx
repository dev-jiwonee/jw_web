import Footer from "@/components/blocks/Footer";
import Header from "@/components/blocks/Header";
import AboutMeScreen from "@/components/screens/AboutMeScreen";
import ContactScreen from "@/components/screens/ContactScreen";
import MainScreen from "@/components/screens/MainScreen";
import SkillsScreen from "@/components/screens/SkillsScreen";
import WorksScreen from "@/components/screens/WorksScreen";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/coming-soon");

  return (
    <main className="w-full h-dvd font-paperlogy">
      <Header />
      <MainScreen />
      <AboutMeScreen />
      <SkillsScreen />
      <WorksScreen />
      <ContactScreen />
      <Footer />
    </main>
  );
}
