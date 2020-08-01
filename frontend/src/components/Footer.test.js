import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  //   it("should render Footer component", () => {
  //     const { getByTestId } = render(<Footer />);
  //     const element = getByTestId("footer-root");
  //     expect(element).toContainHTML(
  //       `<span className="Facebook">
  //       <img src="../image/Facebook_White.png" alt="Facebook"></img>
  //     </span>`
  //     );
  //   });
  it("it should take a snapshot test", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment(<Footer />)).toMatchSnapshot();
  });
});
