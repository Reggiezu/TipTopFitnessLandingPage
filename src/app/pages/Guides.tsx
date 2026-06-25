import { useState, useRef } from "react";
import { Link } from "react-router";
import { Play } from "lucide-react";

const TEAL = "#0ABAB5";

export type Exercise = {
  slug: string;
  name: string;
  group: string;
  sets: string;
  reps: string;
  cues: string[];
  videoUrl: string;
};

// ─── HARDCODED EXERCISES ───────────────────────────────────────────────
// Replace videoUrl values with your Cloudflare R2 public URLs
export const exercises: Exercise[] = [
  // GLUTES
  {
    slug: "hip-thrust",
    name: "Hip Thrust",
    group: "Glutes",
    sets: "3",
    reps: "12–15",
    cues: ["Drive through your heels", "Squeeze at the top", "Keep chin tucked"],
    videoUrl: "https://pub-YOUR_R2_ID.r2.dev/hip-thrust.mp4",
  },
  {
    slug: "glute-bridge",
    name: "Glute Bridge",
    group: "Glutes",
    sets: "3",
    reps: "15",
    cues: ["Feet flat, hip-width apart", "Press hips straight up", "Hold 1 second at top"],
    videoUrl: "https://pub-YOUR_R2_ID.r2.dev/glute-bridge.mp4",
  },
  {
    slug: "romanian-deadlift",
    name: "Romanian Deadlift",
    group: "Glutes",
    sets: "3",
    reps: "10–12",
    cues: ["Soft bend in knees", "Hinge at hips, not waist", "Feel the hamstring stretch"],
    videoUrl: "https://pub-YOUR_R2_ID.r2.dev/rdl.mp4",
  },
  // UPPER BODY
  {
    slug: "push-up",
    name: "Push Up",
    group: "Upper Body",
    sets: "3",
    reps: "10–15",
    cues: ["Hands shoulder-width", "Body in straight line", "Chest touches floor"],
    videoUrl: "https://pub-YOUR_R2_ID.r2.dev/push-up.mp4",
  },
  {
    slug: "bent-over-row",
    name: "Bent Over Row",
    group: "Upper Body",
    sets: "3",
    reps: "12",
    cues: ["Hinge forward 45°", "Pull elbows back", "Squeeze shoulder blades"],
    videoUrl: "https://pub-YOUR_R2_ID.r2.dev/bent-over-row.mp4",
  },
  {
    slug: "shoulder-press",
    name: "Shoulder Press",
    group: "Upper Body",
    sets: "3",
    reps: "10–12",
    cues: ["Core tight", "Press straight overhead", "Don't shrug your ears"],
    videoUrl: "https://pub-YOUR_R2_ID.r2.dev/shoulder-press.mp4",
  },
  // ARMS
  {
    slug: "bicep-curl",
    name: "Bicep Curl",
    group: "Arms",
    sets: "3",
    reps: "12–15",
    cues: ["Elbows stay at sides", "Full range of motion", "Slow on the way down"],
    videoUrl: "https://pub-YOUR_R2_ID.r2.dev/bicep-curl.mp4",
  },
  {
    slug: "tricep-dip",
    name: "Tricep Dip",
    group: "Arms",
    sets: "3",
    reps: "12",
    cues: ["Hands behind you", "Lower until 90°", "Press through palms"],
    videoUrl: "https://pub-YOUR_R2_ID.r2.dev/tricep-dip.mp4",
  },
  // CORE
  {
    slug: "plank",
    name: "Plank",
    group: "Core",
    sets: "3",
    reps: "30–45 sec",
    cues: ["Forearms parallel", "Hips level", "Breathe steadily"],
    videoUrl: "https://pub-YOUR_R2_ID.r2.dev/plank.mp4",
  },
  {
    slug: "dead-bug",
    name: "Dead Bug",
    group: "Core",
    sets: "3",
    reps: "10 each side",
    cues: ["Lower back pressed down", "Move opposite arm and leg", "Slow and controlled"],
    videoUrl: "https://pub-YOUR_R2_ID.r2.dev/dead-bug.mp4",
  },
  // FULL BODY
  {
    slug: "squat",
    name: "Squat",
    group: "Full Body",
    sets: "3",
    reps: "15",
    cues: ["Feet shoulder-width", "Knees track over toes", "Drive through heels"],
    videoUrl: "https://pub-YOUR_R2_ID.r2.dev/squat.mp4",
  },
  {
    slug: "lunge",
    name: "Reverse Lunge",
    group: "Full Body",
    sets: "3",
    reps: "10 each leg",
    cues: ["Step back, not forward", "Front knee stays over ankle", "Torso upright"],
    videoUrl: "https://pub-YOUR_R2_ID.r2.dev/lunge.mp4",
  },
];

const GROUPS = ["All", "Glutes", "Upper Body", "Arms", "Core", "Full Body"];

function VideoCard({ exercise }: { exercise: Exercise }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <Link to={`/guides/${exercise.slug}`} className="block group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Video */}
        <div className="relative aspect-[9/16] bg-gray-900 overflow-hidden">
          <video
            ref={videoRef}
            src={exercise.videoUrl}
            loop
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
        {/* Info */}
        <div className="p-3">
          <p className="font-medium text-gray-900">{exercise.name}</p>
          <p className="text-sm text-gray-500">{exercise.sets} sets · {exercise.reps} reps</p>
        </div>
      </div>
    </Link>
  );
}

export function Guides() {
  const [activeGroup, setActiveGroup] = useState("All");

  const filtered = activeGroup === "All"
    ? exercises
    : exercises.filter((e) => e.group === activeGroup);

  const groups = activeGroup === "All"
    ? GROUPS.filter((g) => g !== "All")
    : [activeGroup];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 pt-6 pb-4 shadow-sm sticky top-14 z-20">
        <h1 className="text-2xl font-medium mb-3" style={{ color: TEAL }}>
          Workout Guides
        </h1>
        {/* Filter pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {GROUPS.map((g) => (
            <button
              key={g}
              onClick={() => setActiveGroup(g)}
              className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
              style={
                activeGroup === g
                  ? { backgroundColor: TEAL, color: "white" }
                  : { backgroundColor: "#f3f4f6", color: "#374151" }
              }
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-10">
        {groups.map((group) => {
          const items = filtered.filter((e) =>
            activeGroup === "All" ? e.group === group : true
          );
          if (!items.length) return null;
          return (
            <section key={group} id={group.toLowerCase().replace(" ", "-")}>
              <h2 className="text-lg font-medium text-gray-800 mb-4">{group}</h2>
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