// components/sections/PlacementSection.jsx
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";

const PlacementSection = forwardRef((props, ref) => {
  // Animation variants
  const fadeInRight = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  // Upcoming placement events
  const placementEvents = [
    {
      company: "Microsoft",
      date: "May 5, 2025",
      roles: ["Software Engineer", "Product Manager"],
      eligibility: "7+ CGPA, CSE/IT Students",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    },
    {
      company: "Google",
      date: "May 15, 2025",
      roles: ["SDE", "Data Scientist", "UX Designer"],
      eligibility: "8+ CGPA, All Engineering Students",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",
    },
    {
      company: "Amazon",
      date: "May 22, 2025",
      roles: ["Software Development", "DevOps"],
      eligibility: "7.5+ CGPA, CSE/IT/ECE Students",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    },
  ];

  return (
    <section
      id="placement"
      ref={ref}
      className="py-24 bg-slate-50 dark:bg-[#080816] relative overflow-hidden"
    >
      {/* Matrix-style accent elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#00AEEF]/10 to-transparent dark:from-[#00AEEF]/5 dark:to-transparent rounded-tl-3xl -z-10"></div>
      <div className="absolute left-0 top-0 w-1/4 h-1/2 bg-gradient-to-br from-slate-100 to-slate-50/0 dark:from-slate-800/10 dark:to-transparent rounded-br-3xl -z-10"></div>

      {/* Digital code snippets */}
      <div className="absolute left-10 top-10 opacity-5 dark:opacity-10 font-mono text-xs hidden lg:block">
        {"const placementEvents = await fetchEvents();"}
        <br />
        {"placementEvents.sort((a, b) => new Date(a) - new Date(b));"}
        <br />
        {"return placementEvents.map(renderCalendarItem);"}
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-col">
              <span className="bg-blue-50 dark:bg-[#00AEEF]/5 text-[#00AEEF] text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center self-start mb-4 border border-blue-100 dark:border-[#00AEEF]/20">
                <Calendar className="w-4 h-4 mr-1.5" />
                Never Miss An Opportunity
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Placement <span className="text-[#00AEEF]">Calendar</span>
              </h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Stay ahead in your placement journey with our comprehensive
              calendar tracking upcoming campus drives, application deadlines,
              and interview schedules.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Real-time notifications for upcoming events",
                "Filter companies by branch and eligibility criteria",
                "Detailed company profiles and job descriptions",
                "Interview experience from successful candidates",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            <Link to="/placements">
              <button className="px-6 py-3 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] hover:from-[#0067b5] hover:to-[#009acf] text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>View Full Calendar</span>
              </button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700"
          >
            {/* Top bar with controls */}
            <div className="bg-gradient-to-r from-[#0067b5] to-[#00AEEF] text-white p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">Placement Schedule</h3>
                <div className="flex items-center gap-4">
                  <button className="p-1.5 rounded-full hover:bg-white/20 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="font-medium">May 2025</span>
                  <button className="p-1.5 rounded-full hover:bg-white/20 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Calendar grid */}
            <div className="p-4 bg-white dark:bg-slate-800/90">
              {/* Days of week */}
              <div className="grid grid-cols-7 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day, idx) => (
                    <div
                      key={idx}
                      className="text-center text-slate-500 dark:text-slate-400 text-sm py-2 font-medium"
                    >
                      {day}
                    </div>
                  )
                )}
              </div>

              {/* Calendar dates */}
              <div className="grid grid-cols-7 gap-1">
                {/* Previous month days (greyed out) */}
                {[28, 29, 30].map((date, idx) => (
                  <div key={`prev-${idx}`} className="p-1">
                    <div className="h-14 rounded-lg flex items-center justify-center text-slate-400 dark:text-slate-600">
                      {date}
                    </div>
                  </div>
                ))}

                {/* Current month days */}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => {
                  // Check if date has an event
                  const hasEvent = placementEvents.some((event) => {
                    const eventDate = new Date(event.date);
                    return eventDate.getDate() === date;
                  });

                  return (
                    <div key={`current-${date}`} className="p-1">
                      <div
                        className={`relative h-14 rounded-lg flex flex-col items-center justify-start p-1 ${
                          hasEvent
                            ? "bg-blue-50 dark:bg-[#00AEEF]/10 border border-blue-200 dark:border-[#00AEEF]/30"
                            : "hover:bg-slate-50 dark:hover:bg-slate-700/30"
                        } transition-colors cursor-pointer group`}
                      >
                        <span
                          className={`text-sm ${
                            hasEvent
                              ? "font-medium text-[#00AEEF]"
                              : "text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          {date}
                        </span>

                        {hasEvent && (
                          <motion.div
                            className="mt-1 w-5 h-1 bg-[#00AEEF] rounded-full"
                            animate={{ opacity: [1, 0.6, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          ></motion.div>
                        )}

                        {/* Tooltip on hover */}
                        {hasEvent && (
                          <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 p-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            {placementEvents
                              .filter((event) => {
                                const eventDate = new Date(event.date);
                                return eventDate.getDate() === date;
                              })
                              .map((event, idx) => (
                                <div key={idx} className="mb-2 last:mb-0">
                                  <div className="flex items-center">
                                    <div className="w-6 h-6 rounded bg-white dark:bg-slate-700 p-1 mr-2">
                                      <img
                                        src={event.logo}
                                        alt={event.company}
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                    <span className="text-xs font-medium text-slate-900 dark:text-white">
                                      {event.company}
                                    </span>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Upcoming events list */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <h4 className="font-medium text-slate-900 dark:text-white mb-3 flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-[#00AEEF]" />
                Upcoming Events
              </h4>

              <div className="space-y-3">
                {placementEvents.map((event, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    className="p-3 bg-slate-50 dark:bg-slate-700/30 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-lg p-2 flex items-center justify-center">
                        <img
                          src={event.logo}
                          alt={event.company}
                          className="max-w-full max-h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h5 className="font-medium text-slate-900 dark:text-white">
                            {event.company}
                          </h5>
                          <span className="text-xs text-[#00AEEF]">
                            {event.date}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {event.eligibility}
                        </p>
                      </div>
                    </div>

                    <div className="mt-2 flex gap-2 flex-wrap">
                      {event.roles.map((role, i) => (
                        <span
                          key={i}
                          className="inline-block px-2 py-1 bg-white dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 rounded"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <button className="text-sm text-[#00AEEF] font-medium hover:underline">
                  View All Upcoming Events
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default PlacementSection;