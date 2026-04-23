import { createElement } from "lwc";
import Test_component from "c/test_component";

describe("c-test_component", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("Test_component shall intentionally fail", () => {
    expect(1).toEqual(
      1,
      "This component shall intentionally fail. Here is the message output: test_component"
    );
  });
});
