import Nav from "@components/Nav";
import "../style/globals.css";
import { NextAuthProvider } from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <NextAuthProvider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </NextAuthProvider>
    </body>
  </html>
);

export default RootLayout;
