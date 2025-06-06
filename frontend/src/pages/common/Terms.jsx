import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center py-1.5 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4"
            >
              <FileText className="mr-1.5 w-4 h-4" />
              Legal Information
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Please read these terms carefully before using our platform.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-900 dark:text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8"
            >
              <p className="mb-6 text-xl font-semibold">
                Welcome to ColleGPT!
              </p>

              <p className="mb-6">
                These terms and conditions outline the rules and regulations for the use of ColleGPT's Website, located at{" "}
                <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
                  https://www.collegpt.com/
                </Link>
              </p>

              <p className="mb-8">
                By accessing this website we assume you accept these terms and conditions. Do not continue to use ColleGPT if you do not agree to take all of the terms and conditions stated on this page.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cookies</h2>
              <p className="mb-6">
                We employ the use of cookies. By accessing ColleGPT, you agreed to use cookies in agreement with the ColleGPT's Privacy Policy.
              </p>
              <p className="mb-8">
                Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">License</h2>
              <p className="mb-4">
                Unless otherwise stated, ColleGPT and/or its licensors own the intellectual property rights for all material on ColleGPT. All intellectual property rights are reserved. You may access this from ColleGPT for your own personal use subjected to restrictions set in these terms and conditions.
              </p>
              <ul className="list-disc list-inside mb-8 space-y-2">
                <li>Republish material from ColleGPT</li>
                <li>Sell, rent or sub-license material from ColleGPT</li>
                <li>Reproduce, duplicate or copy material from ColleGPT</li>
                <li>Redistribute content from ColleGPT</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Hyperlinking to our Content</h2>
              <p className="mb-4">The following organizations may link to our Website without prior written approval:</p>
              <ul className="list-disc list-inside mb-8 space-y-2">
                <li>Government agencies</li>
                <li>Search engines</li>
                <li>News organizations</li>
                <li>Online directory distributors</li>
                <li>System wide Accredited Businesses</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Content Liability</h2>
              <p className="mb-8">
                We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Reservation of Rights</h2>
              <p className="mb-8">
                We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Disclaimer</h2>
              <p className="mb-4">
                To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
              </p>
              <ul className="list-disc list-inside mb-8 space-y-2">
                <li>limit or exclude our or your liability for death or personal injury</li>
                <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
                <li>limit any of our or your liabilities in any way that is not permitted under applicable law</li>
                <li>exclude any of our or your liabilities that may not be excluded under applicable law</li>
              </ul>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                These terms and conditions are subject to change without notice.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms; 