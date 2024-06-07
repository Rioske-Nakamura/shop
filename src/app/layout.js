import Main from "../componentes/Main";

export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Main/>
      <body>{children}</body>
    </html>
  );
}
