import localFont from "next/font/local";

export const ppNeueMontreal = localFont({
  src: [
    {
      path: "../assets/fonts/pp-neue-montreal/PPNeueMontreal-Thin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/pp-neue-montreal/PPNeueMontreal-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/pp-neue-montreal/PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-pp-neue",
  display: "swap",
});

export const zagmaMono = localFont({
  src: [
    {
      path: "../assets/fonts/zagma-mono/F37ZagmaMonoTrial-Book.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-zagma",
  display: "swap",
});
