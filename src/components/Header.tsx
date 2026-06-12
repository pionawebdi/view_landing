/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Eye, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: '서비스 소개', id: 'solution' },
    { name: '진단 항목', id: 'problem' },
    { name: '케이스', id: 'cases' },
    { name: '리포트 예시', id: 'report-preview' },
    { name: '요금제', id: 'pricing' }
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-slate-200/60'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 text-white p-1.5 sm:p-2 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-sans font-bold text-lg sm:text-2xl tracking-tight text-slate-900">
                Viewport
                <span className="text-indigo-600 font-extrabold font-sans">.</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-sans text-[14px] lg:text-[15px] font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('diagnosis-form')}
              className="group flex items-center gap-1.5 font-sans text-[14px] font-semibold bg-slate-900 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:bg-indigo-600 transition-all duration-300 shadow-md hover:shadow-indigo-600/10 cursor-pointer"
            >
              진단 시작하기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-indigo-600 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-xl py-4 px-6 animate-fadeIn transition-all">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left font-sans text-[15px] font-medium text-slate-700 py-2 hover:text-indigo-600 border-b border-slate-100 last:border-0 transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('diagnosis-form')}
              className="w-full mt-2 flex items-center justify-center gap-2 font-sans text-sm font-semibold bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-all shadow-md cursor-pointer"
            >
              진단 시작하기
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
