import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Poppins,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
