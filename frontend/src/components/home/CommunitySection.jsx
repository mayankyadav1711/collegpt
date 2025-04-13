import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Users,
  FileText,
  ArrowRight,
  Code2,
} from "lucide-react";

const CommunitySection = forwardRef((props, ref) => {
  // Community discussions data
  const communityDiscussions = [
    {
      title: "Best Resources for Learning React Native?",
      author: "Priya S.",
      replies: 24,
      category: "Mobile Development",
      timeAgo: "2 hours ago"
    },
    {
      title: "GATE CSE 2024 Preparation Strategy",
      author: "Amit K.",
      replies: 42,
      category: "GATE",
      timeAgo: "1 day ago"
    },
    {
      title: "How I Got Placed at Google - My Journey",
      author: "Rohit M.",
      replies: 87,
      category: "Placement Stories",
      timeAgo: "3 days ago"
    }
  ];

  return (
    <section id="community" ref={ref} className="py-24 bg-white dark:bg-[#0C0C20] relative overflow-hidden">
      {/* Matrix-style accent elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>
      
      {/* Digital code snippets */}
      <div className="absolute left-10 bottom-10 opacity-5 dark:opacity-10 font-mono text-xs hidden lg:block">
        {"community.connect();"}
        <br />{"discussions.filter(topic => topic.isRelevant);"}
        <br />{"knowledge.share().then(learn);"}
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="bg-indigo-50 dark:bg-indigo-900/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center mb-4 border border-indigo-100 dark:border-indigo-500/20">
              <MessageSquare className="w-4 h-4 mr-1.5" />
              Connect & Share
            </span>
            <span className="relative text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Student <span className="text-[#00AEEF]">Community</span>
              <motion.span
                className="absolute -z-10 inset-0 text-[#00AEEF]/5 dark:text-[#00AEEF]/10 blur-sm"
                animate={{ opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Student Community
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
            Join thousands of students in our active community. Ask questions, share insights, collaborate on projects, and grow together.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Popular Discussions
              </h3>
              <button className="px-4 py-2 bg-[#00AEEF] text-white rounded-lg hover:bg-[#0099d6] transition-colors flex items-center text-sm">
                <MessageSquare className="w-4 h-4 mr-1.5" />
                New Topic
              </button>
            </div>
            
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              {communityDiscussions.map((discussion, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                  className="p-5 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1 hover:text-[#00AEEF] transition-colors">
                        {discussion.title}
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                        <span>By {discussion.author}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500"></span>
                        <span>{discussion.timeAgo}</span>
                      </div>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-full px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                      {discussion.category}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex -space-x-2">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-300 dark:bg-slate-600"></div>
                      ))}
                      {discussion.replies > 3 && (
                        <div className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-[#00AEEF] flex items-center justify-center text-white text-[10px]">
                          +{discussion.replies - 3}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center text-sm">
                      <MessageSquare className="w-4 h-4 mr-1.5 text-slate-400 dark:text-slate-500" />
                      <span className="text-slate-600 dark:text-slate-400">
                        {discussion.replies} replies
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="p-4 text-center border-t border-slate-200 dark:border-slate-700">
              <button className="text-[#00AEEF] hover:underline">
                View All Discussions
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Community Stats */}
            <div className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Community Stats
              </h3>
              
              <div className="space-y-4">
                {[
                  { label: "Active Members", value: "12.5K+", icon: Users, color: "text-blue-500" },
                  { label: "Daily Discussions", value: "250+", icon: MessageSquare, color: "text-purple-500" },
                  { label: "Resources Shared", value: "4.8K+", icon: FileText, color: "text-green-500" }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center mr-4 ${stat.color}`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Top Contributors */}
            <div className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Top Contributors
              </h3>
              
              <div className="space-y-4">
                {[
                  { name: "Mayank Yadav", username: "mayankyadav1711", contributions: 132, avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
                  { name: "Ananya Patel", username: "ananya_p", contributions: 98, avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
                  { name: "Rajat Sharma", username: "rajat_dev", contributions: 87, avatar: "https://randomuser.me/api/portraits/men/67.jpg" }
                ].map((user, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-900 dark:text-white">
                        {user.name}
                        {idx === 0 && (
                          <span className="ml-2 text-xs bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-500 px-1.5 py-0.5 rounded-full">
                            Top Contributor
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        @{user.username}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-[#00AEEF]">
                      {user.contributions} pts
                    </div>
                  </div>
                ))}
                
                <button className="w-full text-center text-[#00AEEF] text-sm hover:underline mt-2">
                  View All Contributors
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Community Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Discussion Forums",
              description: "Engage in meaningful conversations with peers and instructors on various technical topics.",
              icon: MessageSquare,
              color: "bg-gradient-to-br from-blue-500/10 to-blue-600/5 dark:from-blue-500/20 dark:to-blue-600/10"
            },
            {
              title: "Collaborative Projects",
              description: "Find teammates, collaborate on innovative projects, and showcase your work to the community.",
              icon: Code2,
              color: "bg-gradient-to-br from-purple-500/10 to-purple-600/5 dark:from-purple-500/20 dark:to-purple-600/10"
            },
            {
              title: "Mentorship Network",
              description: "Connect with experienced seniors and industry professionals for guidance and career advice.",
              icon: Users,
              color: "bg-gradient-to-br from-green-500/10 to-green-600/5 dark:from-green-500/20 dark:to-green-600/10"
            }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className={`${feature.color} backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-md hover:shadow-lg transition-all`}
            >
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-md flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-[#00AEEF]" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {feature.description}
              </p>
              
              <button className="text-[#00AEEF] font-medium flex items-center text-sm hover:underline">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <Link to="/community">
            <button className="px-6 py-3 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] hover:from-[#0067b5] hover:to-[#009acf] text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center mx-auto">
              <MessageSquare className="w-5 h-5 mr-2" />
              <span>Join Our Community</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
});

export default CommunitySection;