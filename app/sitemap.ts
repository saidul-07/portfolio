import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with production URL when deployed
  const baseUrl = "https://saidul-portfolio.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}

