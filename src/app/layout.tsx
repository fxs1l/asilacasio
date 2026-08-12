/* eslint-disable @typescript-eslint/no-unused-vars */
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import React from "react";
import { SITE_DESCRIPTION } from "../constants/description";
import {
  GOOGLE_FONT_API,
  GOOGLE_FONT_PROVIDER,
  GOOGLE_POPPINS,
} from "../constants/fonts";
import { FULL_NAME } from "../constants/name";
import { GITHUB_URL, LINKEDIN_URL, PERSONAL_WEBSITE_URL } from "../constants/url";
import "../index.css";
import TwoColumnLayout from "../layouts/two-column-layout";

export const metadata: Metadata = {
  metadataBase: new URL(PERSONAL_WEBSITE_URL),
  title: {
    default: FULL_NAME,
    template: `%s | ${FULL_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Asil Andrei Acasio",
    "Software Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "Electronics Engineer",
    "IoT Builder",
    "Philippines",
  ],
  authors: [{ name: FULL_NAME, url: PERSONAL_WEBSITE_URL }],
  creator: FULL_NAME,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: PERSONAL_WEBSITE_URL,
    title: FULL_NAME,
    description: SITE_DESCRIPTION,
    siteName: FULL_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: FULL_NAME,
    description: SITE_DESCRIPTION,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: FULL_NAME,
  url: PERSONAL_WEBSITE_URL,
  sameAs: [GITHUB_URL, LINKEDIN_URL],
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Readonly<Props>) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href={GOOGLE_FONT_API} />
        <link
          rel="preconnect"
          href={GOOGLE_FONT_PROVIDER}
          crossOrigin="anonymous"
        />
        <link href={GOOGLE_POPPINS} rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TwoColumnLayout>{children}</TwoColumnLayout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
