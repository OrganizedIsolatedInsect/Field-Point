describe("Crim Code Test", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("test getting to crim code", async () => {
    await expect(element(by.id("LegislationButton"))).toBeVisible();
    await element(by.id("LegislationButton")).tap();

    await expect(element(by.id("CrimCodeButton"))).toExist();
  });
});
