import { Link } from "react-router";

const TEAL = "#0ABAB5";

const values = [
  {
    title: "Consistency Beats Perfection",
    description:
      "You don't have to be perfect to see results. You just have to keep showing up. The little things you do consistently will always beat the big things you only do once in a while.",
  },
  {
    title: "Fitness Should Fit Your Life",
    description:
      "Your fitness journey should work with your schedule and your lifestyle. I believe in creating routines that you can actually stick with.",
  },
  {
    title: "Confidence Is Earned",
    description:
      "Confidence doesn't magically appear. It grows every time you push yourself, finish a workout, or accomplish something you didn't think you could do.",
  },
  {
    title: "You're Never Doing This Alone",
    description:
      "When you train with me, you have someone in your corner. I'll celebrate your wins, keep you accountable, and remind you how far you've come when you forget.",
  },
];

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="relative h-[420px] overflow-hidden">
        <img
          src="/images/hero_About.PNG"
          alt="Tip's Logo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-6">
          <div>
            <h1 className="text-4xl md:text-5xl mb-4 font-medium">About Me</h1>
            <p className="text-lg md:text-xl max-w-xl text-white/90">
              Helping you become the strongest, most confident version of yourself.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12 space-y-10">
          {/* Photo */}
        <div className="aspect-[5/8] rounded-xl overflow-hidden border-2">
          <img
            src="/images/About_me.PNG"
            alt="Tip"
            className="w-full h-full object-cover object-top"
          />
        </div>
        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <p className="text-gray-700 leading-relaxed">
            Fitness isn't about looking like someone else. It's about becoming the best version of
            you. My goal is to help you build confidence, get stronger, and feel proud of what your
            body can do.
          </p>
        </div>

        {/* My Story */}
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-4">
          <h2 className="text-2xl font-medium" style={{ color: TEAL }}>
            My Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-medium text-gray-900">Hey, I'm Tip!</span> I started
            TipTop Fitness because fitness changed my life in ways I never expected. At first, I
            just wanted to look better. Over time, I realized it was doing so much more than
            changing my body. It taught me discipline, built my confidence, and showed me that I
            was capable of doing hard things.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I'm still on my own fitness journey, and I think that's what makes me a better coach.
            I know what it's like to walk into the gym feeling unsure, struggle to stay consistent,
            or wonder if you're even doing the exercises right. I've been there too.
          </p>
          <p className="text-gray-700 leading-relaxed">
            That's why I created TipTopFitness, a space where people feel encouraged, supported,
            and challenged to become the best version of themselves.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether your goal is to lose weight, build muscle, grow your glutes, improve your
            endurance, or simply feel healthier, I'm here to help you get there. Every workout is
            designed with your goals in mind, and every win matters, whether it's your first
            push-up or a new personal record.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At TipTop Fitness, we're not chasing perfection. We're building healthy habits, growing
            stronger every week, and becoming more confident one workout at a time.
          </p>
        </div>

       {/* Before & After placeholder */}
          <div className="grid grid-cols-2 gap-4 my-6">
           <div className="space-y-4">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide text-center">Before</p>
            <div className="aspect-[2/3] rounded-xl overflow-hidden border-2 border-dashed border-gray-200">
              <img
                src="/images/before-back.jpeg"
                alt="Tip back"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="aspect-[2/3] rounded-xl overflow-hidden border-2 border-dashed border-gray-200">
              <img
                src="/images/before-front.jpeg"
                alt="Tip front"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
            <div className="space-y-4">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide text-center">After</p>
               <div className="aspect-[2/3] rounded-xl overflow-hidden border-2 border-dashed border-gray-200">
              <img
                src="/images/after-back.PNG"
                alt="Tip back"
                className="w-full h-full object-cover"
              />
              </div>
               <div className="aspect-[2/3] rounded-xl overflow-hidden border-2 border-dashed border-gray-200">
              <img
                src="/images/after-front.PNG"
                alt="Tip front"
                className="w-full h-full object-cover "
              />
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            These photos remind me that real progress doesn't happen overnight. Every workout,
            every healthy choice, and every day I stayed consistent added up. These pictures are proof that showing up for yourself works.
          </p>

        {/* Values */}
        <div>
          <h2 className="text-2xl font-medium mb-6 text-center" style={{ color: TEAL }}>
            What I Believe
          </h2>
          <div className="space-y-4">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-medium mb-2" style={{ color: TEAL }}>
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
          <h2 className="text-2xl font-medium mb-3 text-gray-900">
            Ready to Get in <span style={{ color: TEAL }}>#TipTopShape?</span>
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
            No matter where you're starting, you belong here. Let's build strength, confidence,
            and healthy habits together.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 text-white rounded-full hover:shadow-lg transition-shadow text-sm font-medium"
            style={{ backgroundColor: TEAL }}
          >
            Let's Work Together
          </Link>
        </div>

      </div>
    </div>
  );
}