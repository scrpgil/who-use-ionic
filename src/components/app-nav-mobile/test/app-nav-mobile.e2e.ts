import { newE2EPage } from "@stencil/core/testing";

describe("app-nav-mobile", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<app-nav-mobile></app-nav-mobile>");

    const element = await page.find("app-nav-mobile");
    expect(element).toHaveClass("hydrated");
  });
});
