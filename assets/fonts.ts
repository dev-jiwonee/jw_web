import localFont from "next/font/local";

const pyeongchangpeace = localFont({
  src: [
    {
      path: "../public/fonts/PyeongChangPeace-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/PyeongChangPeace-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pcp",
});

const paperlogy = localFont({
  src: [
    {
      path: "../public/fonts/Paperlogy-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Paperlogy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Paperlogy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Paperlogy-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Paperlogy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-paperlogy",
});

export { pyeongchangpeace, paperlogy };
