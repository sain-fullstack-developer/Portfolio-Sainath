import "../../globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ResolvingMetadata } from "next";
import * as fs from "fs";
import path from "path";

const inter = Inter({ subsets: ["latin"] });

type Props = {
	params: { slug: string };
};

export default function ProjectLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
