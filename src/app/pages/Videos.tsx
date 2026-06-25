import { Play, Heart, MessageCircle, Share2, Eye } from "lucide-react";

// Mock TikTok-style video data
const videos = [
  {
    id: 1,
    title: "Full Body HIIT Workout",
    thumbnail: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29tYW4lMjB3b3Jrb3V0fGVufDF8fHx8MTc3NTYwMzgyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    views: "12.3K",
    likes: "1.2K",
    duration: "0:45",
    description: "Burn calories fast with this 45-second HIIT routine! 🔥"
  },
  {
    id: 2,
    title: "Glute Activation Exercises",
    thumbnail: "https://images.unsplash.com/photo-1623171855411-3b686d975cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZml0bmVzcyUyMHdvbWFufGVufDF8fHx8MTc3NTUwMDc5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    views: "18.7K",
    likes: "2.1K",
    duration: "0:52",
    description: "Build that 🍑 with these killer glute exercises!"
  },
  {
    id: 3,
    title: "Morning Stretch Routine",
    thumbnail: "https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc3NTYxMTM5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    views: "9.4K",
    likes: "856",
    duration: "1:15",
    description: "Start your day right with these stretches 🌅"
  },
  {
    id: 4,
    title: "Abs in 60 Seconds",
    thumbnail: "https://images.unsplash.com/photo-1766287453739-c3ffc3f37d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwd29ya291dHxlbnwxfHx8fDE3NzU2MTEzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    views: "25.1K",
    likes: "3.4K",
    duration: "1:00",
    description: "Quick ab workout you can do anywhere! 💪"
  },
  {
    id: 5,
    title: "Upper Body Strength",
    thumbnail: "https://images.unsplash.com/photo-1742239614185-b50da3deb7cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMHN0dWRpb3xlbnwxfHx8fDE3NzU2MTEzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    views: "14.2K",
    likes: "1.6K",
    duration: "0:38",
    description: "Build stronger arms and shoulders 💪"
  },
  {
    id: 6,
    title: "Yoga Flow for Flexibility",
    thumbnail: "https://images.unsplash.com/photo-1634144646738-809a0f8897c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwZml0bmVzc3xlbnwxfHx8fDE3NzU2MDQ2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    views: "11.5K",
    likes: "1.3K",
    duration: "1:22",
    description: "Improve flexibility with this yoga flow 🧘‍♀️"
  }
];

export function Videos() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2" style={{ color: '#0ABAB5' }}>
            Workout Videos
          </h1>
          <p className="text-gray-600">
            Follow along with quick fitness tips and full workouts
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl mb-1" style={{ color: '#0ABAB5' }}>
                150+
              </div>
              <div className="text-sm text-gray-600">Videos</div>
            </div>
            <div>
              <div className="text-2xl mb-1" style={{ color: '#0ABAB5' }}>
                50K+
              </div>
              <div className="text-sm text-gray-600">Followers</div>
            </div>
            <div>
              <div className="text-2xl mb-1" style={{ color: '#0ABAB5' }}>
                2M+
              </div>
              <div className="text-sm text-gray-600">Likes</div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[9/16] overflow-hidden bg-gray-900">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: '#0ABAB5' }}
                  >
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>

                {/* Views Badge */}
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {video.views}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="mb-2">{video.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{video.description}</p>

                {/* Actions */}
                <div className="flex items-center justify-between text-gray-500">
                  <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm">{video.likes}</span>
                  </button>

                  <button className="hover:text-gray-700 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </button>

                  <button className="hover:text-gray-700 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl mb-3" style={{ color: '#0ABAB5' }}>
            Follow for More Content
          </h2>
          <p className="text-gray-600 mb-6">
            Get daily workout tips, motivation, and fitness challenges on TikTok
          </p>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-white rounded-full hover:shadow-lg transition-shadow"
            style={{ backgroundColor: '#0ABAB5' }}
          >
            Follow on TikTok
          </a>
        </div>
      </div>
    </div>
  );
}
