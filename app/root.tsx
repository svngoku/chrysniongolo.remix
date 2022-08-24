import type {  LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { MantineProvider } from '@mantine/core';
import { StylesPlaceholder } from '@mantine/remix';
import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";
import Footer from "././components/Footer";
import NavBar from "./components/Navbar";
import Header  from "././components/Header";
import { theme } from './theme';


export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "script", href: "https://cdn.splitbee.io/sb.js" },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Chrys Fé-Marty NIONGOLO - Portfolio",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}


export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <html lang="en">
        <head>
          <Meta />
          <Links />
          <StylesPlaceholder />
          <script async src="https://cdn.splitbee.io/sb.js"></script>
        </head>
        <body>
          <NavBar />
          <Header />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Footer />
        </body>
      </html>
    </MantineProvider>
  );
}
