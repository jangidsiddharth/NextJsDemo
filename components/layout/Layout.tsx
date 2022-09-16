import React from "react";
import FooterPage from "./FooterPage";
import HeaderPage from "./HeaderPage";
type Props = {
  children?: React.ReactNode;
};
const LayoutPage = ({ children }: Props) => {
  return (
    <>
      <HeaderPage />
      {children}
      <FooterPage />
    </>
  );
};

export default LayoutPage;
