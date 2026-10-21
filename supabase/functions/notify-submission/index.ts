import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const TO_EMAIL = Deno.env.get("NOTIFY_TO_EMAIL");
const FROM_EMAIL =
  Deno.env.get("FROM_EMAIL") ?? "TipTopFitness <onboarding@resend.dev>";


serve(async (req) => {
  if (!TO_EMAIL) {
    console.error("NOTIFY_TO_EMAIL secret is not set");
    return new Response("Server misconfigured", { status: 500 });
  }
  const { name, email, phone, inquiry_type, message } = await req.json();

  const html = `
    <h2>New inquiry from TipTopFitness</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
    <p><strong>Inquiry Type:</strong> ${inquiry_type}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New ${inquiry_type} inquiry from ${name}`,
      html,
    }),
  });

    if (!res.ok) {
    const errorBody = await res.text();
    console.error("Resend error:", res.status, errorBody);
    return new Response("Failed to send email", { status: 500 });
  }

  return new Response("OK", { status: 200 });
});