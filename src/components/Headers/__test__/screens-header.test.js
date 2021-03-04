import React from "react";
import { render } from "@testing-library/react-native";
import { View } from "react-native";

import ScreensHeader from "../index";

/**
  Failed to execute the testing because of Nativebased components.
**/


jest.mock("react-native", () => require("react-native-mock-render"), {
  virtual: true,
});

beforeEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.unmock("react-native");
});

describe("Test ScreensHeader Component", () => {
  it("renders correctly", () => {
     const { toJSON } = render(
       <ScreensHeader
         navigation={null}
         headerName="Back"
         onPressInfor={null}
         leftContainer={
           <View></View>
         }
         testID="test-screens-header"
         accessibilityLabel="test-screens-header"
       />,
     );
     expect(toJSON).toMatchSnapshot();
  });
});
