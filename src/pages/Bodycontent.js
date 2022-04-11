import React from "react";
import Body from "../Body";
import { homeObjOne } from "./Data";

function Bodycontent() {
  return (
    <>
      <Body {...homeObjOne} />
    </>
  );
}

export default Bodycontent;