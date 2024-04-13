import React from "react";
import Footer from "./Footer/Footer";

function Layout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
