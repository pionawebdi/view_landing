/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Rocket, HeartPulse, Building2, GraduationCap } from 'lucide-react';

export default function Target() {
  const targets = [
    {
      icon: <Rocket className="w-8 h-8 text-indigo-600" />,
      title: '스타트업',
      subtitle: '데모 신청 & 제휴 도출',
      desc: '혁신적인 아이디어와 기술력을 보유했으나 메인 카피가 너무 함축적이어서 서비스 가치를 방문자에게 직관적으로 해명하기 어려운 얼리 스테이지 제품 팀'
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-indigo-700" />,
      title: '병원·클리닉',
      subtitle: '진료 예약 & 내원 문의',
      desc: '우수한 의료진과 최신 장비를 갖추고도 복잡한 메뉴 배치와 초진 가이드 미비로 광고 클릭 유입 대비 예약 문의 완료 비중이 정체된 정형외과/피부과/치과'
    },
    {
      icon: <Building2 className="w-8 h-8 text-indigo-600" />,
      title: '중소기업',
      subtitle: '견적 협의 & 거래 제안',
      desc: '제품군 스펙, 사업 부문, 핵심 특허, 고객사 로고 스크린 등이 낡고 산만하게 나열되어 기업 간 실질적인 비즈니스 제안 문의로 이어지지 않는 전통 제조업 및 SMB'
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-indigo-700" />,
      title: '학원·교육기관',
      subtitle: '상담 예약 & 설명회 모객',
      desc: '체계적인 커리큘럼과 압도적인 합격 사례가 있으나 학부모가 읽기 불편한 공지사항 형태에 한정되고, 간편 상담 신청 폼이 동떨어져 유실이 심한 교육 단체'
    }
  ];

  return (
    <section id="cases" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-indigo-600 font-bold font-sans text-xs sm:text-sm tracking-wider uppercase mb-3 block">
            TARGET AUDIENCE
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-slate-950 tracking-tight leading-tight mb-5">
            이런 고민을 하시는 조직을 위해 탄생했습니다
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
            광고 예산은 꾸준히 늘어나는데, 기대한 만큼 상담 전화나 정식 문의 신청이 늘지 않아 답답했다면<br />
            이제 겉치레용 성형 대신{' '}
            <span className="font-semibold text-indigo-700">고객 유입 단계별 막힌 혈을 뚫어주는 정밀 진단</span>을 받으셔야 합니다.
          </p>
        </div>

        {/* Target Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {targets.map((target, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/50 hover:border-indigo-500/30 shadow-sm hover:shadow-xl hover:shadow-indigo-600/5 transition-all duration-300"
            >
              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="bg-indigo-50 p-3 sm:p-4 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 transition-colors shrink-0">
                  {target.icon}
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                    <h3 className="font-sans font-extrabold text-lg sm:text-xl text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {target.title}
                    </h3>
                    <span className="inline-block py-0.5 px-2 bg-indigo-50 text-indigo-700 text-[11px] font-sans font-semibold rounded-md w-fit">
                      {target.subtitle}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {target.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
