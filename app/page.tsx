import Footer from "@/components/blocks/Footer";
import Header from "@/components/blocks/Header";
import TopButton from "@/components/common/TopButton";
import AboutMeScreen from "@/components/screens/AboutMeScreen";
import ContactScreen from "@/components/screens/ContactScreen";
import MainScreen from "@/components/screens/MainScreen";
import SkillsScreen from "@/components/screens/SkillsScreen";
import WorksScreen from "@/components/screens/WorksScreen";
export default function Home() {
  return (
    <main className="relative w-full font-paperlogy">
      <Header />
      <MainScreen />
      <AboutMeScreen />
      <SkillsScreen />
      <WorksScreen />
      <ContactScreen />
      <div className="sticky w-full bottom-0 h-0 z-100">
        <TopButton />
      </div>
      <Footer />
    </main>
  );
}
