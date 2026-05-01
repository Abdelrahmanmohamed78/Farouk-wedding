import Counter from "./components/Counter";
import Footer from "./components/Footer";
import HorizontalSpace from "./components/HorizontalSpace";
import LandingPage from "./components/Landing";
import LeaveMessageSection from "./components/LeaveMessageSection";
import LocationSection from "./components/LocationSection";
import MainContainer from "./components/MainContainer";
import MomentsSection from "./components/MomentsSection";
import PlaceSection from "./components/PlaceSection";
import WelcomeSection from "./components/WelcomeSection";
import WhenAndWhereSection from "./components/WhenAndWhereSection";
import LoadingPage from "./components/LoadingPage";
import { arefRuqaa } from "./layout";

export default function Home() {
  const weddingDate = new Date("2026/07/29");
  return (
    <MainContainer>
      <main className="text-center relative bg-[#f9f6f1]">
        <LoadingPage>
          <h3 className={`${arefRuqaa.className} text-3xl mb-5`}>
            بسم الله الرحمن الرحيم
          </h3>
          <p className={`${arefRuqaa.className} leading-loose text-2xl`}>
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
            لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً
            إِنَّ فِي ذَلِكَ لآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
          </p>
        </LoadingPage>
        <LandingPage weddingDate={weddingDate}></LandingPage>
        <Counter weddingDate={weddingDate}></Counter>
        <WelcomeSection></WelcomeSection>
        <MomentsSection></MomentsSection>
        <HorizontalSpace></HorizontalSpace>
        <WhenAndWhereSection></WhenAndWhereSection>
        <HorizontalSpace></HorizontalSpace>
        <PlaceSection></PlaceSection>
        <HorizontalSpace></HorizontalSpace>
        <LocationSection></LocationSection>
        <HorizontalSpace></HorizontalSpace>
        <LeaveMessageSection></LeaveMessageSection>
        <Footer weddingDate={weddingDate}></Footer>
      </main>
    </MainContainer>
  );
}
