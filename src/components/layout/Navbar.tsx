import React from "react"
import Logo from "@ObitechInvent/assets/img/logo/logo-black-outline.png"
import { AppNavLinksProps } from "@ObitechInvent/types"
import { uniqueId } from "@ObitechInvent/lib/utils"

export default function Navbar() {
	const [isFixed, setIsFixed] = React.useState(false)
	const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false)

	const handleToggleMobileNav = () => {
		setIsMobileNavOpen(!isMobileNavOpen)
	}

	React.useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsFixed(true)
			} else {
				setIsFixed(false)
			}
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<nav className={`w-full z-50 bg-white shadow-lg transition-all duration-300 ease-in-out ${isFixed ? "fixed top-0" : ""}`}>
			<div className="container mx-auto px-4 py-2 flex justify-between items-center relative">
				<h1 className="text-lg font-semibold mr-2">
					<img src={Logo} alt="SINC Partners" height={25} />
				</h1>
				{/* Mobile Nav Toggle Button */}
				<div className="block lg:hidden">
					<button onClick={handleToggleMobileNav} className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 focus:outline-none">
						<svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M2.5 4.5a1 1 0 011-1h12a1 1 0 110 2h-12a1 1 0 01-1-1zm0 5a1 1 0 100 2h12a1 1 0 100-2h-12a1 1 0 000 0zm0 5a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
				{/* Mobile Nav */}
				<div className={`${isMobileNavOpen ? "block" : "hidden"} lg:hidden absolute top-[95px] right-0 bg-white py-3 shadow-md w-full transition-all duration-300 ease-in-out`}>
					{NavLinks.map(navItem => (
						<a key={uniqueId()} href={navItem.link} className="block px-4 py-2 transition-colors duration-300 hover:bg-gray-200">
							{navItem.name}
						</a>
					))}
				</div>
				{/* Desktop Nav */}
				<div className="hidden lg:flex lg:flex-grow lg:items-center lg:w-auto">
					<div className="text-lg lg:flex-grow">
						{NavLinks.map(navItem => (
							<React.Fragment key={uniqueId()}>
								{!navItem?.isDropdown && (
									<a key={uniqueId()} href={navItem?.link} className="block mt-4 lg:inline-block lg:mt-0 mr-4 relative group">
										{navItem?.name}
									</a>
								)}
								{navItem?.isDropdown && (
									<div className="relative group inline-block w-auto">
										<a href={navItem?.link} className="block mt-4 lg:inline-block lg:mt-0 mr-4 relative group">
											{navItem?.name}
										</a>
										<div className="w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute top-full left-0 bg-white shadow-lg mt-2 py-2 rounded-md z-10">
											{navItem?.dropdown?.map(dropdownItem => (
												<a key={uniqueId()} href={dropdownItem?.link} className="block px-4 py-2 hover:bg-gray-200">
													{dropdownItem?.name}
												</a>
											))}
										</div>
									</div>
								)}
							</React.Fragment>
						))}
					</div>
					<div className="flex gap-4">
						<button className="rounded-full bg-primary p-3 px-5 text-slate-100 font-semibold">Sinc with us</button>
						<button className="rounded-full bg-secondary p-3 px-5 text-slate-100 font-semibold">Apply to SIP 1.0</button>
					</div>
				</div>
			</div>
		</nav>
	)
}

const NavLinks: Array<AppNavLinksProps> = [
	{
		name: "About",
		link: "#",
		isDropdown: true,
		dropdown: [
			{
				name: "Who We Are",
				link: "#"
			},
			{
				name: "Are People",
				link: "#"
			},
			{
				name: "Concept Innovations",
				link: "#"
			},
			{
				name: "Our Process",
				link: "#"
			},
			{
				name: "Investors",
				link: "#"
			},
			{
				name: "CSR & Events",
				link: "#"
			},
			{
				name: "Careers",
				link: "#"
			},
			{
				name: "Contact",
				link: "#"
			}
		]
	},
	{
		name: "SIP",
		link: "#"
	},
	{
		name: "Studio",
		link: "#"
	},
	{
		name: "SEEQ",
		link: "#"
	},
	{
		name: "Platforms",
		link: "#",
		isDropdown: true,
		dropdown: [
			{
				name: "Kofoundme",
				link: "#"
			},
			{
				name: "InResidences",
				link: "#"
			},
			{
				name: "Service Market",
				link: "#"
			},
			{
				name: "Founder School",
				link: "#"
			},
			{
				name: "Metty",
				link: "#"
			},
			{
				name: "Grantty",
				link: "#"
			},
			{
				name: "Boldtell",
				link: "#"
			},
			{
				name: "Checkwa",
				link: "#"
			}
		]
	},
	{
		name: "Initiatives",
		link: "#",
		isDropdown: true,
		dropdown: [
			{
				name: "Jabi Plains",
				link: "#"
			},
			{
				name: "Regional Pricingn Initiative",
				link: "#"
			},
			{
				name: "Scholarship Program",
				link: "#"
			},
			{
				name: "SSMN Pricing",
				link: "#"
			},
			{
				name: "University STEM",
				link: "#"
			},
			{
				name: "1M Nigeria Product",
				link: "#"
			},
			{
				name: "University InResidency",
				link: "#"
			},
			{
				name: "Founder Festival",
				link: "#"
			}
		]
	},
	{
		name: "More",
		link: "#",
		isDropdown: true,
		dropdown: [
			{
				name: "Services",
				link: "#"
			},
			{
				name: "Equity Jobs",
				link: "#"
			},
			{
				name: "Co-found with us",
				link: "#"
			},
			{
				name: "Offers",
				link: "#"
			},
			{
				name: "Innovation News",
				link: "#"
			},
			{
				name: "FAQ",
				link: "#"
			},
			{
				name: "Blog & Resources",
				link: "#"
			},
			{
				name: "Press",
				link: "#"
			}
		]
	}
]
