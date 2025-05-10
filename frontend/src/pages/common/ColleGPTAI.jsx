import React from "react";

const ColleGPTAI = () => {
  return (
    <div className="h-screen w-full overflow-x-hidden bg-gradient-to-b from-black via-purple-900/20 to-black text-white flex flex-col items-center justify-between py-20 relative">
      {/* 3D Model */}
      <div className="absolute inset-0 z-0">
        <model-viewer
          src="/black_hole.glb"
          auto-rotate
          camera-controls
          style={{ width: '100%', height: '100%' }}
          environment-image="https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr"
          auto-rotate-delay="0"
          rotation-per-second="30deg"
          environment-intensity="4"
          shadow-intensity="1"
          min-camera-orbit="auto auto 50%"
          max-camera-orbit="auto auto 150%"
          disable-tap
          interaction-prompt="none"
          loading="eager"
          reveal="interaction"
          ar-status="not-presenting"
          camera-target="0m 0m 0m"
          field-of-view="30deg"
          interpolation-decay="200"
          min-field-of-view="10deg"
          max-field-of-view="90deg"
          skybox-image="https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr"
          shadow-softness="1"
          animation-name="Animation"
          animation-crossfade-duration="0.5"
        />
      </div>

      {/* Top Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-4 font-orbitron text-gray-400/80 animate-pulse">
          COLLEGPT AI
        </h2>
     
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 text-center px-4 space-y-8">
        <div className="space-y-6">
          <p className="text-2xl md:text-3xl text-gray-400/80 max-w-2xl mx-auto drop-shadow-lg font-light font-orbitron tracking-wide">
            Your AI-powered academic companion. Transforming the future of learning.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-6 text-lg text-gray-500/50 font-orbitron tracking-wider">
          <span className="hover:text-blue-400 transition-colors duration-300">Powered by Advanced AI</span>
          <span>•</span>
          <span className="hover:text-purple-400 transition-colors duration-300">Revolutionizing Education</span>
          <span>•</span>
          <span className="hover:text-pink-400 transition-colors duration-300">Coming Soon</span>
        </div>
      </div>
    </div>
  );
};

export default ColleGPTAI;