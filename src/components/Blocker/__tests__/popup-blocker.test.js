import React from "react";
import { render } from "@testing-library/react-native";

import PopUpBlocker from "../index";

/**
  Failed to execute the testing because of Nativebased components.
**/

describe("Test PopUpBlocker Component", () => {
  it("renders correctly", () => {
     const { toJSON } = render(
       <PopUpBlocker
         testID="test-popup-blocker"
         accessibilityLabel="test-popup-blocker"
       />,
     );
     expect(toJSON).toMatchSnapshot();
  });
});
