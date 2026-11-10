import type { ReactNode } from "react";
import Nav from "./Nav"

interface Prop {
  children: ReactNode
}

const Layout = ({ children }: Prop) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout