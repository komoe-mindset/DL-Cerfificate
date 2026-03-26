/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Printer } from 'lucide-react';

const LotusIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Petals - Pink/Purple */}
    {/* Outer Petals */}
    <path d="M50 75 Q 20 75 15 50 Q 15 25 50 35 Q 85 25 85 50 Q 80 75 50 75" stroke="#9333ea" strokeWidth="2" fill="none" />
    {/* Inner Petals */}
    <path d="M50 75 Q 30 75 25 50 Q 25 30 50 40 Q 75 30 75 50 Q 70 75 50 75" stroke="#db2777" strokeWidth="2" fill="none" />
    {/* Central Petal */}
    <path d="M50 75 Q 40 75 40 50 Q 40 20 50 20 Q 60 20 60 50 Q 60 75 50 75" stroke="#db2777" strokeWidth="2" fill="none" />
    
    {/* Green Base Leaves */}
    <path d="M50 75 Q 35 75 30 85 Q 40 90 50 85 Q 60 90 70 85 Q 65 75 50 75" fill="#22c55e" />
    <path d="M30 85 Q 20 80 15 70 Q 25 70 30 85" fill="#22c55e" />
    <path d="M70 85 Q 80 80 85 70 Q 75 70 70 85" fill="#22c55e" />

    {/* Blue Base Lines */}
    <path d="M30 92 H 70" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
    <path d="M35 95 H 65" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 98 H 60" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const GoldSeal = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#eab308" />
        <stop offset="100%" stopColor="#a16207" />
      </linearGradient>
    </defs>
    
    {/* Ribbons */}
    <path d="M 35 70 L 25 98 L 45 88 Z" fill="url(#goldGrad)" />
    <path d="M 65 70 L 75 98 L 55 88 Z" fill="url(#goldGrad)" />
    
    {/* Serrated Edge */}
    <path d="M 50 15 L 53 18 L 57 16 L 59 20 L 64 19 L 65 23 L 70 23 L 70 28 L 75 29 L 74 34 L 78 36 L 76 41 L 80 44 L 77 48 L 80 52 L 77 56 L 80 60 L 76 63 L 78 68 L 74 70 L 75 75 L 70 76 L 70 81 L 65 81 L 64 85 L 59 84 L 57 88 L 53 86 L 50 89 L 47 86 L 43 88 L 41 84 L 36 85 L 35 81 L 30 81 L 30 76 L 25 75 L 26 70 L 22 68 L 24 63 L 20 60 L 23 56 L 20 52 L 23 48 L 20 44 L 24 41 L 22 36 L 26 34 L 25 29 L 30 28 L 30 23 L 35 23 L 36 19 L 41 20 L 43 16 L 47 18 Z" fill="#eab308" stroke="#a16207" strokeWidth="1" />
    
    {/* Inner Circle */}
    <circle cx="50" cy="52" r="28" fill="url(#goldGrad)" stroke="#a16207" strokeWidth="1" />
    <circle cx="50" cy="52" r="24" fill="none" stroke="#fef08a" strokeWidth="0.5" strokeDasharray="2 1" />
  </svg>
);

const TopDecoration = () => (
  <div className="flex justify-center items-center gap-4 mb-4 px-32">
    <div className="flex flex-col gap-1 w-full">
      <div className="h-0.5 w-full bg-[#b4975a]"></div>
      <div className="h-0.5 w-full bg-[#b4975a]"></div>
    </div>
    <div className="w-6 h-6 border-2 border-[#b4975a] transform rotate-45 flex-shrink-0 flex items-center justify-center">
      <div className="w-3 h-3 border border-[#b4975a] flex items-center justify-center">
        <div className="w-1 h-1 bg-[#b4975a]"></div>
      </div>
    </div>
    <div className="flex flex-col gap-1 w-full">
      <div className="h-0.5 w-full bg-[#b4975a]"></div>
      <div className="h-0.5 w-full bg-[#b4975a]"></div>
    </div>
  </div>
);

export default function App() {
  const [name, setName] = useState('Ma Nilar Myint');
  const [className, setClassName] = useState('“အခြေခံဝိပဿနာကို သုတ္တန်နည်းဖြင့် ချဉ်းကပ်ခြင်းသင်တန်း”');
  const [date, setDate] = useState("4th January – 5th April'2026");

  const handlePrint = () => {
    window.focus();
    window.print();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row font-sans">
      {/* Left Panel: Controls */}
      <div className="no-print w-full md:w-1/3 lg:w-1/4 bg-white p-6 shadow-lg z-10 flex flex-col h-screen overflow-y-auto border-r border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Certificate Setup</h2>
        
        <div className="space-y-5 flex-grow">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name of Participant</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title of Class</label>
            <textarea 
              rows={3}
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input 
              type="text" 
              value={date} 
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="pt-6 border-t border-gray-200 mt-6">
            <p className="text-sm text-gray-500 mb-4">
              Note: Make sure your printer settings are set to <strong>Landscape</strong> and <strong>Background Graphics</strong> are turned on.
            </p>
            <button 
              onClick={handlePrint}
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg flex justify-center items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Printer className="h-5 w-5" />
              Print to PDF
            </button>
            <p className="text-[10px] text-gray-400 mt-2 text-center">
              If the print dialog doesn't open, please click the "Open in new tab" icon in the top right of the preview.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel: Live Preview */}
      <div id="preview-container" className="w-full md:w-2/3 lg:w-3/4 bg-gray-200 flex justify-center items-center p-8 overflow-auto min-h-screen">
        
        {/* Scaling wrapper for small screens */}
        <div className="transform scale-[0.4] sm:scale-[0.5] md:scale-[0.6] lg:scale-[0.7] xl:scale-[0.8] 2xl:scale-100 origin-center print:scale-100 print:origin-top-left">
          
          {/* THE CERTIFICATE ITSELF */}
          <div id="certificate" className="certificate-wrapper print-area text-center">
            
            {/* Borders */}
            <div className="cert-border-outer"></div>
            <div className="cert-border-inner"></div>
            <div className="corner-diamond diamond-tl"></div>
            <div className="corner-diamond diamond-tr"></div>
            <div className="corner-diamond diamond-bl"></div>
            <div className="corner-diamond diamond-br"></div>

            {/* Top Header Section */}
            <div className="relative mt-8 mb-6">
              {/* Left Lotus */}
              <div className="absolute left-12 top-0 w-28 h-28">
                <LotusIcon />
              </div>

              <TopDecoration />

              {/* Title */}
              <h1 className="text-5xl font-bold tracking-[0.2em] text-gray-900 leading-tight">
                CERTIFICATE OF<br />COMPLETION
              </h1>

              {/* Right Lotus */}
              <div className="absolute right-12 top-0 w-28 h-28">
                <LotusIcon />
              </div>
            </div>

            {/* Content Section */}
            <div className="mt-12 flex flex-col items-center justify-center space-y-6">
              <p className="text-xl font-bold italic text-gray-800">This is to certify that</p>
              
              <h2 className="cert-name">{name || 'Name Here'}</h2>
              
              <p className="text-lg text-gray-600">has Successfully Completed Training in</p>
              
              <p className="myanmar-text text-gray-900 max-w-3xl text-center leading-relaxed">
                {className || 'Class Title Here'}
              </p>
              
              <p className="text-lg text-gray-600 mt-4">
                {date || 'Date Here'}
              </p>
            </div>

            {/* Footer Section (Signatures & Seal) */}
            <div className="absolute bottom-16 left-0 w-full px-24 flex justify-between items-end">
              
              {/* Left Signature */}
              <div className="text-center w-72">
                <div className="border-b-2 border-gray-400 mb-2"></div>
                <p className="font-bold text-xl text-gray-900">Mr. Zin Yaw</p>
                <p className="text-sm text-gray-700 font-bold uppercase tracking-wider">Patron</p>
                <p className="text-sm text-gray-700 font-bold">Yangon Dhammalan</p>
              </div>

              {/* Center Seal */}
              <div className="relative -mb-4 z-10 w-40 h-40 flex justify-center items-center">
                <GoldSeal />
              </div>

              {/* Right Signature */}
              <div className="text-center w-72">
                <div className="border-b-2 border-gray-400 mb-2"></div>
                <p className="font-bold text-xl text-gray-900">Dr Kyin San</p>
                <p className="text-sm text-gray-700 font-bold uppercase tracking-wider">Education Patron</p>
                <p className="text-sm text-gray-700 font-bold">Yangon Dhammalan</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
