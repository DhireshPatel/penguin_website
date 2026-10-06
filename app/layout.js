import "./globals.css";

export const metadata = {
  title: "Penguin World — species, facts and where they live",
  description:
    "Learn about penguins: all the details, 13 species, and an interactive globe showing where penguins live and how many there are.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
