// components/sections/VideosSection.jsx
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  VideoIcon,
  Play,
  User,
  Eye,
  Calendar,
  BookmarkPlus,
  Heart,
  Share2,
  PlayCircle,
  Clock
} from "lucide-react";

const VideosSection = forwardRef((props, ref) => {
  // Video tutorials data
  const videoTutorials = [
    {
      title: "Neural Networks Explained",
      duration: "45:20",
      views: "128K",
      instructor: "Prof. Sharma",
      thumbnail:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Web Development Masterclass",
      duration: "1:23:45",
      views: "95K",
      instructor: "Rahul Dev",
      thumbnail:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Data Structures: Binary Trees",
      duration: "38:12",
      views: "76K",
      instructor: "Dr. Patel",
      thumbnail:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Cloud Computing Fundamentals",
      duration: "55:30",
      views: "62K",
      instructor: "Cloud Experts",
      thumbnail:
        "https://images.unsplash.com/photo-1603127357126-bce6c8d70092?q=80&w=1800&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="videos"
      ref={ref}
      className="py-24 bg-slate-50 dark:bg-[#080816] relative overflow-hidden"
    >
      {/* Matrix-style accent elements */}
      <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#00AEEF]/10 to-transparent dark:from-[#00AEEF]/5 dark:to-transparent rounded-bl-3xl -z-10"></div>
      <div className="absolute left-0 bottom-0 w-1/4 h-1/2 bg-gradient-to-tr from-slate-100 to-slate-50/0 dark:from-slate-800/10 dark:to-transparent rounded-tr-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center mb-4 border border-red-100 dark:border-red-500/20">
              <VideoIcon className="w-4 h-4 mr-1.5" />
              Visual Learning
            </span>
            <span className="relative text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Video <span className="text-[#00AEEF]">Tutorials</span>
              <motion.span
                className="absolute -z-10 inset-0 text-[#00AEEF]/5 dark:text-[#00AEEF]/10 blur-sm"
                animate={{ opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Video Tutorials
              </motion.span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-600 dark:text-slate-300 text-xl max-w-3xl mx-auto mt-4"
          >
            Learn complex concepts through engaging video explanations from
            expert instructors. Visual learning for effective retention.
          </motion.p>
        </div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
            <div className="relative aspect-video group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1800&auto=format&fit=crop"
                alt="Featured Machine Learning Tutorial"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-all">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-[#00AEEF] flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </div>
              </div>

              {/* Overlay tech elements */}
              <div className="absolute top-4 left-4 flex items-center space-x-3">
                <div className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded">
                  FEATURED
                </div>
                <div className="px-3 py-1 bg-black/70 text-white text-sm backdrop-blur-sm rounded-md flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  <span>1:15:32</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Mastering Machine Learning Algorithms - A Comprehensive Guide
              </h3>
              <div className="flex flex-wrap items-center gap-6 mb-4 text-slate-600 dark:text-slate-400">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>Prof. Alan Turing</span>
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  <span>256K views</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Added April 2, 2025</span>
                </div>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-6">
                This comprehensive tutorial breaks down complex machine
                learning algorithms into easy-to-understand concepts. Perfect
                for beginners and intermediate learners looking to strengthen
                their AI foundations.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Machine Learning",
                  "Python",
                  "Neural Networks",
                  "Data Science",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors">
                    <BookmarkPlus className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>

                <button className="px-5 py-2.5 bg-[#00AEEF] text-white rounded-lg hover:bg-[#0099d6] transition-colors flex items-center">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videoTutorials.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700 group"
            >
              <div className="relative aspect-video cursor-pointer">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#00AEEF]/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded backdrop-blur-sm">
                  {video.duration}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 line-clamp-1 group-hover:text-[#00AEEF] transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {video.instructor} • {video.views} views
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs">
                    <div className="w-6 h-1.5 bg-[#00AEEF] rounded-full mr-1"></div>
                    <span className="text-slate-500 dark:text-slate-400">
                      75% complete
                    </span>
                  </div>
                  <button className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors">
                    <BookmarkPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/videos">
            <button className="px-6 py-3 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] hover:from-[#0067b5] hover:to-[#009acf] text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center mx-auto">
              <VideoIcon className="w-5 h-5 mr-2" />
              <span>Browse All Videos</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
});

export default VideosSection;