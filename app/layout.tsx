import StyledComponentsRegistry from "./registry";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import "@/styles/fonts.css";
import "@/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Header>
            <Nav />
          </Header>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
