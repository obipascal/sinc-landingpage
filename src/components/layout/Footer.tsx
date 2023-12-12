import React from "react"
import Logo from "@ObitechInvent/assets/img/logo/logo-white-outline.png"
import SBO from "@ObitechInvent/assets/img/SBO.png"
import GASUS from "@ObitechInvent/assets/img/GASUS.png"

import facebook from "@ObitechInvent/assets/img/icons/facebook.png"
import instagram from "@ObitechInvent/assets/img/icons/instagram.png"
import twitter from "@ObitechInvent/assets/img/icons/twitter.png"
import linkedin from "@ObitechInvent/assets/img/icons/linkedin.png"
import youtube from "@ObitechInvent/assets/img/icons/youtube.png"
import nigeriaFlag from "@ObitechInvent/assets/img/icons/twemoji_flag-nigeria.png"

import { AppNavLinksProps } from "@ObitechInvent/types"
import { uniqueId } from "@ObitechInvent/lib/utils"
export default function Footer() {
	return (
		<div className="w-[100%] bg-secondary">
			{/* Newsletter section  */}
			<div className="newsletter-sec border-b-[1.5px] pb-6">
				<div className="container mx-auto px-4 py-2 relative">
					<h1 className="font-bold text-3xl text-slate-100 mb-2">Newsletter</h1>
					<p className="text-medium text-slate-300 font-medium">Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.</p>

					{/* Form  */}
					<form className="border-[1.5px] border-slate-100 rounded-full w-fit mt-3">
						<input placeholder="Enter your email address" type="text" className="text-slate-100 p-3 outline-none bg-[transparent]" />
						<button className="font-bold py-4 px-6 rounded-full bg-slate-100">Subscribe</button>
					</form>
				</div>
			</div>
			<div className="grid xs:grid-cols-1 lg:grid-cols-8 gap-2 container mx-auto px-4 py-2 relative my-10">
				<div className="lg:col-span-2 xs:col-span-1">
					<img src={Logo} alt="" className="block mb-3" />
					<p className="text-slate-100">
						SINC Partners is a SaaS and a Marketing Tech startup studio building platform-based products for solution-providers and entrepreneurs that will help democratize success
					</p>
				</div>
				{NavLinks.map(footerItem => (
					<div key={uniqueId()}>
						<h1 className="font-bold text-slate-100 mb-2">{footerItem?.name}</h1>
						<ul className="flex flex-col gap-4">
							{footerItem?.isDropdown && (
								<>
									{footerItem?.dropdown?.map(footerLink => (
										<li key={uniqueId()} className="">
											<a href={footerLink.link} className="text-slate-100">
												{footerLink?.name}
											</a>
										</li>
									))}
								</>
							)}
						</ul>
					</div>
				))}

				<div className="lg:col-span-2 xs:col-span-1">
					<h1 className="font-bold text-slate-100 mb-2">Locations</h1>
					<p className="font-medium text-slate-100 mb-5">
						Abuja, Nigeria <br /> Lagos, Nigeria <br /> Philadelphia, USA
					</p>
					<img src={SBO} alt="" className="block mb-1" />
					<p className="text-slate-100 p-2 font-bold">Trusted Business</p>
				</div>
			</div>

			<div className="border-t-[1.5px] pt-6">
				<div className="container mx-auto px-4 py-2 relative grid lg:grid-cols-3 xs:grid-cols-1">
					<div className="lg:col-span-2 xs:col-span-1 flex flex-col gap-8  justify-between">
						<p className="text-slate-100">Guaranteed 2x on your service or cash investment, usually been the first to invest. Get in early and SINC your guaranty!</p>
						<div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-4">
							<div className="">
								<p className="text-slate-100 font-bold">&copy; {new Date().getFullYear()} SINC Partners Ltd. All rights reserved</p>
							</div>

							<div className="flex gap-4 text-slate-100">
								<a href="" className="">
									Privacy Policy
								</a>
								<a href="" className="">
									Terms Of Service
								</a>
								<a href="" className="">
									Security
								</a>
							</div>
						</div>
					</div>
					<div className="col-span-1">
						<div className="flex flex-row gap-3 items-center">
							<div className="">
								<img src={GASUS} alt="" />
							</div>
							<div className="">
								<p className="text-slate-100">We are a business built on the foundation of Christian values and belief</p>
								<div className="flex gap-4 mt-3">
									<img src={facebook} alt="Facebook" />
									<img src={instagram} alt="Instagram" />
									<img src={linkedin} alt="LinkedIn" />
									<img src={twitter} alt="Twitter (X)" />
									<img src={youtube} alt="Youtube" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-5">
					<p className="text-slate-100 flex gap-2 font-bold w-full items-center justify-center pb-5">
						Web In Nigeria <img src={nigeriaFlag} alt="" />
					</p>
				</div>
			</div>
		</div>
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
		name: "Others",
		link: "#",
		isDropdown: true,
		dropdown: [
			{
				name: "Companies",
				link: "#"
			},
			{
				name: "SIP",
				link: "#"
			},
			{
				name: "SEEQ",
				link: "#"
			},
			{
				name: "Co-found with us",
				link: "#"
			},
			{
				name: "Equity Jobs",
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
				name: "Press",
				link: "#"
			}
		]
	}
]
