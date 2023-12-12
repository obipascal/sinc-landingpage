import { useState, useEffect } from "react"
import ContentContainer from "../misc/ContentContainer"
import Slide1 from "@ObitechInvent/assets/img/slides/slide-1.png"
import Slide2 from "@ObitechInvent/assets/img/slides/slide-2.png"
import Slide3 from "@ObitechInvent/assets/img/slides/slide-3.png"

const slidesData = [
	{
		id: 1,
		src: Slide1,
		alt: "Slide 1",
		title: "SINC Partners is a service incubation company",
		content: "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)."
	},
	{
		id: 2,
		src: Slide2,
		alt: "Slide 2",
		title: "Come with an idea, leave with a company.",
		content: "You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup."
	},
	{
		id: 3,
		src: Slide3,
		alt: "Slide 3",
		title: "We are big on these 3 things;",
		content: `
        ✓ Service Incubation & Ecosystem Advocacy <br />
        ✓ Building SAAS & Marketing Tech Platforms <br />
        ✓ Institutional Innovations`
	}
	// Add more slides as needed
]

const Carousel: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(prevSlide => (prevSlide + 1) % slidesData.length)
		}, 3000) // Change slide every 3 seconds (3000 milliseconds)

		return () => clearInterval(interval)
	}, [])

	const changeSlide = (index: number) => {
		setCurrentSlide(index)
	}

	return (
		<div className="w-full overflow-hidden relative">
			<div className="h-80 relative flex">
				{slidesData.map((slide, index) => (
					<div
						key={slide.id}
						className={`w-full transition-opacity duration-500 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
						style={{ display: index === currentSlide ? "flex" : "none" }}
					>
						<div className="w-full h-full flex justify-center items-center bg-white rounded overflow-hidden">
							<div className="grid lg:grid-cols-2 gap-4 p-4">
								<div className="flex flex-col gap-8 items-center justify-center">
									<h2 className="text-4xl font-bold text-left">{slide.title}</h2>
									<p className="text-slate-700 text-lg" dangerouslySetInnerHTML={{ __html: slide.content }}></p>
								</div>
								<div className="lg:block xs:hidden">
									<img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{slidesData.map((_, index) => (
					<div key={index} className={`h-2 w-2 rounded-full cursor-pointer ${index === currentSlide ? "bg-blue-500" : "bg-gray-300"}`} onClick={() => changeSlide(index)}></div>
				))}
			</div>
		</div>
	)
}

export default function HeroSection() {
	return (
		<ContentContainer>
			<Carousel />
		</ContentContainer>
	)
}
