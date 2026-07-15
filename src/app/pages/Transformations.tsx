const TEAL = "#0ABAB5";

const clients = [
  {
    duration: "30 Days",
    image: "/images/ochi.JPEG",
  },
  {
    duration: "2 Months",
    image: "/images/leah.JPEG",
  },
  {
    duration: "5 Months",
    image: "/images/mom.JPEG",
  },
];

export function Transformations() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white py-12 px-4 text-center shadow-sm">
        <h1 className="text-4xl font-medium mb-3" style={{ color: TEAL }}>
          Transformations
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
          Real people, real results. These are clients who showed up consistently
          and trusted the process — and their bodies changed because of it.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
        {clients.map((client, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 pt-5 pb-3 flex items-center gap-3">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: TEAL }}
              >
                {client.duration}
              </span>
              <p className="text-sm text-gray-400">of consistent training</p>
            </div>
            <img
              src={client.image}
              alt={`${client.duration} transformation`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-2xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
          <h2 className="text-2xl font-medium mb-2 text-gray-900">
            Ready to Write Your Story?
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
            Your transformation starts with a single session. Let's figure out
            what your body is capable of.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
            style={{ backgroundColor: TEAL }}
          >
            Start Your Transformation
          </a>
        </div>
      </div>

    </div>
  );
}