import "../styles/index.scss"

export const metadata = {
  title: "Emids",
};


import { Poppins, Inter, Space_Grotesk } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tp-ff-poppins"

});
const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: ["--tp-ff-inter", "--tp-ff-body", "--tp-ff-p"]
});

const space = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tp-ff-heading"
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon-edited.png" sizes="any" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} ${space.variable}`}>{children}</body>
    </html>
  )
}

export default RootLayout