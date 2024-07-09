import "../assets/scss/user-fonts.scss";
import "../assets/scss/style.scss";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/axiforma/Axiforma-Regular.woff2" as="font" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/axiforma/Axiforma-ExtraBold.woff2" as="font" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/axiforma/Axiforma-Black.woff2" as="font" crossOrigin="anonymous"/>
      </head>
      <body className="market search">{children}</body>
    </html>
    </>
  );
}
