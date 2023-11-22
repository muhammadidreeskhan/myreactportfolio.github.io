import React from "react";
import "./footer.css";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

function Footer() {
  return <div className="footer">Made With ❤️ By Muhammad Idrees Khan</div>;
}

export default Footer;