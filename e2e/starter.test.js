describe("Crim Code Test", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("test getting to crim code", async () => {
    expect(element(by.text("Legislation"))).toBeVisible;
    await element(by.id("LegislationButton")).tap();

    await waitFor(element(by.text("Criminal Code of Canada")))
      .toBeVisible()
      .withTimeout(2000);
    await element(by.id("Criminal Code of Canada Button")).tap();

    await waitFor(element(by.text("General")))
      .toBeVisible()
      .withTimeout(4000);
  });
});
