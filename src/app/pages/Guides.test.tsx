import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { Guides, exercises } from "./Guides";

const renderGuides = (path = "/guides") =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Guides />
    </MemoryRouter>
  );

const sectionHeadings = () =>
  screen.queryAllByRole("heading", { level: 2 }).map((h) => h.textContent);

describe("Guides filter", () => {
  it("shows every section by default", () => {
    renderGuides();
    expect(sectionHeadings()).toEqual(
      expect.arrayContaining(["Quads & Glutes", "Back", "Upper Body", "Lower Body", "Cardio"])
    );
  });

  it("shows only the chosen section and its exercises", async () => {
    renderGuides();
    await userEvent.click(screen.getByRole("button", { name: "Back" }));

    expect(sectionHeadings()).toEqual(["Back"]);

    const backNames = exercises.filter((e) => e.section === "Back").map((e) => e.name);
    const otherNames = exercises.filter((e) => e.section !== "Back").map((e) => e.name);
    expect(backNames.length).toBeGreaterThan(0);
    backNames.forEach((n) => expect(screen.getAllByText(n).length).toBeGreaterThan(0));
    otherNames
      .filter((n) => !backNames.includes(n))
      .forEach((n) => expect(screen.queryByText(n)).not.toBeInTheDocument());
  });

  it("goes back to all sections when All is selected", async () => {
    renderGuides();
    await userEvent.click(screen.getByRole("button", { name: "Cardio" }));
    await userEvent.click(screen.getByRole("button", { name: "All" }));
    expect(sectionHeadings().length).toBeGreaterThan(1);
  });

  it("renders section ids that match the QR code hash links", () => {
    const { container } = renderGuides("/guides#quads-glutes");
    ["quads-glutes", "back", "upper-body", "lower-body", "cardio"].forEach((id) =>
      expect(container.querySelector(`section#${id}`)).not.toBeNull()
    );
  });
});