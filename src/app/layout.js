import { Inter, Oswald, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--oswald",
  weight: ["200", "300", "500", "700"],
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--roboto",
  weight: ["300", "500", "700"],
});

export const metadata = {
  title: "Orangescrum",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable}`}>

        {children}
        
        </body>
    </html>
  );
}
