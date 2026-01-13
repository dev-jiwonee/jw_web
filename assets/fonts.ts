import localFont from 'next/font/local'

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
  variable: "--font-pcp"
})

export { pyeongchangpeace }