/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Monitor, ShieldOff, MousePointerClick, Layers, Smartphone, AlertOctagon } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <Monitor className="w-6 h-6 text-indigo-600" />,
      title: '첫 화면의 가치 전달 부족',
      description: '접속 후 3초 내에 회사나 서비스의 핵심 가치와 해결하고자 하는 문제가 직관적으로 전달되지 않고 이탈합니다.'
    },
    {
      icon: <ShieldOff className="w-6 h-6 text-indigo-600" />,
      title: '신뢰 요소 부족',
      description: '풍부한 실적과 전문성이 있음에도 불구하고 고객사, 사례, 후기, 인증 등의 신뢰 지표들이 효과적으로 배치되지 않았습니다.'
    },
    {
      icon: <MousePointerClick className="w-6 h-6 text-indigo-600" />,
      title: 'CTA 노출 약함',
      description: '사용자가 즉시 다음 단계(상담, 회원가입, 견적신청 등)로 전환할 수 있는 주요 동선 버튼이 부재하거나 시각적으로 묻혀있습니다.'
    },
    {
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      title: '복잡한 정보 구조',
      description: '제품 소개, 포트폴리오, 진료 과목 등 꼭 보여주어야 할 정보들의 메뉴 연계와 위계가 복잡하게 분산되어 인지 마비를 유발합니다.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
      title: '모바일 전환 흐름 불편',
      description: '실제 트래픽의 70% 이상을 차지하는 모바일 화면에서, 문의 전용 플로팅 패널이나 스크롤 편의성이 떨어져 도중에 포기합니다.'
    },
    {
      icon: <AlertOctagon className="w-6 h-6 text-indigo-600" />,
      title: '개선 우선순위 불명확',
      description: '홈페이지 개선이 시급해 보이지만, 수천만원의 웹 에이전시 전체 리디자인이 필수인지 아니면 요인 수정만으로 될지 구분이 어렵습니다.'
    }
  ];

  return (
    <section id="problem" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-indigo-600 font-bold font-sans text-xs sm:text-sm tracking-wider uppercase mb-3 block">
            THE CRITICAL BOTTLENECK
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-slate-950 tracking-tight leading-tight mb-5">
            방문자는 있는데, 왜 문의는 없을까요?
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
            전환이 낮은 이유는 단순히 디자인이 세련되지 않아서가 아닐 수 있습니다.<br />
            고객이 정보를 이해하고, 신뢰하고, 핵심 행동(CTA)에 도달하기까지의{' '}
            <span className="font-semibold text-indigo-600">사용자 흐름 전반에 장애물</span>이 방치되어 있을 가능성이 큽니다.
          </p>
        </div>

        {/* Problems Grid (6 Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 transition-all duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-600/5 hover:-translate-y-1"
            >
              <div className="bg-indigo-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-indigo-100 transition-colors">
                {prob.icon}
              </div>
              <h3 className="font-sans font-bold text-lg text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {prob.title}
              </h3>
              <p className="font-sans text-sm text-slate-500 leading-relaxed">
                {prob.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
