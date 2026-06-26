import { Link } from "react-router";
import { User, Video, Blend } from "lucide-react";

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
        <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
          These rates are for founding clients only. You're trusting me early and I want to honor
          that. Once these spots are gone, pricing goes up, so if you're ready, now is the time
          to lock it in.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12 space-y-16">

        {/* ── IN-PERSON ───────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: TEAL }}>
              <User className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-2xl font-medium text-gray-900">In-Person Training</h2>
          </div>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Just you and me. I bring the plan, the energy, and the knowledge. You just have to show up.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Build */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <FoundingBadge />
              <Badge>2x / week</Badge>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Build</h3>
              <p className="text-xs text-gray-400 mb-4">8 sessions per month</p>
              <PriceDisplay original="$260 /mo" current="$160" period="/ month" />
              <p className="text-xs text-green-600 font-medium mb-4">You save $100 as a founding client</p>
              <ul className="space-y-2">
                {["Custom workout program", "Form correction & coaching", "Progress tracking", "Personal check-ins"].map(f => <Feature key={f} text={f} />)}
              </ul>
              <ClaimButton />
            </div>

            {/* Transform */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border-2" style={{ borderColor: TEAL }}>
              <FoundingBadge />
              <Badge>3x / week · Best Results</Badge>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Transform</h3>
              <p className="text-xs text-gray-400 mb-4">12 sessions per month</p>
              <PriceDisplay original="$300/mo" current="$200" period="/ month" />
              <p className="text-xs text-green-600 font-medium mb-4">You save $100 as a founding client</p>
              <ul className="space-y-2">
                {["Everything in Build", "Customized meal plan", "Monthly body measurements", "Priority scheduling", "Transformation photos"].map(f => <Feature key={f} text={f} />)}
              </ul>
              <ClaimButton />
            </div>
          </div>
        </section>

        {/* ── ONLINE COACHING ─────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: TEAL }}>
              <Video className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-2xl font-medium text-gray-900">Online Coaching</h2>
          </div>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Distance is not an excuse. Pick the format that fits your life and let's get to work.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Starter */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <FoundingBadge />
              <Badge>Plan Only</Badge>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Starter</h3>
              <p className="text-xs text-gray-400 mb-4">Written program + messaging. No live sessions.</p>
              <PriceDisplay original="$100/mo" current="$60" period="/ month" />
              <ul className="space-y-2">
                {["Custom monthly program", "Personal check-ins", "Form feedback via video", "Progress tracking"].map(f => <Feature key={f} text={f} />)}
              </ul>
              <ClaimButton label="Get Started" />
            </div>

            {/* Live Sessions */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border-2" style={{ borderColor: TEAL }}>
              <FoundingBadge />
              <Badge>Virtual · 2x / week · Most Popular</Badge>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Live Sessions</h3>
              <p className="text-xs text-gray-400 mb-4">8 live Zoom/FaceTime sessions per month</p>
              <PriceDisplay original="$220/mo" current="$120" period="/ month" />
              <ul className="space-y-2">
                {["8 live virtual sessions", "Custom program", "Real-time form coaching", "Customized meal plan", "Personal check-ins"].map(f => <Feature key={f} text={f} />)}
              </ul>
              <ClaimButton label="Get Started" />
            </div>

            {/* Full Virtual */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <FoundingBadge />
              <Badge>Virtual · 3x / week</Badge>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Full Virtual</h3>
              <p className="text-xs text-gray-400 mb-4">12 live Zoom/FaceTime sessions per month</p>
              <PriceDisplay original="$260/mo" current="$160" period="/ month" />
              <ul className="space-y-2">
                {["12 live virtual sessions", "Everything in Live Sessions", "Customized meal plan", "Weekly progress calls", "Transformation photos"].map(f => <Feature key={f} text={f} />)}
              </ul>
              <ClaimButton label="Get Started" />
            </div>
          </div>
        </section>

        {/* ── FREE CONSULT ─────────────────────────────────── */}
        <section>
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center border border-gray-100">
            <h2 className="text-2xl font-medium mb-2 text-gray-900">Not Sure Where to Start?</h2>
            <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
              That's okay — let's just talk. Tell me your goals and I'll help you figure out what makes the most sense for you.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {/* Virtual consult */}
              <div className="rounded-xl p-5 border border-gray-100 bg-gray-50">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Virtual · Zoom / FaceTime</p>
                <h3 className="font-medium text-gray-900 mb-1">Free Consult</h3>
                <p className="text-2xl font-medium mb-3" style={{ color: TEAL }}>Free</p>
                <p className="text-xs text-gray-500 mb-4">A casual 15–20 min call where we talk about your goals, your lifestyle, and what you actually need. Zero pressure.</p>
                <a
                  href={smsLink}
                  className="block w-full py-2.5 text-center text-white rounded-xl text-sm font-medium"
                  style={{ backgroundColor: TEAL }}
                >
                  Book Free Consult
                </a>
              </div>
              {/* In-person consult */}
              <div className="rounded-xl p-5 border border-gray-100 bg-gray-50">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">In-Person · Meet in Person</p>
                <h3 className="font-medium text-gray-900 mb-1">Individual session</h3>
                <PriceDisplay original="$30/session" current="$25" period="/ session" />
                <p className="text-xs text-gray-500 mb-4">We meet and map out your plan in person. No commitment.</p>
                <a
                  href={smsLink}
                  className="block w-full py-2.5 text-center text-white rounded-xl text-sm font-medium"
                  style={{ backgroundColor: TEAL }}
                >
                  Book In-Person
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}