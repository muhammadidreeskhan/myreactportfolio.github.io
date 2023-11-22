import React from "react";
import "./separator.css";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

function Separator() {
  return <div className="separator"></div>;
}

export default Separator;