import { describe, expect, it } from "vitest";
import { toAnchor } from "./anchor";

describe("toAnchor", () => {
  // These are the section names behind the bootcamp QR codes (/guides#<anchor>).
  it.each([
    ["Quads & Glutes", "quads-glutes"],
    ["Back", "back"],
    ["Upper Body", "upper-body"],
    ["Lower Body", "lower-body"],
    ["Cardio", "cardio"],
  ])("turns %s into %s", (section, anchor) => {
    expect(toAnchor(section)).toBe(anchor);
  });

  it("collapses runs of punctuation and spaces into a single hyphen", () => {
    expect(toAnchor("Core  &  Abs")).toBe("core-abs");
  });

  it("drops a trailing hyphen", () => {
    expect(toAnchor("Stretch!")).toBe("stretch");
  });
});