"use client";

import React, { ReactNode } from "react";

interface IContainer {
	children: ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {

	return (
		<div className="flex flex-col bg-background w-full py-6 h-screen text-text-color md:px-12 relative overflow-y-auto">
			{children}
		</div>
	);
};

export default Container;
