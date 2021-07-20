import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
};