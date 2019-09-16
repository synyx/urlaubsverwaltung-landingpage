import React from "react";

import Page from "../components/Page";
import BearIcon from "../components/BearIcon";
import CardLink from "../components/CardLink";
import "./demo.tailwind.css";

export default function Demo() {
	return (
		<Page title="Demo">
			<div className="demo-page pt-12 mb-12">
				<h1 className="text-3xl md:text-4xl font-semibold mb-4 text-center text-gray-900">
					Live Demo
				</h1>
				<p className="max-w-xl text-xl m-4 sm:mx-auto">
					Du möchtest dir selbst ein Bild machen? Unser Demo-System ist nur
					einen Klick entfernt. Wähle einfach eine Rolle aus und erkundschafte
					die Anwendung.
				</p>
				<div className="container xl:max-w-6xl mx-auto text-black">
					<ul className="flex flex-wrap">
						<RoleItem
							rolename="Benutzer"
							username="user"
							password="secret"
							description="Deinen nächsten Urlaubsantrag stellen, deine verbleibenden Urlaubstage und bisherigen Krankmeldungen überblicken? Behalte jederzeit den Durchblick über all deine Abwesenheiten."
						/>
						<RoleItem
							rolename="Chef"
							username="boss"
							password="secret"
							description="Genehmigen oder ablehnen? Verschaffe dir Überblick über die Urlaubsanträge deiner Mitarbeiter und entscheide weise. Denk immer dran, aus großer Macht folgt große Verantwortung."
						/>
						<RoleItem
							rolename="Office"
							username="office"
							password="secret"
							description="Du willst die volle Bandbreite der Möglichkeiten erleben? Hier kannst du neben Urlaubsanträgen nicht nur Benutzer und Krankmeldungen verwalten, sondern sogar Anwendungseinstellungen vornehmen."
						/>
					</ul>
				</div>
			</div>
		</Page>
	);
}

function RoleItem({ rolename, username, password, description }) {
	return (
		<li className="text-center w-full sm:w-1/2 lg:w-1/3 p-4 sm:p-3 pt-0 md:p-4">
			<div className="border shadow h-full px-4 py-8 bg-white">
				<BearIcon id="role_office" className="mx-auto mb-4" />
				<CardLink
					href={`https://urlaubsverwaltung-demo.synyx.de/login?username=${username}&password=${password}`}
					className="mb-5"
				>
					Als {rolename} testen
				</CardLink>
				<p className="text-center">{description}</p>
			</div>
		</li>
	);
}