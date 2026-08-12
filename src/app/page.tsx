"use client";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ArrowUpRightIcon, MailIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import AnimatedCard from "../components/animated/animated-card";
import AboutMeArticle from "../components/atoms/about-me";
import Footer from "../components/atoms/footer";
import TypographyHeading from "../components/typography/heading";
import TypographyParagraph from "../components/typography/paragraph";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { CardContent, CardFooter, CardHeader } from "../components/ui/card";
import Hyperlink from "../components/ui/hyperlink";
import { ModeToggle } from "../components/theme-toggle";
import { MY_EXPERIENCES } from "../constants/experiences";
import {
  FIFTH_TAG,
  FIRST_TAG,
  FOURTH_TAG,
  FULL_NAME,
  SECOND_TAG,
  THIRD_TAG,
} from "../constants/name";
import {
  ACADEMIC_PROJECTS,
  MY_PROJECTS,
  MY_PUBLICATIONS,
} from "../constants/projects";
import { GITHUB_URL, LINKEDIN_URL, MAIL_URL, ROOT_URL } from "../constants/url";
import { Route } from "../definitions/routes";
import { formatDateRange } from "../utils/date";
import { cn } from "../lib/utils";

export default function HomePage() {
  const router = useRouter();

  const [aboutRef, publicationsRef, projectsRef, experienceRef] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const handleClick = (ref: React.RefObject<HTMLElement>) => {
    if (ref?.current) {
      ref?.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  type NavSection = "about" | "publications" | "experience" | "projects";
  const [activeSection, setActiveSection] = useState<NavSection>("about");

  const navItems: { key: NavSection; label: string; ref: React.RefObject<HTMLElement> }[] = [
    { key: "about", label: "About", ref: aboutRef },
    { key: "publications", label: "Publications", ref: publicationsRef },
    { key: "experience", label: "Experience", ref: experienceRef },
    { key: "projects", label: "Projects", ref: projectsRef },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!mostVisible) return;
        const match = navItems.find(
          (item) => item.ref.current === mostVisible.target,
        );
        if (match) setActiveSection(match.key);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    navItems.forEach((item) => {
      if (item.ref.current) observer.observe(item.ref.current);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const featuredProjects = [...ACADEMIC_PROJECTS, ...MY_PROJECTS].filter(
    (project) => project.isFeatured,
  );

  const compareByRecency = (
    a: { startDate: Date; endDate?: Date },
    b: { startDate: Date; endDate?: Date },
  ) => {
    const aEnd = a.endDate?.getTime() ?? Number.POSITIVE_INFINITY;
    const bEnd = b.endDate?.getTime() ?? Number.POSITIVE_INFINITY;
    return bEnd - aEnd || b.startDate.getTime() - a.startDate.getTime();
  };

  const sortedExperiences = [...MY_EXPERIENCES]
    .filter((experience) => experience.isFeatured)
    .map((experience) => ({
      ...experience,
      positions: [...experience.positions].sort(compareByRecency),
    }))
    .sort((a, b) => compareByRecency(a.positions[0], b.positions[0]));

  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        {/* <Card className="p-3"> */}
        <div>
          <div>
            <TypographyHeading className="p-10 pb-5 text-left">
              <Hyperlink isBold={false} url={ROOT_URL}>
                {FULL_NAME}
              </Hyperlink>
            </TypographyHeading>
          </div>

          <TypographyHeading className="pt-0 text-lg" level={2}>
            <ReactTyped
              strings={[
                FIRST_TAG,
                SECOND_TAG,
                THIRD_TAG,
                FOURTH_TAG,
                FIFTH_TAG,
              ]}
              typeSpeed={40}
              backSpeed={40}
              loop
            />
          </TypographyHeading>
        </div>
        <div className="hidden p-10 lg:block">
          {navItems.map((item) => (
            <TypographyHeading
              key={item.key}
              className={cn(
                "transition-colors duration-300 ease-out",
                activeSection === item.key
                  ? "font-bold text-[rgb(var(--card-glow))]"
                  : "font-medium",
              )}
              level={4}
            >
              <button
                onClick={() => {
                  handleClick(item.ref);
                }}
              >
                {item.label}
              </button>
            </TypographyHeading>
          ))}
          <TypographyHeading className="font-medium" level={4}>
            <Hyperlink isBold={false} url={Route.BLOG}>
              Blog
            </Hyperlink>
          </TypographyHeading>
        </div>
        <div className="items-cent er flex gap-1 p-10">
          <Hyperlink url={GITHUB_URL}>
            {" "}
            <GitHubLogoIcon className="h-8 w-8" />
          </Hyperlink>
          <Hyperlink url={LINKEDIN_URL}>
            <LinkedInLogoIcon className="h-8 w-8" />
          </Hyperlink>
          <Hyperlink url={MAIL_URL}>
            <MailIcon className="h-8 w-8" />
          </Hyperlink>

          {/* <div className="text-lg">| abacasio@up.edu.ph</div> */}
        </div>
      </header>
      <main className="pt-5 lg:w-1/2 lg:py-24">
        <div ref={aboutRef}>
          <TypographyHeading className="p-10 pb-5 text-left text-2xl lg:text-4xl">
            About
          </TypographyHeading>
          <AboutMeArticle />
        </div>
        <div ref={publicationsRef}>
          <TypographyHeading className="p-10 pb-5 text-left text-2xl lg:text-4xl">
            Publications
          </TypographyHeading>
          {MY_PUBLICATIONS.map((publication) => (
            <AnimatedCard
              key={publication.name}
              className="m-5 cursor-pointer shadow-none"
              onClick={() => window.open(publication.url, "_blank")}
            >
              <CardHeader>
                <TypographyHeading level={3}>
                  {publication.name}
                </TypographyHeading>
              </CardHeader>
              <CardContent className="text-foreground">
                {publication.description}
              </CardContent>
              <CardFooter className="flex flex-wrap gap-1 text-lg">
                {publication.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </CardFooter>
            </AnimatedCard>
          ))}
        </div>
        <div className="flex flex-col justify-center" ref={experienceRef}>
          <TypographyHeading className="p-10 pb-5 text-left text-2xl lg:text-4xl">
            Experience
          </TypographyHeading>
          {sortedExperiences.map((experience) => (
            <AnimatedCard
              key={experience.company?.name ?? experience.positions[0].title}
              className="m-5 cursor-pointer shadow-none"
            >
              <CardHeader>
                {experience.company && (
                  <TypographyHeading level={3}>
                    <Hyperlink url={experience.company.url} isBold={false}>
                      {experience.company.name}
                    </Hyperlink>
                  </TypographyHeading>
                )}
              </CardHeader>

              <CardContent className="flex flex-col text-foreground">
                {experience.positions.map((position, posIndex) => (
                  <div key={position.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[rgb(var(--card-glow))]" />
                      {posIndex !== experience.positions.length - 1 && (
                        <span className="w-px flex-1 bg-border" />
                      )}
                    </div>
                    <div
                      className={cn(
                        posIndex !== experience.positions.length - 1 &&
                          "pb-4",
                      )}
                    >
                      <span>
                        <i>
                          {formatDateRange(
                            position.startDate,
                            position.endDate,
                          )}
                        </i>
                      </span>
                      <TypographyHeading level={4}>
                        {position.title}
                      </TypographyHeading>
                      <TypographyParagraph>
                        {position.description}
                      </TypographyParagraph>
                    </div>
                  </div>
                ))}
              </CardContent>
            </AnimatedCard>
          ))}
          {/* <Button
            variant="outline"
            className="self-center"
            onClick={() => router.push(Route.EXPERIENCE)}
          >
            View my resume <ArrowUpRightIcon className="h-4 w-4" />
          </Button> */}
        </div>
        <div className="flex flex-col justify-center" ref={projectsRef}>
          <TypographyHeading className="p-10 pb-5 text-left text-2xl lg:text-4xl">
            Projects
          </TypographyHeading>

          {featuredProjects.map((project) => (
            <AnimatedCard
              key={project.name}
              className="m-5 cursor-pointer rounded-lg shadow-none"
              onClick={() => {
                if (project.url) {
                  window.open(project.url, "_blank");
                }
              }}
            >
              <CardHeader>
                <TypographyHeading level={3}>{project.name}</TypographyHeading>
              </CardHeader>
              <CardContent className="text-foreground">
                {project.description}
              </CardContent>
              <CardFooter className="flex flex-wrap gap-1 text-lg">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </CardFooter>
            </AnimatedCard>
          ))}
          <Button
            variant="outline"
            className="self-center"
            onClick={() => router.push(Route.PROJECTS)}
          >
            View all projects <ArrowUpRightIcon className="h-4 w-4" />
          </Button>
        </div>
        <Footer />
      </main>
      <ModeToggle />
    </>
  );
}
