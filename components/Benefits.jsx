import React from "react";

import "./benefits.tailwind.css";

export default function Benefits() {
	return (
		<>
			{BenefitSvgDefinition}
			<dl title="Urlaubär Benefits" className="benefits-grid">
				<BenefitItem
					title="Papierlos"
					text="Nie wieder Papierkrieg und scheußliche Excel-Tabellen. Verwalte Urlaubsanträge ab sofort komplett papierlos – von der Antragsstellung bis zur Genehmigung."
					image={BenefitSvg}
				/>
				<BenefitItem
					title="Clever"
					text="Wann ist welcher Feiertag? Wie viele Urlaubstage sind noch übrig? Unsere Anwendung weiß Bescheid und Du kannst Deinen Hirnschmalz künftig sinnvoller einsetzen."
					image={BenefitSvg}
				/>
				<BenefitItem
					title="Übersichtlich"
					text="Wann sind Deine Kollegen im Urlaub? Welche Anträge müssen noch genehmigt werden? Mit unserer Anwendung hast Du immer alles im Blick."
					image={BenefitSvg}
				/>
				<BenefitItem
					title="Jederzeit"
					text="Selbstverständlich läuft unsere Anwendung auch auf Deinem Smartphone oder Tablet. Dadurch bist Du in der Lage, jederzeit und von überall Urlaubsanträge zu pflegen."
					image={BenefitSvg}
				/>
				<BenefitItem
					title="Anpassbar"
					text="Passe die Anwendung flexibel an Deine Bedürfnisse und Workflows an. Ob E-Mail-Benachrichtigungen oder Synchronisation mit dem Firmenkalender, entscheide selbst, was Du brauchst und was nicht."
					image={BenefitSvg}
				/>
				<BenefitItem
					title="Vielseitig"
					text="Unsere Anwendung ist nicht nur Profi beim Thema Urlaub, sondern hat auch in Sachen Krankmeldungen und Überstunden ordentlich was auf dem Kasten."
					image={BenefitSvg}
				/>
			</dl>
		</>
	);
}

function BenefitItem({ title, text, image }) {
	return (
		<>
			<dt className="benefit-title">{title}</dt>
			<dd className="benefit-description ">
				{image}
				<p className="benefit-description-text">{text}</p>
			</dd>
		</>
	);
}

const BenefitSvg = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		className="benefit-image mx-auto"
	>
		<use xlinkHref="#benefit-icon-svg" />
	</svg>
);

const BenefitSvgDefinition = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		style={{
			display: "block",
			width: "1px",
			height: "1px",
			position: "absolute",
			top: "-99999px",
			left: "-99999px",
		}}
	>
		<symbol
			viewBox="0 0 86.34 91.3"
			width="128px"
			height="128px"
			id="benefit-icon-svg"
		>
			<path fill="#fff" d="M0 0h86.34v91.3H0z" />
			<linearGradient
				id="SVGID_1_"
				gradientUnits="userSpaceOnUse"
				x1="43.18"
				y1="91.3"
				x2="43.18"
				y2="4.94"
			>
				<stop offset="0" stop-color="#cce8f0" />
				<stop offset=".6" stop-color="#8ad0e9" />
				<stop offset=".92" stop-color="#5ac4ed" />
			</linearGradient>
			<circle cx="43.18" cy="48.12" r="43.18" fill="url(#SVGID_1_)" />
			<path
				fill="#7e5635"
				d="M80.12 45.56c-1.44-4.55-2.75-8.6-3.9-12.03-3.47-10.28-6.96-30.22-32.9-30.22-26.53 0-29.43 19.94-32.9 30.22A668.19 668.19 0 0 0 6.5 45.56a1563.6 1563.6 0 0 0-4.67 15.02 43.2 43.2 0 0 0 82.82-.4c-1.6-5.26-3.12-10.17-4.53-14.62z"
			/>
			<g>
				<path
					fill="#7e5635"
					d="M46.36 0c-3.99.69-7.26 2.23-9.95 4.08h11.67s1.3-2.04 2.08-2.73c-2.33.17-4.16.49-6.05 1.32.7-1.3 1.25-1.79 2.25-2.67z"
				/>
				<path
					d="M43.29 42.33c-12.85 0-12.85 5.46-12.85 12.18 0 6.73 3.13 13.53 12.85 13.53s12.85-6.8 12.85-13.53c0-6.72 0-12.18-12.85-12.18z"
					fill="#f4c38e"
				/>
				<path
					fill="#202020"
					d="M49.82 49.77c-.74 2.62-3.7 4.8-6.53 4.85-2.84-.06-5.8-2.23-6.53-4.85-.57-2.02 1.13-3.26 2.13-3.53 2.12-.57 6.7-.64 8.8 0 .98.3 2.7 1.5 2.13 3.53z"
				/>
				<path
					d="M38.94 48.36c2-1.04 6.23-1.13 8.48 0"
					fill="none"
					stroke="#333"
					stroke-width="1.51"
					stroke-linecap="round"
					stroke-miterlimit="10"
				/>
				<circle fill="#202020" cx="58.64" cy="37.9" r="3.43" />
				<circle fill="#fbfbfb" cx="59.26" cy="36.77" r="1.13" />
				<g>
					<circle fill="#202020" cx="27.73" cy="37.9" r="3.43" />
					<circle fill="#fbfbfb" cx="28.35" cy="36.77" r="1.13" />
				</g>
				<g>
					<circle fill="#7e5635" cx="20.35" cy="11.73" r="8.57" />
					<circle fill="#644023" cx="20.35" cy="11.73" r="5.57" />
				</g>
				<g>
					<circle fill="#7e5635" cx="66.02" cy="11.73" r="8.57" />
					<circle fill="#644023" cx="66.02" cy="11.73" r="5.57" />
				</g>
			</g>
		</symbol>
	</svg>
);
