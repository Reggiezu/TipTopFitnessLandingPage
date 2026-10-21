import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const { insert, from } = vi.hoisted(() => {
  const insert = vi.fn();
  const from = vi.fn(() => ({ insert }));
  return { insert, from };
});

vi.mock("@supabase/supabase-js", () => ({
  createClient: () => ({ from }),
}));

import { Contact } from "./Contact";

async function fillForm({ phone = "" } = {}) {
  await userEvent.type(screen.getByPlaceholderText("Your name"), "Jordan Lee");
  await userEvent.type(screen.getByPlaceholderText("your@email.com"), "jordan@example.com");
  if (phone) await userEvent.type(screen.getByPlaceholderText("(optional)"), phone);
  await userEvent.selectOptions(screen.getByRole("combobox"), "Free Consultation");
  await userEvent.type(screen.getByPlaceholderText("Tell Tip about your goals..."), "I want to start strength training.");
}

describe("Contact form", () => {
  beforeEach(() => {
    insert.mockReset();
    from.mockClear();
  });

  it("does not call Supabase when required fields are empty", async () => {
    render(<Contact />);
    await userEvent.click(screen.getByRole("button", { name: "Send Message" }));
    expect(insert).not.toHaveBeenCalled();
  });

  it("inserts the submission into contact_submissions with the right columns", async () => {
    insert.mockResolvedValue({ error: null });
    render(<Contact />);
    await fillForm();
    await userEvent.click(screen.getByRole("button", { name: "Send Message" }));

    expect(from).toHaveBeenCalledWith("contact_submissions");
    expect(insert).toHaveBeenCalledWith([
      {
        name: "Jordan Lee",
        email: "jordan@example.com",
        phone: null, // empty optional phone is stored as null
        inquiry_type: "Free Consultation",
        message: "I want to start strength training.",
      },
    ]);
    expect(await screen.findByText("Message sent!")).toBeInTheDocument();
  });

  it("keeps a provided phone number", async () => {
    insert.mockResolvedValue({ error: null });
    render(<Contact />);
    await fillForm({ phone: "4045550100" });
    await userEvent.click(screen.getByRole("button", { name: "Send Message" }));
    expect(insert.mock.calls[0][0][0].phone).toBe("4045550100");
  });

  it("shows an error and keeps the form when Supabase returns an error", async () => {
    insert.mockResolvedValue({ error: { message: "boom" } });
    render(<Contact />);
    await fillForm();
    await userEvent.click(screen.getByRole("button", { name: "Send Message" }));

    expect(await screen.findByText(/Something went wrong/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your name")).toHaveValue("Jordan Lee");
  });
});