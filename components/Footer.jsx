import React from "react";

import Link from "./Link";

export default function Footer() {
	return (
		<footer className="bg-gray-800 p-12 flex">
			<ul className="flex flex-row mx-auto">
				<li className="mx-2">
					<Link href="/impressum" className="text-white">
						Impressum
					</Link>
				</li>
				<li className="mx-2">
					<Link href="/datenschutz" className="text-white">
						Datenschutz
					</Link>
				</li>
			</ul>
		</footer>
	);
}