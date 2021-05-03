import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <Typography variant="body1">
          Open Source on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://github.com/sintija/react-dictionary-app"}
          >
            {" "}
            Github{" "}
          </a>{" "}
          by Sintija
        </Typography>
      </div>
    </div>
  );
}
