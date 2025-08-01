import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import "../../app/globals.css";
import { useLocalStorage } from "@uidotdev/usehooks";

interface IContact {
	icon: JSX.Element;
	label: string;
	value: string;
}

const listContact: IContact[] = [
	{
		icon: <GitHubIcon fontSize="large" />,
		label: "thanapatspongpipat",
		value: "https://github.com/thanapatspongpipat",
	},
	{
		icon: <EmailIcon fontSize="large" />,
		label: "thanapatpongpipat.w@gmail.com",
		value: "mailto:thanapatpongpipat.w@gmail.com",
	},
	{
		icon: <InstagramIcon fontSize="large" />,
		label: "__thanapat.p",
		value: "https://www.instagram.com/__thanapat.p/",
	},
];

const Contact = () => {
	return (
		<div className="flex justify-center items-center h-20 w-full z-10 px-5">
			<div className="flex w-full justify-between items-center md:px-6 lg:px-20">
				{listContact.map((item, index) => (
					<Link
						key={index}
						href={item.value}
						className="group flex flex-col relative text-primary py-2 transition-all duration-200 hover:scale-125 md:hover:scale-[1.6] justify-center items-center">
						{item.icon}
						<span className="absolute mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all duration-300 text-sm text-center">
							{item.label}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Contact;
