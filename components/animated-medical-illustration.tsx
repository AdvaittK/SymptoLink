"use client";

import React from "react";

export default function AnimatedMedicalIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      {/* SVG Container with adjusted viewBox for better fit in oval container */}
      <svg 
        className="w-full h-full" 
        viewBox="0 0 850 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          filter: "drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15))",
          maxHeight: "450px",
          padding: "10px" // Add some padding to prevent edges from touching container
        }}
      >
        {/* Background Elements */}
        <defs>
          <radialGradient id="bgGradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#e2f8f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="heartbeatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>

        {/* Adjusted radial background to be slightly smaller */}
        <circle cx="425" cy="300" r="380" fill="url(#bgGradient)" />

        {/* Doctor figure - with adjusted positioning */}
        <g className="doctor-figure" transform="translate(25, 0)">
          <circle cx="260" cy="180" r="60" fill="#0d9488" opacity="0.9" />
          <rect x="230" y="240" width="60" height="150" rx="30" fill="#0d9488" />
          <rect x="220" y="270" width="80" height="120" rx="10" fill="#0d9488" opacity="0.8" />
          <rect x="230" y="390" width="20" height="80" rx="10" fill="#0d9488" />
          <rect x="270" y="390" width="20" height="80" rx="10" fill="#0d9488" />
        </g>

        {/* Patient figure - with adjusted positioning */}
        <g className="patient-figure" transform="translate(-25, 0)">
          <circle cx="550" cy="200" r="50" fill="#0ea5e9" opacity="0.8" />
          <rect x="525" y="250" width="50" height="120" rx="25" fill="#0ea5e9" />
          <rect x="515" y="280" width="70" height="90" rx="10" fill="#0ea5e9" opacity="0.7" />
          <rect x="525" y="370" width="15" height="70" rx="7" fill="#0ea5e9" />
          <rect x="560" y="370" width="15" height="70" rx="7" fill="#0ea5e9" />
        </g>

        {/* Heartbeat line adjusted for the new container */}
        <path 
          className="heartbeat-line"
          d="M220 300 C270 300, 290 200, 320 300 C350 400, 370 250, 400 300 C430 350, 460 150, 490 300 C520 450, 550 100, 580 300 C610 500, 640 200, 670 300" 
          stroke="url(#heartbeatGradient)" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          style={{
            animation: "dash 5s linear forwards infinite"
          }}
        />

        {/* Medical cross symbol moved slightly up */}
        <g className="medical-cross" transform="translate(425, 120)">
          <rect 
            x="-15" 
            y="-45" 
            width="30" 
            height="90" 
            rx="8" 
            fill="#0d9488" 
            className="animate-pulse"
          />
          <rect 
            x="-45" 
            y="-15" 
            width="90" 
            height="30" 
            rx="8" 
            fill="#0d9488" 
            className="animate-pulse"
          />
        </g>

        {/* Digital health elements moved slightly */}
        <g className="digital-health" transform="translate(20, 0)">
          {/* Phone/device */}
          <rect x="340" y="350" width="120" height="200" rx="20" fill="#f8fafc" stroke="#0d9488" strokeWidth="5" />
          <rect x="360" y="380" width="80" height="140" rx="5" fill="#e2f8f6" />
          
          {/* App interface elements */}
          <rect x="370" y="400" width="60" height="10" rx="5" fill="#0d9488" opacity="0.7" />
          <rect x="370" y="420" width="40" height="10" rx="5" fill="#0d9488" opacity="0.5" />
          
          {/* Circular button */}
          <circle 
            cx="400" 
            cy="480" 
            r="20" 
            fill="#0d9488" 
            className="animate-ping" 
            style={{ animationDuration: "3s", opacity: "0.3" }} 
          />
          <circle cx="400" cy="480" r="15" fill="#0d9488" />
        </g>

        {/* Data flow lines between doctor and patient adjusted */}
        <g className="data-connections" transform="translate(20, 0)">
          {[1, 2, 3, 4, 5].map((i) => (
            <circle 
              key={i}
              className={`data-dot-${i}`}
              cx={320 + (i * 40)} 
              cy="250"
              r="6" 
              fill="#0ea5e9"
              style={{
                animation: `moveDot ${2 + (i * 0.5)}s infinite linear`,
                opacity: "0.8"
              }}
            />
          ))}
        </g>

        {/* Health metrics visualization adjusted position */}
        <g className="health-metrics" transform="translate(425, 250)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1="0"
              y1="0"
              x2={Math.cos(angle * Math.PI / 180) * 70}
              y2={Math.sin(angle * Math.PI / 180) * 70}
              stroke="#0d9488"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.6"
              style={{
                animation: `pulseLine ${1 + (i * 0.2)}s infinite alternate`,
                transformOrigin: "center"
              }}
            />
          ))}
        </g>

        {/* Floating health icons with adjusted positions */}
        <g className="floating-icons">
          {/* Heart icon */}
          <path 
            d="M170 360 C170 320, 120 320, 120 360 C120 400, 170 430, 170 430 C170 430, 220 400, 220 360 C220 320, 170 320, 170 360 Z" 
            fill="#ef4444" 
            opacity="0.7"
            style={{
              animation: "float 6s ease-in-out infinite",
              transformOrigin: "center"
            }}
          />

          {/* Brain icon - moved right */}
          <g style={{
            animation: "float 5s ease-in-out infinite",
            animationDelay: "1s",
            transformOrigin: "center"
          }}>
            <circle cx="680" cy="360" r="35" fill="#8b5cf6" opacity="0.7" />
            <path d="M660 360 Q680 330, 700 360 Q680 390, 660 360 Z" fill="#f8fafc" opacity="0.7" />
          </g>

          {/* Pill icon - moved left */}
          <g style={{
            animation: "float 7s ease-in-out infinite",
            animationDelay: "0.5s",
            transformOrigin: "center"
          }}>
            <rect 
              x="100" 
              y="180" 
              width="60" 
              height="30" 
              rx="15" 
              transform="rotate(-30, 100, 180)" 
              fill="#f59e0b" 
              opacity="0.7" 
            />
            <rect 
              x="115" 
              y="188" 
              width="30" 
              height="30" 
              rx="15" 
              transform="rotate(-30, 115, 188)" 
              fill="#fef3c7" 
              opacity="0.9" 
            />
          </g>

          {/* Stethoscope icon - moved right */}
          <g style={{
            animation: "float 8s ease-in-out infinite",
            animationDelay: "1.5s",
            transformOrigin: "center"
          }}>
            <circle cx="680" cy="180" r="20" fill="#10b981" opacity="0.7" />
            <path d="M680 200 L680 250 Q710 250, 710 220" stroke="#10b981" strokeWidth="6" fill="none" opacity="0.7" />
          </g>
        </g>

        {/* Text label positioned slightly lower */}
        <g className="text-labels">
          <text x="425" y="540" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#0f766e">
            SymptoLink: Your Health Assistant
          </text>
        </g>

        {/* Global CSS animation styles */}
        <style jsx>{`
          @keyframes dash {
            from {
              stroke-dashoffset: 1000;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
          @keyframes pulseLine {
            from {
              opacity: 0.3;
              transform: scaleY(0.8);
            }
            to {
              opacity: 0.7;
              transform: scaleY(1.2);
            }
          }
          @keyframes moveDot {
            0% {
              transform: translateX(-150px) translateY(0);
              opacity: 0.2;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateX(150px) translateY(0);
              opacity: 0.2;
            }
          }
        `}</style>
      </svg>
    </div>
  );
}