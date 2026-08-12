import type { MetadataRoute } from "next";
import { PERSONAL_WEBSITE_URL } from "../constants/url";

// Crawlers used to scrape content for AI model training / AI answer engines.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Google-Extended",
  "GoogleOther",
  "PerplexityBot",
  "Perplexity-User",
  "CCBot",
  "Bytespider",
  "Amazonbot",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "FacebookBot",
  "cohere-ai",
  "Diffbot",
  "Omgilibot",
  "Omgili",
  "YouBot",
  "TikTokSpider",
  "ImagesiftBot",
  "Timpibot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: AI_CRAWLERS,
        disallow: "/",
      },
    ],
    sitemap: `${PERSONAL_WEBSITE_URL}/sitemap.xml`,
  };
}
