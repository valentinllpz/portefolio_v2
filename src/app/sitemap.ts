export const baseUrl = "https://valentinlugandlopez.dev";

export default async function sitemap() {
  const routes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString().split("T")[0],
    },
  ];

  return routes;
}
