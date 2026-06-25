import { useParams, Link } from "react-router";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { exercises } from "./Guides";

const TEAL = "#0ABAB5";

export function GuideDetail() {
  const { slug } = useParams();
  const exercise = exercises.find((e) => e.slug === slug);

  if (!exercise) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-gray-500">Exercise not found.</p>
        <Link to="/guides" className="text-sm font-medium" style={{ color: TEAL }}>
          ← Back to guides
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Full screen video */}
      <div className="relative flex-1">
        <video
          src={exercise.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          controls
          className="w-full h-full object-cover"
          style={{ minHeight: "60vh" }}
        />

        {/* Back button */}
        <Link
          to="/guides"
          className="absolute top-4 left-4 flex items-center gap-1 bg-black/50 text-white px-3 py-2 rounded-full text-sm backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Guides
        </Link>

        {/* Group badge */}
        <span
          className="absolute top-4 right-4 text-white text-xs px-3 py-1.5 rounded-full font-medium"
          style={{ backgroundColor: TEAL }}
        >
          {exercise.group}
        </span>
      </div>

      {/* Info sheet */}
      <div className="bg-white rounded-t-3xl px-6 pt-6 pb-10">
        <h1 className="text-2xl font-medium text-gray-900 mb-1">{exercise.name}</h1>

        {/* Stats */}
        <div className="flex gap-4 mt-3 mb-6">
          <div
            className="flex-1 rounded-xl px-4 py-3 text-center"
            style={{ backgroundColor: "#E6FAFA" }}
          >
            <p className="text-xs text-gray-500 mb-0.5">Sets</p>
            <p className="text-xl font-medium" style={{ color: TEAL }}>
              {exercise.sets}
            </p>
          </div>
          <div
            className="flex-1 rounded-xl px-4 py-3 text-center"
            style={{ backgroundColor: "#E6FAFA" }}
          >
            <p className="text-xs text-gray-500 mb-0.5">Reps</p>
            <p className="text-xl font-medium" style={{ color: TEAL }}>
              {exercise.reps}
            </p>
          </div>
        </div>

        {/* Cues */}
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
          Coaching Cues
        </h2>
        <ul className="space-y-3">
          {exercise.cues.map((cue, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle
                className="w-5 h-5 mt-0.5 shrink-0"
                style={{ color: TEAL }}
              />
              <span className="text-gray-700">{cue}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}