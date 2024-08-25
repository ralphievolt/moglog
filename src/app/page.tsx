import { Footer } from "@/components/Footer/Footer";
import { EmailSection } from "@/components/Landing/EmailSection";
import { FeaturesSection } from "@/components/Landing/FeaturesSection";
import { Header } from "@/components/Landing/Header";
import { HeroSection } from "@/components/Landing/HeroSection";
import { LandingContainer } from "@/components/Landing/LandingContainer";

export default function Page() {
	return (
		<LandingContainer>
			<Header
				links={[
					{
						link: "/",
						label: "Home",
					},
				]}
			/>
			<HeroSection />
		</LandingContainer>
	);
}
