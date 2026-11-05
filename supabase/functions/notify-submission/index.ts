import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const TO_EMAIL = Deno.env.get("NOTIFY_TO_EMAIL");
const NOTIFY_WEBHOOK_SECRET = Deno.env.get("NOTIFY_WEBHOOK_SECRET");
const FROM_EMAIL =
  Deno.env.get("FROM_EMAIL") ?? "TipTopFitness <onboarding@resend.dev>";

serve(async (req) => {
  if (!TO_EMAIL) {
    console.error("NOTIFY_TO_EMAIL secret is not set");
    return new Response("Server misconfigured", { status: 500 });
  }
  if (!NOTIFY_WEBHOOK_SECRET){
    console.error("NOTIFY_WEBHOOK_SECRET secret is not set");
    return new Response("Server misconfigured", { status: 500 });
  }

const received = req.headers.get("x-webhook-secret");

  if (received !== NOTIFY_WEBHOOK_SECRET){
      return new Response("Unauthorized", { status: 401 });
  }
let body;
try {
  body = await req.json();
} catch (error) {
  return new Response("Bad json", { status: 400 });
}
if (!body || typeof body !== "object" || Array.isArray(body) ){
    return new Response("Bad request", { status: 400 });
}
if (typeof body.name !== "string" || body.name.trim() === "" || body.name.length > 100){
      return new Response("Invalid Name", { status: 400 });
}
if (typeof body.email !== "string" || body.email.trim() === "" || body.email.length > 254){
      return new Response("Invalid Email", { status: 400 });
}
if (body.phone != null && (typeof body.phone !== "string"|| body.phone.length > 30)){
      return new Response("Invalid Phone", { status: 400 });
}
if (typeof body.inquiry_type !== "string" || body.inquiry_type.trim() === "" || body.inquiry_type.length > 50){
      return new Response("Invalid Inquiry Type", { status: 400 });
}
if (typeof body.message !== "string" || body.message.trim() === "" || body.message.length > 5000){
      return new Response("Invalid Message", { status: 400 });
}
  const { name, email, phone, inquiry_type, message } = body;

  const text = `
    New inquiry from TipTopFitness
    Name: ${name}
    Email: ${email}
    Phone: ${phone || "Not provided"}
    Inquiry Type: ${inquiry_type}
    Message:
    ${message}
  `;
const safeName= name.replace(/[\r\n]+/g, " ");
const safeInquiryType= inquiry_type.replace(/[\r\n]+/g, " ");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New ${safeInquiryType} inquiry from ${safeName}`,
      text,
    }),
  });

    if (!res.ok) {
    const errorBody = await res.text();
    console.error("Resend error:", res.status, errorBody);
    return new Response("Failed to send email", { status: 500 });
  }

  return new Response("OK", { status: 200 });
});