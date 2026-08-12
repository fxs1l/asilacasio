import type { Metadata } from "next";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience and resume of Asil Andrei Acasio, a software engineer, data scientist, and machine learning engineer based in the Philippines.",
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperienceLayout(props: Readonly<Props>) {
  const { children } = props;
  return <>{children}</>;
}
