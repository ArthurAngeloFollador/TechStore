import "@/styles/globals.css";
import Bottom from "@/components/bottom";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`bg-background text-text-primary antialiased`}>
        <Header />
        {children}
        <Bottom />
      </body>
    </html>
  );
}
