import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const Privacy = () => {
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
              <Shield className="mr-1.5 w-4 h-4" />
              Privacy & Security
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your privacy is our priority. Learn how we protect and manage your data.
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
              <p className="mb-6">
                This privacy policy sets out how our website uses and protects any information that you give us when you use this website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
              <p className="mb-4">We may collect the following information:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Your name and contact information</li>
                <li>Demographic information</li>
                <li>Other information relevant to customer surveys and/or offers</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Use the Information</h2>
              <p className="mb-4">
                We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Internal record keeping</li>
                <li>Improving our products and services</li>
                <li>Sending promotional emails about new products, special offers, or other information which we think you may find interesting</li>
                <li>From time to time, we may also use your information to contact you for market research purposes</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Security</h2>
              <p className="mb-6">
                We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cookies</h2>
              <p className="mb-4">
                A cookie is a small file that asks permission to be placed on your computer's hard drive. Once you agree, the file is added, and the cookie helps analyze web traffic or lets you know when you visit a particular site.
              </p>
              <p className="mb-6">
                Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Links to Other Websites</h2>
              <p className="mb-6">
                Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Controlling Your Personal Information</h2>
              <p className="mb-4">You may choose to restrict the collection or use of your personal information in the following ways:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us</li>
                <li>We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so</li>
                <li>You may request details of personal information which we hold about you</li>
                <li>If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible</li>
              </ul>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                This privacy policy is subject to change without notice.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy; 