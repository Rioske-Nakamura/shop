import Header from "./componentes/Header";
import Footer from "./componentes/Footer";



export const metadata = {
  title: 'Felipe-Rioske',
  description: 'Se ta rodando nao meche',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />

      
      </body>
    </html>
  );
}