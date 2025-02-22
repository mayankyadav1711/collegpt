// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   PhoneCall, 
//   MessageSquare, 
//   Calendar, 
//   BarChart, 
//   Users, 
//   Globe,
//   ChevronRight,
//   Mail,
//   Phone
// } from 'lucide-react';

// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 }
// };

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
//       {/* Hero Section */}
//       <motion.header 
//         className="relative h-screen flex items-center justify-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
//         <div className="container mx-auto px-4 z-10">
//           <motion.div 
//             className="text-center"
//             variants={fadeIn}
//             initial="initial"
//             animate="animate"
//           >
//             <h1 className="text-6xl font-bold mb-6">Welcome to Bolofy</h1>
//             <p className="text-2xl mb-8">AI-Powered Receptionist & Web Chatbots</p>
//             <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg transition-all">
//               Get Started
//             </button>
//           </motion.div>
//         </div>
//       </motion.header>

//       {/* Problem Section */}
//       <motion.section 
//         className="py-20 bg-white/10 backdrop-blur-md"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-12 text-center">The Challenge</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <PhoneCall className="w-12 h-12 mb-4" />,
//                 title: "Missed Opportunities",
//                 description: "Small business owners lose 30% of business due to missed calls, resulting in ~20% revenue loss."
//               },
//               {
//                 icon: <MessageSquare className="w-12 h-12 mb-4" />,
//                 title: "Constant Interruptions",
//                 description: "Business owners spend their entire day on the phone, repeatedly sharing the same information."
//               },
//               {
//                 icon: <Users className="w-12 h-12 mb-4" />,
//                 title: "Staffing Challenges",
//                 description: "Finding and retaining dedicated receptionists is challenging and costly."
//               }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
//                 variants={fadeIn}
//                 initial="initial"
//                 whileInView="animate"
//                 viewport={{ once: true }}
//               >
//                 {item.icon}
//                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                 <p>{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Solution Section */}
//       <motion.section 
//         className="py-20"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-12 text-center">Our Solution</h2>
//           <div className="grid md:grid-cols-2 gap-12">
//             <motion.div 
//               className="bg-white/5 p-8 rounded-xl backdrop-blur-sm"
//               variants={fadeIn}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//             >
//               <h3 className="text-2xl font-semibold mb-6">AI Receptionist Features</h3>
//               <ul className="space-y-4">
//                 {[
//                   "Automated call answering",
//                   "Information distribution",
//                   "Calendar appointment scheduling",
//                   "SMS & WhatsApp integration",
//                   "Feedback collection",
//                   "Call insights and analytics"
//                 ].map((feature, index) => (
//                   <li key={index} className="flex items-center">
//                     <ChevronRight className="w-5 h-5 mr-2 text-blue-400" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//             <div className="relative">
//               <img 
//                 src="/api/placeholder/600/400" 
//                 alt="AI Receptionist Dashboard" 
//                 className="rounded-xl shadow-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Pricing Section */}
//       <motion.section 
//         className="py-20 bg-white/10 backdrop-blur-md"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-12 text-center">Pricing Plans</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Essential",
//                 price: "₹3,000",
//                 features: [
//                   "1 Agent",
//                   "600 free minutes/month",
//                   "Basic IVR features",
//                   "SMS integration",
//                   "WhatsApp integration"
//                 ]
//               },
//               {
//                 name: "Professional",
//                 price: "₹5,500",
//                 features: [
//                   "1 Agent",
//                   "2000 free minutes/month",
//                   "Advanced features",
//                   "Sentiment analysis",
//                   "CRM integration",
//                   "Call recordings"
//                 ]
//               },
//               {
//                 name: "Enterprise",
//                 price: "Custom",
//                 features: [
//                   "Custom agent count",
//                   "Flexible minutes",
//                   "All features included",
//                   "Priority support",
//                   "Custom integration"
//                 ]
//               }
//             ].map((plan, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white/5 p-8 rounded-xl backdrop-blur-sm"
//                 variants={fadeIn}
//                 initial="initial"
//                 whileInView="animate"
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
//                 <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm">/month</span></p>
//                 <ul className="space-y-3 mb-8">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center">
//                       <ChevronRight className="w-4 h-4 mr-2 text-blue-400" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-all">
//                   Get Started
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Contact Section */}
//       <motion.section 
//         className="py-20"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
//           <div className="flex justify-center space-x-8">
//             <a href="mailto:sp@bolofy.com" className="flex items-center">
//               <Mail className="w-6 h-6 mr-2" />
//               sp@bolofy.com
//             </a>
//             <a href="tel:9035163809" className="flex items-center">
//               <Phone className="w-6 h-6 mr-2" />
//               +91 9035163809
//             </a>
//           </div>
//         </div>
//       </motion.section>

//       {/* Footer */}
//       <footer className="py-8 bg-black/30 backdrop-blur-sm">
//         <div className="container mx-auto px-4 text-center">
//           <p>&copy; 2024 Bolofy. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;