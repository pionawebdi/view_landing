/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Eye, ArrowRight, ShieldAlert, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  return (
    <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-indigo-50/60 via-white to-white">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 -z-10" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* Tag/Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/80 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                신뢰와 문의 전환율을 극대화하는 AI 분석
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans font-extrabold text-[28px] sm:text-[40px] lg:text-[48px] text-slate-900 tracking-tight leading-[1.2] mb-6">
              홈페이지가{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700">
                신뢰와 문의
              </span>
              로<br className="hidden sm:inline" />
              이어지지 않는 이유를 발견하세요
            </h1>

            {/* Sub-headline */}
            <p className="font-sans text-[15px] sm:text-[17px] text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Viewport는{' '}
              <span className="font-semibold text-slate-800">스타트업, 병원, 중소기업, 교육기관</span>
              의 홈페이지를 AI가 분석해 사용자 흐름, 정보 구조, CTA, 모바일 UI, 카피, 신뢰 요소의 문제를 진단하고 개선 우선순위를 리포트로 제공합니다.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
              <button
                onClick={() => scrollToSection('diagnosis-form')}
                className="w-full sm:w-auto group flex items-center justify-center gap-2 font-sans font-semibold text-base bg-indigo-600 text-white px-8 py-3.5 rounded-2xl hover:bg-indigo-700 active:scale-95 transition-all duration-200 shadow-lg shadow-indigo-600/25 cursor-pointer"
              >
                내 홈페이지 진단하기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('report-preview')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 font-sans font-semibold text-base bg-white border border-slate-200/80 text-slate-700 px-8 py-3.5 rounded-2xl hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
              >
                샘플 리포트 보기
              </button>
            </div>

            {/* Auxiliary Description */}
            <p className="font-sans text-xs sm:text-sm text-slate-400 font-medium check-desc">
              ✨ 리디자인 전에, 무엇이 전환을 막고 있는지 먼저 확인해보세요.
            </p>
          </div>

          {/* Right Hero Preview Card Column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md bg-white rounded-3xl border border-slate-100 shadow-2xl relative overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500"
            >
              {/* Card Header Top Accent Gradient Bar */}
              <div className="h-2 bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-400" />

              {/* Card Padding Wrapper */}
              <div className="p-6 sm:p-8">
                {/* Upper row: Titel, Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-1 px-2.5 rounded-lg bg-indigo-50 text-indigo-700 font-sans text-xs font-bold flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      Viewport AI
                    </div>
                    <span className="font-sans font-bold text-slate-800 text-sm">진단 리포트</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    분석 완료
                  </span>
                </div>

                {/* Score Indicator Box */}
                <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 mb-6 border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans font-bold text-xs text-slate-500 tracking-wider">전환 최적화 점수 (CONVERSION SCORE)</span>
                    <span className="font-mono text-base font-bold text-rose-500">48 / 100</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden mb-2">
                    <div className="bg-rose-500 h-full rounded-full transition-all duration-1000" style={{ width: '48%' }} />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-sans font-medium text-rose-600">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    현재 홈페이지는 즉각적인 개선이 필요한 상태입니다.
                  </div>
                </div>

                {/* Diagnostic Items & Badges */}
                <h4 className="font-sans font-bold text-slate-800 text-xs tracking-wider uppercase mb-3">5대 핵심 항목 진단 결과</h4>
                <div className="space-y-3 mb-6">
                  {/* Diagnostic 1 */}
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-50">
                    <span className="font-sans text-xs sm:text-sm font-medium text-slate-600">첫 화면 메시지 명확성</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-100">
                      <AlertCircle className="w-3 h-3" /> 개선 필요
                    </span>
                  </div>

                  {/* Diagnostic 2 */}
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-50">
                    <span className="font-sans text-xs sm:text-sm font-medium text-slate-600">CTA 접근성 (구매/문의 버튼)</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-red-50 text-red-700 border border-red-100">
                      <AlertCircle className="w-3 h-3" /> 보완 심각
                    </span>
                  </div>

                  {/* Diagnostic 3 */}
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-50">
                    <span className="font-sans text-xs sm:text-sm font-medium text-slate-600">모바일 전환 흐름</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-100">
                      <AlertCircle className="w-3 h-3" /> 보완 필요
                    </span>
                  </div>

                  {/* Diagnostic 4 */}
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-50">
                    <span className="font-sans text-xs sm:text-sm font-medium text-slate-600">신뢰 요소 (고객사/후기)</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-red-50 text-red-700 border border-red-100">
                      <AlertCircle className="w-3 h-3" /> 전술 부족
                    </span>
                  </div>

                  {/* Diagnostic 5 */}
                  <div className="flex items-center justify-between py-1.5">
                    <span className="font-sans text-xs sm:text-sm font-medium text-slate-600">개선 우선순위 도출</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                      <CheckCircle2 className="w-3 h-3" /> 5개 도출됨
                    </span>
                  </div>
                </div>

                {/* AI Insight Box */}
                <div className="bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100/50">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-ping" />
                    <span className="font-sans font-extrabold text-[12px] text-indigo-900 tracking-wider">AI DIAGNOSTIC INSIGHT</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-indigo-950 font-medium leading-relaxed">
                    “메인 CTA(문의/신청) 버튼 노출량이 경쟁사 대비 평균 42% 가량 낮고, 모바일 뷰포트 영역 내 미설정으로 인해 이탈률이 중복 상승하고 있습니다.”
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
