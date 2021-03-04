import React from "react";
import { render } from "@testing-library/react-native";

import StyledText from "../index";

/**
  Passed Rendering component
**/

describe("Test StyledText Component", () => {
  it("renders correctly", () => {
     const { toJSON } = render(
       <StyledText
         color={"black"}
         weight={"normal"}
         testID="test-styled-text"
         accessibilityLabel="test-styled-text"
       />,
     );
     expect(toJSON).toMatchSnapshot();
  });
});
