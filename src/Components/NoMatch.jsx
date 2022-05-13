import React from "react";
import "../Assets/NoMatch.css";
import error from "../Assets/404error.gif";
export const NoMatch = () => {
  return (
    <main id="bg-nomatch">
      <section id='error-image'>
        <img src={error} alt="" width='450' height='350' style={{marginTop:'140px'}}/>
      </section>
    </main>
  );
};
