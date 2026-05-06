describe("c-test-component", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("Test Component shall intentionally fail", () => {
    expect(1).toEqual(1, "This test shall intentionally pass");
  });
});
