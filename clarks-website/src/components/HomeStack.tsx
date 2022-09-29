import * as React from "react";
import Stack from "react-bootstrap/Stack";
import { StaticImage } from "gatsby-plugin-image";

function VerticalStack() {
  return (
    <Stack gap={3}>
      <div className="bg-light border"><StaticImage src="../images/powerslide.JPG"/></div>
      <div className="bg-light border">Second item</div>
      <div className="bg-light border">Third item</div>
    </Stack>
  );
}

export default VerticalStack;
