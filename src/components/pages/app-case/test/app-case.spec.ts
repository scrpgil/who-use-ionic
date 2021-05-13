import { AppCase } from "../app-case";

describe("app", () => {
  it("builds", () => {
    expect(new AppCase()).toBeTruthy();
  });
});
