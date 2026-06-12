/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Compass, MessageSquareCode, Target, Smartphone, ShieldCheck, FileSpreadsheet, Layers, Trophy } from 'lucide-react';

export default function Solution() {
  const diagnosticDimensions = [
    {
      icon: <MessageSquareCode className="w-5 h-5 text-indigo-600" />,
      title: '첫 화면 메시지',
      desc: '방문자가 접속 시 3초 이내에 주요 가치를 온전히 납득할 수 있는지 어조와 메시지를 채점합니다.'
    },
    {
      icon: <Compass className="w-5 h-5 text-indigo-600" />,
      title: '사용자 흐름',
      desc: '사용자가 진입점부터 이탈 없이 목표 리드 전환까지 매끄럽게 가고 있는지 방해 요소를 정밀 추적합니다.'
    },
    {
      icon: <Layers className="w-5 h-5 text-indigo-600" />,
      title: '정보 구조',
      desc: '상단의 글로벌 내비게이션(GNB)과 각 섹션 레이아웃이 유기적이고 논리적인지 평가합니다.'
    },
    {
      icon: <Target className="w-5 h-5 text-indigo-600" />,
      title: 'CTA 위치와 문구',
      desc: '단순 "Contact" 같은 모호한 문구를 "예산 맞춤 견적 신청하기" 등 성과 중심 트리거로 재구성합니다.'
    },
    {
      icon: <Smartphone className="w-5 h-5 text-indigo-600" />,
      title: '모바일 사용성',
      desc: '모바일 환경에서 엄지손가락 터치가 편리한지, 플로팅 메뉴는 적당한 고정 비율인지 진단합니다.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      title: '신뢰 요소',
      desc: '사용자의 불안을 해소하는 소셜 프루프(Social Proof), 연혁, 전문 자격 등이 적재적소에 있는지 확인합니다.'
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-indigo-600" />,
      title: 'UX 카피위계',
      desc: '어려운 일방향 인공지능 용어 대신 직관적인 행동 유도 단어를 체계적으로 설계했는지 진정성을 봅니다.'
    },
    {
      icon: <Trophy className="w-5 h-5 text-indigo-600" />,
      title: '시각적 위계',
      desc: '색상대비, 글꼴 크기, 여백 배치를 조율해 중요한 텍스트가 먼저 읽히도록 디자이너 관점 점검을 진행합니다.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-indigo-600" />,
      title: '개선 우선순위',
      desc: '가장 적은 리소스로 가장 높은 효과를 낼 수 있는 "Low-hanging fruit" 목록과 단계형 체크리스트를 제안합니다.'
    }
  ];

  return (
    <section id="solution" className="py-20 sm:py-28 bg-white relative">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-100/40 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-12 right-12 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-indigo-600 font-bold font-sans text-xs sm:text-sm tracking-wider uppercase mb-3 block">
            HOW VIEWPORT WORKS
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-slate-950 tracking-tight leading-tight mb-5">
            Viewport는 홈페이지를 고객의 시선에서 진단합니다
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
            단순히 화면 단위의 예쁨을 조언하지 않습니다. 고객이 페이지에 들어와{' '}
            <span className="font-semibold text-slate-900">첫인상을 형성하고, 가치를 판단해, 최종 문의/예매 행동으로 도달하는</span>{' '}
            유기적 저항지점을 빈틈없이 포착합니다.
          </p>
        </div>

        {/* Diagnostic dimensions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diagnosticDimensions.map((dimension, index) => (
            <div
              key={index}
              className="group bg-slate-50/40 hover:bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="bg-indigo-50 text-indigo-700 w-10 h-10 rounded-xl flex items-center justify-center shadow-inner group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:scale-110">
                  {dimension.icon}
                </div>
                <h4 className="font-sans font-bold text-base sm:text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {dimension.title}
                </h4>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                {dimension.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
