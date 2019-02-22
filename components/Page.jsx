import React from "react";
import Head from "next/head";
import Navigation from "./Navigation";

export default function Page({ title, children }) {
	return (
		<>
			<Head>
				<title>Urlaubsverwaltung</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="stylesheet" href="/static/reset.css" />
				<link rel="stylesheet" href="/static/style.css" />
			</Head>
			<style global jsx>{`
				body {
					padding: 1rem;
				}
			`}</style>
			<h1>{title}</h1>
			<Navigation />
			{children}
		</>
	);
}
