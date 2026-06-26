import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { Play } from "lucide-react";
import { useLocation } from "react-router";

const TEAL = "#0ABAB5";

export type Exercise = {
  slug: string;
  name: string;
  group: string;        // specific label shown on card badge
  section: string;      // which filter section it belongs to
  sets: string;
  reps: string;
  cues: string[];
  videoUrl: string;
};

export const exercises: Exercise[] = [
  // ── GLUTES ──────────────────────────────────────────────
  {
    slug: "sumo-squat",
    name: "Sumo Squat",
    group: "Glutes",
    section: "Glutes",
    sets: "3",
    reps: "10",
    cues: ["Toes pointed out wide", "Drive knees out", "Squeeze glutes at the top"],
    videoUrl: "/videos/sumo-squats.mov",
  },
  {
    slug: "reverse-lunge",
    name: "Reverse Lunge",
    group: "Glutes",
    section: "Glutes",
    sets: "3",
    reps: "5 each leg",
    cues: ["Step back, not forward", "Front knee stays over ankle", "Torso upright"],
    videoUrl: "/videos/reverse-lunges.mov",
  },

  // ── LOWER BODY ──────────────────────────────────────────
  {
    slug: "goblet-squat",
    name: "Goblet Squat",
    group: "Quads",
    section: "Lower Body",
    sets: "3",
    reps: "10",
    cues: ["Hold weight at chest", "Elbows inside knees at bottom", "Drive through heels"],
    videoUrl: "/videos/goblet-squat.mov",
  },
  {
    slug: "calf-raises",
    name: "Calf Raises",
    group: "Calves",
    section: "Lower Body",
    sets: "3",
    reps: "10",
    cues: ["Slow and controlled", "Full range of motion", "Pause at the top"],
    videoUrl: "/videos/calf-raises.mov",
  },
  {
    slug: "banded-hamstring-curl",
    name: "Banded Hamstring Curl",
    group: "Hamstrings",
    section: "Lower Body",
    sets: "3",
    reps: "10",
    cues: ["Keep hips down", "Slow on the way down", "Squeeze at the top"],
    videoUrl: "/videos/banded-hamstring-curls.mov",
  },
  {
    slug: "kettlebell-swing",
    name: "Kettlebell Swing",
    group: "Lower Body",
    section: "Lower Body",
    sets: "3",
    reps: "10",
    cues: ["Hinge at hips, not a squat", "Explosive hip drive", "Keep core tight throughout"],
    videoUrl: "/videos/kettlebell-swings.mov",
  },

  // ── UPPER BODY ──────────────────────────────────────────
  {
    slug: "bent-over-rows",
    name: "Bent Over Rows",
    group: "Back",
    section: "Upper Body",
    sets: "3",
    reps: "10",
    cues: ["Hinge forward 45°", "Pull elbows back and past your ribs", "Squeeze shoulder blades together"],
    videoUrl: "/videos/bent-over-rows.MOV",
  },
  {
    slug: "chest-flys",
    name: "Chest Flys",
    group: "Chest",
    section: "Upper Body",
    sets: "3",
    reps: "10",
    cues: ["Slight bend in elbows throughout", "Wide arc open, squeeze closed", "Control the weight — don't drop it"],
    videoUrl: "/videos/chest-flys.mov",
  },
  {
    slug: "shoulder-press",
    name: "Shoulder Press",
    group: "Shoulders",
    section: "Upper Body",
    sets: "3",
    reps: "10",
    cues: ["Core tight, don't arch back", "Press straight overhead", "Don't shrug your ears"],
    videoUrl: "/videos/shoulder-press.MOV",
  },
  {
    slug: "banded-face-pull",
    name: "Banded Face Pull",
    group: "Back / Shoulders",
    section: "Upper Body",
    sets: "3",
    reps: "10",
    cues: ["Pull to forehead level", "Elbows high and wide", "Squeeze rear delts at the end"],
    videoUrl: "/videos/banded-face-pulls.MOV",
  },

  // ── ARMS ────────────────────────────────────────────────
  {
    slug: "bicep-curl-straight-bar",
    name: "Bicep Curl (straight bar)",
    group: "Arms",
    section: "Arms",
    sets: "3",
    reps: "10",
    cues: ["Elbows stay pinned at sides", "Full range of motion", "Slow on the way down"],
    videoUrl: "/videos/bicep-curls.mov",
  },

  // ── CARDIO ──────────────────────────────────────────────
  {
    slug: "rows",
    name: "Rows",
    group: "Cardio",
    section: "Cardio",
    sets: "3",
    reps: "30 sec",
    cues: ["Drive with your legs first", "Lean back slightly at finish", "Smooth consistent pace"],
    videoUrl: "/videos/rows.mov",
  },
];

// Sections shown in filter bar — order matters
const SECTIONS = ["All", "Glutes", "Lower Body", "Upper Body", "Arms", "Core", "Cardio"];

function VideoCard({ exercise }: { exercise: Exercise }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const { hash } = useLocation();
useEffect(() => {
  if (hash) {
    const el = document.getElementById(hash.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}, [hash]);


  return (
    <Link to={`/guides/${exercise.slug}`} className="block group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative aspect-[9/16] bg-gray-900 overflow-hidden">
          <video
            ref={videoRef}
            src={exercise.videoUrl}
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {!playing && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button
                onClick={(e) => { e.preventDefault(); handlePlay(); }}
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: TEAL }}
              >
                <Play className="w-7 h-7 text-white fill-white ml-1" />
              </button>
            </div>
          )}
          <span
            className="absolute top-2 left-2 text-white text-xs px-2 py-1 rounded-full"
            style={{ backgroundColor: TEAL }}
          >
            {exercise.group}
          </span>
        </div>
        <div className="p-3">
          <p className="font-medium text-gray-900">{exercise.name}</p>
          <p className="text-sm text-gray-500">{exercise.sets} sets · {exercise.reps} reps</p>
        </div>
      </div>
    </Link>
  );
}

export function Guides() {
  const [activeSection, setActiveSection] = useState("All");

  const sectionsToShow = activeSection === "All"
    ? SECTIONS.filter((s) => s !== "All")
    : [activeSection];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky header + filter */}
      <div className="bg-white px-4 pt-6 pb-4 shadow-sm sticky top-14 z-20">
        <h1 className="text-2xl font-medium mb-3" style={{ color: TEAL }}>
          Workout Guides
        </h1>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
              style={
                activeSection === s
                  ? { backgroundColor: TEAL, color: "white" }
                  : { backgroundColor: "#f3f4f6", color: "#374151" }
              }
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="px-4 py-6 space-y-10">
        {sectionsToShow.map((section) => {
          const items = exercises.filter((e) =>
            activeSection === "All" ? e.section === section : e.section === activeSection
          );
          if (!items.length) return null;
          return (
            <section key={section} id={section.toLowerCase().replace(/ /g, "-")}>
              <h2 className="text-lg font-medium text-gray-800 mb-4">{section}</h2>
              <div className="grid grid-cols-2 gap-3">
                {items.map((ex) => (
                  <VideoCard key={ex.slug} exercise={ex} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}