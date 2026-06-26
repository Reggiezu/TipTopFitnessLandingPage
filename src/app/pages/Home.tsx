import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router";

export function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full-screen Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/videos/hero.mov"
            type="video/mp4"
          />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 
            className="text-5xl md:text-7xl mb-4 tracking-wide"
            style={{ 
              fontFamily: 'cursive',
              color: '#0ABAB5',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            TipTopFitness
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Transform Your Body, Transform Your Life
          </p>

          <p className="text-base md:text-lg mb-12 text-white/80">
            Personal training tailored to your goals. Build strength, confidence, 
            and a healthier lifestyle with expert guidance and motivation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full text-white flex items-center gap-2 mx-auto"
                style={{ backgroundColor: '#0ABAB5' }}
              >
                Book Your Session
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <Link to="/guides">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-white border-2 border-white/40 flex items-center gap-2 mx-auto"
              >
                Watch Videos
                <Play className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
