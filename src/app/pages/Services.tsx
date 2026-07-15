import { Link } from "react-router";
import { User, Video, Users } from "lucide-react";

const TEAL = "#0ABAB5";
const smsLink = "/contact";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-xs font-medium px-3 py-1 rounded-full text-white mb-4"
      style={{ backgroundColor: TEAL }}
    >
      {children}
    </span>
  );
}

function SoldOutBadge() {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-xs font-semibold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
        🔴 Sold Out
      </span>
    </div>
  );
}

function FoundingBadge() {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
        ⚡ Founding Rate — Limited Spots
      </span>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-gray-700">
      <span style={{ color: TEAL }} className="mt-0.5 shrink-0">✓</span>
      {text}
    </li>
  );
}

function PriceDisplay({ original, current, period }: { original: string; current: string; period: string }) {
  return (
    <div className="mb-4">
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-medium" style={{ color: TEAL }}>{current}</span>
        <span className="text-sm text-gray-400">{period}</span>
      </div>
      <p className="text-sm text-gray-400 line-through">{original}</p>
    </div>
  );
}

function ClaimButton({ label = "Claim This Rate" }: { label?: string }) {
  return (
    <Link
      to={smsLink}
      className="block w-full py-3 text-center text-white rounded-xl text-sm font-medium hover:shadow-md transition-shadow mt-6"
      style={{ backgroundColor: TEAL }}
    >
      {label}
    </Link>
  );
}

function SoldOutButton() {
  return (
    <div className="block w-full py-3 text-center text-gray-400 bg-gray-100 rounded-xl text-sm font-medium mt-6 cursor-not-allowed">
      Sold Out
    </div>
  );
}

export function Services() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white py-12 px-4 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">
          ⚡ Founding Client Pricing — Won't Last
        </p>
        <h1 className="text-4xl font-medium mb-3" style={{ color: TEAL }}>
          Services & Pricing
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed mb-6">
          These rates are for founding clients only. You're trusting me early and I want to honor
          that. Once these spots are gone, pricing goes up — so if you're ready, now is the time
          to lock it in.
        </p>

        {/* Gym info */}
        <div className="max-w-xl mx-auto bg-gray-50 rounded-2xl p-5 text-left border border-gray-100">
          <div className="mb-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Training Location</p>
            <p className="text-sm font-medium text-gray-800">Private Gym · $30/mo gym fee</p>
            <a
              href="https://maps.google.com/?q=3201+Atlanta+Industrial+Pkwy+NW+Suite+105+Atlanta+GA+30331"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs mt-1 block hover:underline"
              style={{ color: TEAL }}
            >
              3201 Atlanta Industrial Pkwy NW, Suite 105 · Atlanta, GA 30331
            </a>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Gym Fee Includes</p>
            <ul className="grid grid-cols-2 gap-1.5">
              {[
                "Open gym access",
                "Recovery lounge",
                "Infrared sauna",
                "Discounted IV drip therapy",
                "Weekly HBX boot camps",
              ].map(item => (
                <li key={item} className="flex items-start gap-1.5 text-xs text-gray-600">
                  <span style={{ color: TEAL }} className="shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12 space-y-16">

        {/* ── GROUP TRAINING ───────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: TEAL }}>
              <Users className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-2xl font-medium text-gray-900">Group Training</h2>
          </div>
          <p className="text-gray-500 text-sm mb-2 leading-relaxed">
            Train together, grow together. Sessions run Monday, Wednesday & Friday with two time slots available for both in-person and online.
          </p>
          <p className="text-xs text-amber-600 font-medium mb-6">⚡ This is the only plan currently available — spots are limited.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-sm p-6 border-2 flex flex-col" style={{ borderColor: TEAL }}>
              <FoundingBadge />
              <Badge>In-Person · M / W / F</Badge>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Semi-Private Training</h3>
              <p className="text-xs text-gray-400 mb-4">Small group · 3–6 people · Two time slots</p>
              <PriceDisplay original="$220/mo" current="$160" period="/ month" />
              <p className="text-xs text-green-600 font-medium mb-4">Founding client rate</p>
              <ul className="space-y-2 flex-1">
                {[
                  "3–6 people per group",
                  "3x per week · M, W, F",
                  "Two morning time slots ",
                  "Custom group programming",
                  "Form correction & coaching",
                  "Community motivation",
                  "Monthly progress check-ins",
                  "Meal plan guidance & nutrition tips",
                ].map(f => <Feature key={f} text={f} />)}
              </ul>
              <ClaimButton label="Claim Your Spot" />
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border-2 flex flex-col" style={{ borderColor: TEAL }}>
              <FoundingBadge />
              <Badge>Online · M / W / F</Badge>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Online Group</h3>
              <p className="text-xs text-gray-400 mb-4">Dumbbell training · Zoom/FaceTime · Two time slots</p>
              <PriceDisplay original="$180/mo" current="$120" period="/ month" />
              <p className="text-xs text-green-600 font-medium mb-4">Founding client rate</p>
              <ul className="space-y-2 flex-1">
                {[
                  "3x per week · M, W, F",
                  "Two time slots to choose from",
                  "Dumbbell-based training",
                  "Sessions recorded for playback",
                  "Real-time form coaching",
                  "Train from anywhere",
                  "Monthly progress check-ins",
                  "Meal plan guidance & nutrition tips",
                ].map(f => <Feature key={f} text={f} />)}
              </ul>
              <ClaimButton label="Claim Your Spot" />
            </div>
          </div>
        </section>

        {/* ── 1-ON-1 SOLO — SOLD OUT ───────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-gray-300">
              <User className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-2xl font-medium text-gray-400">1-on-1 Solo Training</h2>
            <span className="text-xs font-semibold text-red-500 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              🔴 Sold Out
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-6">These spots are currently full. Join the waitlist via the contact form.</p>

          <div className="grid sm:grid-cols-2 gap-4 opacity-50 pointer-events-none select-none">
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex flex-col">
              <SoldOutBadge />
              <Badge>In-Person · 2x / week</Badge>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Build</h3>
              <p className="text-xs text-gray-400 mb-4">8 sessions per month</p>
              <PriceDisplay original="$260/mo" current="$160" period="/ month" />
              <ul className="space-y-2 flex-1">
                {["Custom workout program", "Form correction & coaching", "Progress tracking", "Personal check-ins"].map(f => <Feature key={f} text={f} />)}
              </ul>
              <SoldOutButton />
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex flex-col">
              <SoldOutBadge />
              <Badge>In-Person · 3x / week</Badge>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Transform</h3>
              <p className="text-xs text-gray-400 mb-4">12 sessions per month</p>
              <PriceDisplay original="$300/mo" current="$200" period="/ month" />
              <ul className="space-y-2 flex-1">
                {["Everything in Build", "Customized meal plan", "Monthly body measurements", "Priority scheduling", "Transformation photos"].map(f => <Feature key={f} text={f} />)}
              </ul>
              <SoldOutButton />
            </div>
          </div>

          <div className="mt-4 text-center">
            <Link to="/contact" className="inline-block text-sm font-medium underline underline-offset-2" style={{ color: TEAL }}>
              Join the waitlist →
            </Link>
          </div>
        </section>

        {/* ── VIRTUAL SOLO — SOLD OUT ──────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-gray-300">
              <Video className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-2xl font-medium text-gray-400">1-on-1 Virtual Coaching</h2>
            <span className="text-xs font-semibold text-red-500 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              🔴 Sold Out
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-6">These spots are currently full. Join the waitlist via the contact form.</p>

          <div className="grid sm:grid-cols-2 gap-4 opacity-50 pointer-events-none select-none">
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex flex-col">
              <SoldOutBadge />
              <Badge>Plan Only</Badge>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Starter</h3>
              <p className="text-xs text-gray-400 mb-4">Written program + messaging. No live sessions.</p>
              <PriceDisplay original="$100/mo" current="$60" period="/ month" />
              <ul className="space-y-2 flex-1">
                {["Custom monthly program", "Personal check-ins", "Form feedback via video", "Progress tracking"].map(f => <Feature key={f} text={f} />)}
              </ul>
              <SoldOutButton />
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex flex-col">
              <SoldOutBadge />
              <Badge>Virtual · 2x / week</Badge>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Live Sessions</h3>
              <p className="text-xs text-gray-400 mb-4">8 live Zoom/FaceTime sessions per month</p>
              <PriceDisplay original="$220/mo" current="$120" period="/ month" />
              <ul className="space-y-2 flex-1">
                {["8 live virtual sessions", "Custom program", "Real-time form coaching", "Customized meal plan", "Personal check-ins"].map(f => <Feature key={f} text={f} />)}
              </ul>
              <SoldOutButton />
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex flex-col">
              <SoldOutBadge />
              <Badge>Virtual · 3x / week</Badge>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Full Virtual</h3>
              <p className="text-xs text-gray-400 mb-4">12 live Zoom/FaceTime sessions per month</p>
              <PriceDisplay original="$260/mo" current="$160" period="/ month" />
              <ul className="space-y-2 flex-1">
                {["12 live virtual sessions", "Everything in Live Sessions", "Customized meal plan", "Weekly progress calls", "Transformation photos"].map(f => <Feature key={f} text={f} />)}
              </ul>
              <SoldOutButton />
            </div>
          </div>

          <div className="mt-4 text-center">
            <Link to="/contact" className="inline-block text-sm font-medium underline underline-offset-2" style={{ color: TEAL }}>
              Join the waitlist →
            </Link>
          </div>
        </section>

        {/* ── CONSULTS ─────────────────────────────────────── */}
        <section>
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center border border-gray-100">
            <h2 className="text-2xl font-medium mb-2 text-gray-900">Not Sure Where to Start?</h2>
            <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
              That's okay — let's just talk. Tell me your goals and I'll help you figure out what makes the most sense for you.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="rounded-xl p-5 border border-gray-100 bg-gray-50 flex flex-col">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Virtual · Zoom / FaceTime</p>
                <h3 className="font-medium text-gray-900 mb-1">Free Consult</h3>
                <p className="text-2xl font-medium mb-3" style={{ color: TEAL }}>Free</p>
                <p className="text-xs text-gray-500 mb-4 flex-1">A casual 15–20 min call where we talk about your goals, your lifestyle, and what you actually need. Zero pressure.</p>
                <Link to="/contact" className="block w-full py-2.5 text-center text-white rounded-xl text-sm font-medium" style={{ backgroundColor: TEAL }}>
                  Book Free Consult
                </Link>
              </div>
              <div className="rounded-xl p-5 border border-gray-100 bg-gray-50 flex flex-col">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">In-Person</p>
                <h3 className="font-medium text-gray-900 mb-1">Individual Session</h3>
                <PriceDisplay original="$30/session" current="$25" period="/ session" />
                <p className="text-xs text-gray-500 mb-4 flex-1">We meet and map out your plan in person. The $25 goes toward your first month if you sign up.</p>
                <Link to="/contact" className="block w-full py-2.5 text-center text-white rounded-xl text-sm font-medium" style={{ backgroundColor: TEAL }}>
                  Book In-Person
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}