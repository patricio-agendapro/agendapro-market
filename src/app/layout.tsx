// import "../assets/scss/user-fonts.scss";
// import "../assets/scss/bs.scss";
// import "../assets/scss/style.scss";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon-png.png" type="image/png"></link>
        <link rel="icon" href="/img/favicon-svg.svg" sizes="any" type="image/svg+xml" />
        <link rel="icon" href="/img/favicon.ico" sizes="any" type="ico" />
        
        
        <link rel="preload" href="/fonts/axiforma/Axiforma-Regular.woff2" as="font" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/axiforma/Axiforma-ExtraBold.woff2" as="font" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/axiforma/Axiforma-Bold.woff2" as="font" crossOrigin="anonymous"/>
      </head>
      <body className="market search">{children}</body>
    </html>
    </>
  );
}
