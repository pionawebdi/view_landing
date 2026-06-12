/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, CSSProperties, FormEvent } from 'react';
import { 
  Eye, Sparkles, ArrowRight, ShieldAlert, CheckCircle2, AlertCircle, ChevronRight,
  Monitor, ShieldOff, MousePointerClick, Layers, Smartphone, AlertOctagon,
  Compass, Target, ShieldCheck, FileSpreadsheet, Trophy, Rocket, HeartPulse,
  Building2, GraduationCap, ArrowUpRight, HelpCircle, Flame, Mail, Send
} from 'lucide-react';
import viewportBanner from './assets/images/viewport_hero_banner_1781227965113.jpg';

type FrostPreset = 'none' | 'low' | 'perfect' | 'deep';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Configuration for Frosted Glass styling
  const [activePreset, setActivePreset] = useState<FrostPreset>('perfect');
  const [customBlur] = useState<number>(18);
  const [customOpacity] = useState<number>(45);

  // Form State
  const [url, setUrl] = useState('');
  const [industry, setIndustry] = useState('스타트업');
  const [goal, setGoal] = useState('문의 증가');
  const [painPoint, setPainPoint] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Real-time interactive simulation states
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const [liveScore, setLiveScore] = useState<number>(48);
  const [heroTab, setHeroTab] = useState<'banner' | 'simulator'>('banner');

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const getFrostStyles = () => {
    if (activePreset === 'none') {
      return {
        '--frost-blur': '0px',
        '--frost-opacity': '0.96',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none'
      } as CSSProperties;
    }
    if (activePreset === 'low') {
      return {
        '--frost-blur': '6px',
        '--frost-opacity': '0.25',
        backdropFilter: 'blur(6px) saturate(120%)',
        WebkitBackdropFilter: 'blur(6px) saturate(120%)'
      } as CSSProperties;
    }
    if (activePreset === 'perfect') {
      return {
        '--frost-blur': '18px',
        '--frost-opacity': '0.42',
        backdropFilter: 'blur(18px) saturate(140%)',
        WebkitBackdropFilter: 'blur(18px) saturate(140%)'
      } as CSSProperties;
    }
    if (activePreset === 'deep') {
      return {
        '--frost-blur': '36px',
        '--frost-opacity': '0.68',
        backdropFilter: 'blur(36px) saturate(160%)',
        WebkitBackdropFilter: 'blur(36px) saturate(160%)'
      } as CSSProperties;
    }
    return {
      '--frost-blur': `${customBlur}px`,
      '--frost-opacity': `${customOpacity / 100}`,
      backdropFilter: `blur(${customBlur}px) saturate(135%)`,
      WebkitBackdropFilter: `blur(${customBlur}px) saturate(135%)`
    } as CSSProperties;
  };

  // Glass card CSS generator
  const getGlassCardClass = () => {
    return activePreset === 'none'
      ? 'bg-white border border-slate-200/80 shadow-md'
      : 'frosted-glass backdrop-blur-md shadow-lg';
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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

  // Form submit handler with custom simulated generation
  const handleDiagnosisSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!url || !email) {
      triggerToast('홈페이지 URL과 이메일을 정확히 입력해주세요.');
      return;
    }
    setIsSubmitting(true);
    triggerToast('Viewport AI가 사용자 흐름 및 정보 위계를 분석 중입니다...');
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setLiveScore(Math.floor(Math.random() * 20) + 40); // Generate a random realistic score
      triggerToast('축하합니다! 맞춤형 진단 리포트 미리보기가 생성되었습니다.');
      scrollToSection('report-preview');
    }, 2000);
  };

  // Industry specific simulated findings for the live preview screen
  const getSimulatedReport = () => {
    switch (industry) {
      case '스타트업':
        return {
          title: '데모 신청 극대화 진단',
          message: '제품의 가치 제안(Value Proposition)이 직관적인 비즈니스 효용 대신 기술 설명 위주로 설계되어 이탈률이 증가하고 있습니다.',
          insight: '“첫 화면 카피에 직관적인 문제 해결 문구를 도입하고, 주요 CTA를 눈에 띄는 고정 헤더 형태로 배치하여 가시성을 45% 확보해야 합니다.”',
          checklist: [
            '첫 화면 헤드라인을 기술 지향에서 고객 혜택 지향으로 변경',
            '대표 대시보드 스크린샷과 소셜 프루프(Social Proof) 구성 상단 배치',
            '메인 CTA 버튼 문구를 "무료 데모 신청하기"로 통일',
            '모바일 뷰에서 플로팅 데모 요청 동선 최적화'
          ]
        };
      case '병원·클리닉':
        return {
          title: '진료 예약 및 상담 전환 진단',
          message: '어려운 의학 세부 용어와 조밀한 메뉴 구조로 인해, 치료 케이스를 찾는 환자들의 모바일 이탈 빈도가 매우 높습니다.',
          insight: '“모바일 버전에 스티키 바 형태의 즉각 전화상담/예약 숏컷 버튼을 추가하여 예약 대기시간을 최소화하는 UX 설계가 필수적입니다.”',
          checklist: [
            '대표 원장 철학 및 실제 치료 비포&애프터 사례를 전면 강조',
            '모바일 하단 영역에 원터치 예약/통화 플로팅 앵커 적용',
            '첫 진료 절차 및 비급여 항목 안내 등 불확실성 해소 컨텐트 최적화',
            '진료 항목별 카테고리 탭 구조 간소화 (3단계 -> 1단계)'
          ]
        };
      case '중소기업':
        return {
          title: 'B2B 견적 및 제휴 문의 활성화 진단',
          message: '생산 능력(CapEx)이나 특허 기술 정보가 복잡한 아카이브 형태로 파편화되어 주요 바이어들의 즉각 문의를 방해합니다.',
          insight: '“견적 의뢰서 작성 시 입력 필드를 5개 이내로 간편화하고 보안/인증 라벨을 버튼과 병렬 배치하여 폼 제출에 따른 허들을 개선하십시오.”',
          checklist: [
            '주요 사업 성과 및 공인 인증서를 히어로 섹션 하단에 즉각 노출',
            '모호한 "Contact Us" 대신 구체적인 "실시간 간편 견적 요청" 폼 도입',
            '회사 소개 PDF 브로셔 다운로드 시 메일 수집 동선 단일화',
            '주요 장비 인프라 가이드를 그리드 타일로 체계화'
          ]
        };
      case '학원·교육기관':
        return {
          title: '설명회 모객 및 수강상담 신청 진단',
          message: '성적 향상 비율과 상세 커리큘럼이 한자리에 묶이지 못해, 자녀의 알맞은 반 배정 가이드를 찾지 못해 포기합니다.',
          insight: '“교육 프로그램 대상 연령별 추천 코스 설계를 직관적인 타임라인 형태로 시각화하고, 섹션마다 상담 도모 CTA를 지속 배율하십시오.”',
          checklist: [
            '대상 학년(초/중/고) 및 성과 지표(합격률, 점수 향상)를 메인에 즉시 전달',
            '우수 후기 및 학부모 솔직 인터뷰를 카드 슬라이더 형태로 강조',
            '설명회 사전 예약 버튼에 만료 마감 타이머(Scarcity UX) 배치',
            '개별 맞춤 설명서 신청 폼 접근 통로를 최단으로 압축'
          ]
        };
      default:
        return {
          title: '전환 중심 인터페이스 진단',
          message: '홈페이지에 들어온 사용자가 3단계 이상의 탐색 단계를 거쳤을 때 인지 부하를 겪고 즉시 창을 닫고 다른 경쟁업체로 이동하고 있습니다.',
          insight: '“우리가 보여주고 싶은 순서가 아닌, 사용자가 얻고자 하는 질문의 순서에 입각하여 섹션 정보를 재배치하는 스큐 구조가 요구됩니다.”',
          checklist: [
            '가입 유도 버튼의 색상을 독점적인 브랜드 액센트 컬러로 부각',
            '가치 고양 타이틀 하단에 2줄짜리 가이드 명확화',
            '모든 서브페이지에서 모바일 헤더 메뉴 접근 간소화',
            '제출 전 환불 정책이나 보장 제도를 텍스트로 보완해 신뢰도 충전'
          ]
        };
    }
  };

  const simulatedReport = getSimulatedReport();

  return (
    <div id="app-root" className="min-h-screen w-full flex flex-col justify-between overflow-x-hidden relative" style={getFrostStyles()}>
      
      {/* Dynamic Visual Gradient Background Accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-300/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-violet-300/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-emerald-200/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* --- Section 1: Sticky Header --- */}
      <header 
        id="navbar-section"
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${getGlassCardClass()}`}
        style={{ borderBottomColor: 'rgba(0,0,0,0.06)' }}
      >
        <div className="w-full max-w-[1100px] mx-auto flex items-center justify-between px-6 md:px-10 py-4 relative">
          
          {/* Logo */}
          <div 
            id="viewport-logo-group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-indigo-600 text-white w-8 h-8 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/35 transition-transform group-hover:scale-105">
              <Eye className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="font-sans font-extrabold text-[20px] text-slate-900 tracking-tight leading-none">
              Viewport<span className="text-[#786EF1]">.</span>
            </span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('problem-section')} className="font-sans text-[13.5px] font-medium text-slate-600 hover:text-indigo-600 cursor-pointer">서비스 소개</button>
            <button onClick={() => scrollToSection('solution-section')} className="font-sans text-[13.5px] font-medium text-slate-600 hover:text-indigo-600 cursor-pointer">진단 항목</button>
            <button onClick={() => scrollToSection('target-section')} className="font-sans text-[13.5px] font-medium text-slate-600 hover:text-indigo-600 cursor-pointer">케이스</button>
            <button onClick={() => scrollToSection('report-preview')} className="font-sans text-[13.5px] font-medium text-slate-600 hover:text-indigo-600 cursor-pointer">리포트 예시</button>
            <button onClick={() => scrollToSection('pricing-section')} className="font-sans text-[13.5px] font-medium text-slate-600 hover:text-indigo-600 cursor-pointer">요금제</button>
          </nav>

          {/* Right Header Navigation CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('diagnosis-form')}
              className="flex items-center gap-2 font-sans font-semibold text-[12.5px] text-white bg-slate-900 px-4 py-2 rounded-xl hover:bg-indigo-600 transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <span>진단 시작하기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Hamburger Mobile Toggle icon */}
          <button
            id="mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden flex-col justify-center items-center w-6 h-6 gap-1 cursor-pointer z-50 relative"
            aria-label="Toggle Navigation Drawer"
          >
            <span className={`w-6 h-[2px] bg-slate-800 rounded transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`w-6 h-[2px] bg-slate-800 rounded transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-6 h-[2px] bg-slate-800 rounded transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* --- Mobile Swipe Drawer Overlay --- */}
      <div
        id="mobile-overlay"
        className="fixed inset-0 bg-[#F5F5F7] z-40 md:hidden flex flex-col justify-start px-8 pt-24 pb-10 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{ transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex flex-col w-full text-left gap-2 my-auto">
          <button onClick={() => scrollToSection('problem-section')} className="text-2xl font-bold py-4 border-b border-black/[0.08] text-slate-800 cursor-pointer">서비스 소개</button>
          <button onClick={() => scrollToSection('solution-section')} className="text-2xl font-bold py-4 border-b border-black/[0.08] text-slate-800 cursor-pointer">진단 항목</button>
          <button onClick={() => scrollToSection('target-section')} className="text-2xl font-bold py-4 border-b border-black/[0.08] text-slate-800 cursor-pointer">케이스</button>
          <button onClick={() => scrollToSection('report-preview')} className="text-2xl font-bold py-4 border-b border-black/[0.08] text-slate-800 cursor-pointer">리포트 예시</button>
          <button onClick={() => scrollToSection('pricing-section')} className="text-2xl font-bold py-4 border-b border-black/[0.08] text-slate-800 cursor-pointer">요금제</button>
          
          <div className="pt-6">
            <button
              onClick={() => scrollToSection('diagnosis-form')}
              className="w-full flex items-center justify-center font-sans font-semibold text-base text-white rounded-2xl py-4 bg-indigo-600 shadow-md"
            >
              무료 진단 리포트 신청하기
            </button>
          </div>
        </div>
      </div>

      {/* --- Realtime Interactive Frosted Control Deck --- */}
      <div className="fixed bottom-6 right-6 z-40 max-w-[280px] bg-slate-950 text-white rounded-3xl p-4 shadow-2xl border border-white/10 hidden lg:flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-[11px] font-sans font-bold tracking-wider text-slate-400">
          <span className="flex items-center gap-1.5 text-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
            VISUAL DEV GLASS ENGINE
          </span>
          <span>THEME PRESETS</span>
        </div>
        <p className="text-[11px] text-slate-300 leading-relaxed">
          실시간으로 랜딩페이지의 <strong>유리창 불투명도 및 블러</strong> 감도를 조절해 디자인 분위기를 즉각 튜닝해보세요!
        </p>
        <div className="grid grid-cols-4 gap-1.5 mt-1">
          {[
            { id: 'none', label: 'Solid' },
            { id: 'low', label: 'Fine' },
            { id: 'perfect', label: 'Balanced' },
            { id: 'deep', label: 'Heavy' }
          ].map((preset) => (
            <button
              key={preset.id}
              onClick={() => {
                setActivePreset(preset.id as FrostPreset);
                triggerToast(`플러그 적용: ${preset.label} 유리 패널`);
              }}
              className={`py-1.5 rounded-lg text-[11px] font-bold tracking-tight transition-all cursor-pointer ${
                activePreset === preset.id 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* --- Section 2: Hero Section with Live Simulator Screen --- */}
      <section className="relative px-6 md:px-10 pt-16 pb-20 max-w-[1100px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100/80 border border-indigo-200/50 text-indigo-800 text-[11.5px] font-bold rounded-full mb-6 relative">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-spin" style={{ animationDuration: '6s' }} />
              B2B SaaS 전문 UX/UI 피드백 메커니즘
            </span>
            
            <h1 className="font-sans font-extrabold text-[#111] leading-[1.12] mb-6 tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              홈페이지가 <span className="relative inline-block text-[#786EF1] glow-outline">신뢰와 문의</span>로<br />이어지지 않는 이유를 발견하세요
            </h1>

            <p className="text-[15px] text-slate-650 leading-relaxed mb-8 max-w-[580px]">
              <strong>Viewport는</strong> 스타트업, 병원, 중소기업, 교육기관의 홈페이지를 AI가 입체 분석해 <strong>사용자 흐름, 정보 구조, CTA, 모바일 UI, 카피 라이팅, 소셜 신뢰 요소</strong>의 치명적인 이탈 저항을 진단하고 단계적 개선 우선순위를 리포트로 완벽 전송합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('diagnosis-form')}
                className="flex items-center justify-center gap-2 font-sans font-bold text-sm text-white bg-[#1a1a1a] hover:bg-indigo-600 active:scale-95 px-7 py-3.5 rounded-2xl transition-all shadow-xl shadow-indigo-950/10 cursor-pointer"
              >
                <span>내 홈페이지 진단하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => scrollToSection('report-preview')}
                className={`flex items-center justify-center gap-2 font-sans font-bold text-sm text-slate-700 bg-white border border-slate-200/80 px-7 py-3.5 rounded-2xl transition-all hover:bg-slate-50 cursor-pointer`}
              >
                <span>실시간 리포트 시뮬레이션</span>
              </button>
            </div>

            <p className="text-xs text-slate-400 mt-4 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              리디자인 전에, 무엇이 귀사의 소액 광고비를 이탈시키는지 검증받으세요.
            </p>
          </div>

          {/* Right Preview Card - Dynamic Simulated Output */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className={`w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl relative ${getGlassCardClass()}`}>
              <div className="h-2 bg-gradient-to-r from-[#786EF1] via-[#F7B2FB] to-emerald-400" />
              
              <div className="p-6">
                
                {/* Visual Tab Controller */}
                <div className="grid grid-cols-2 bg-slate-950/5 p-1 rounded-xl mb-4 border border-slate-100">
                  <button
                    onClick={() => {
                      setHeroTab('banner');
                      triggerToast('비주얼 엔진 뷰어로 전환되었습니다.');
                    }}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      heroTab === 'banner'
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>비주얼 컨셉</span>
                  </button>
                  <button
                    onClick={() => {
                      setHeroTab('simulator');
                      triggerToast('실시간 AI 진단 시뮬레이터로 전환되었습니다.');
                    }}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      heroTab === 'simulator'
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>진단 시뮬레이터</span>
                  </button>
                </div>

                {heroTab === 'banner' ? (
                  <div className="space-y-4">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200/50 shadow-inner group">
                      <img 
                        src={viewportBanner} 
                        alt="Viewport Core Engine UI Analysis Graphic" 
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-103"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm text-slate-100 text-[10px] font-bold px-2 py-0.5 rounded-lg flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        AI CORE ENGINE V2.5
                      </div>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-slate-900 text-[14px] tracking-tight mb-1 flex items-center gap-1">
                        <Layers className="w-4 h-4 text-[#786EF1]" />
                        초정밀 인지 가독성 히트맵 분석
                      </h4>
                      <p className="text-[12px] text-slate-500 leading-relaxed">
                        Viewport가 자체 모델링화한 특화 <strong>시선 가독성 트래킹</strong> 알고리즘의 분석 스케일입니다. 방문자의 복잡한 시각 전달 저항력을 수리 계산하여 가입 전환율의 최적 배치를 수립합니다.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-rounded text-indigo-500 text-lg">donut_large</span>
                        <span className="font-bold text-[13px] text-slate-900 tracking-tight">REALTIME AI DIAGNOSIS</span>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-lg flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                        분석 완료
                      </span>
                    </div>

                    {/* Simulated Conversion Score Box */}
                    <div className="bg-slate-950/5 p-4 rounded-2xl mb-5 border border-[#786EF1]/10">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">전환 최적화 점수</span>
                        <span className="font-mono text-base font-black text-rose-500 animate-pulse">{liveScore} / 100</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-rose-500 h-full rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: `${liveScore}%` }}
                        />
                      </div>
                    </div>

                    {/* Items Checklist State */}
                    <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider block mb-2.5 text-left">분석 항목 및 위해 수준</span>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center bg-white/70 p-2 py-1.5 rounded-lg border border-slate-100 text-xs text-slate-700">
                        <span className="font-semibold">첫 화면 메시지 전달력</span>
                        <span className="text-amber-600 bg-amber-50 px-1.5 py-0.5 font-bold rounded text-[10px]">개선 필요</span>
                      </div>
                      <div className="flex justify-between items-center bg-white/70 p-2 py-1.5 rounded-lg border border-slate-100 text-xs text-slate-700">
                        <span className="font-semibold">주요 액션(CTA) 접근 속도</span>
                        <span className="text-red-600 bg-red-50 px-1.5 py-0.5 font-bold rounded text-[10px]">보완 시급</span>
                      </div>
                      <div className="flex justify-between items-center bg-white/70 p-2 py-1.5 rounded-lg border border-slate-100 text-xs text-slate-700">
                        <span className="font-semibold">모바일 엄지영역 사용성</span>
                        <span className="text-red-600 bg-red-50 px-1.5 py-0.5 font-bold rounded text-[10px]">보완 시급</span>
                      </div>
                      <div className="flex justify-between items-center bg-white/70 p-2 py-1.5 rounded-lg border border-slate-100 text-xs text-slate-700">
                        <span className="font-semibold">고객 신뢰용 증빙 레이아웃</span>
                        <span className="text-indigo-600 bg-indigo-50 px-1.5 py-0.5 font-bold rounded text-[10px]">진단 대기</span>
                      </div>
                    </div>

                    {/* Simulated AI advice box */}
                    <div className="bg-slate-900 text-white p-4.5 rounded-2xl relative text-left">
                      <span className="absolute -top-1.5 -left-1.5 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
                      </span>
                      <div className="flex items-center gap-1.5 mb-1.5 text-[10px] font-bold text-violet-300">
                        <span className="material-symbols-rounded text-xs select-none">smart_toy</span>
                        <span>AI INSIGHT CO-PILOT</span>
                      </div>
                      <p className="text-[11.5px] leading-relaxed text-slate-200 font-medium">
                        "가장 시급한 문제는 유입자의 81%를 차지하는 모바일 뷰포트에서 상담 신청 버튼이 스크롤 시 화면 밖으로 밀려나는 문제입니다. 간편 플로팅 영역 선정이 급선무입니다."
                      </p>
                    </div>
                  </>
                )}

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- Section 3: Problem Section --- */}
      <section id="problem-section" className="py-20 bg-slate-900 text-slate-100 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-[720px] mx-auto mb-16">
            <span className="text-indigo-400 text-xs font-bold tracking-wider uppercase block mb-2">CRITICAL USER BOTTLENECKS</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              방문자는 있는데, 왜 문의는 없을까요?
            </h2>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              정답은 디자인이 예쁘지 않아서가 아닙니다. 고객이 우리 홈페이지에 접속해 정보의 가치와 성과를 믿고, 최종 행동으로 도달하기 전 어딘가에서 <strong>흐름이 크게 차단되어 있기</strong> 때문입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Monitor className="w-5 h-5 text-indigo-400" />,
                title: "첫 화면의 가치 전달 부족",
                desc: "회사나 서비스가 정확히 무슨 문제를 해결해주는 전담 솔루션인지를 3초 이내에 인지시키는 헤드라인이 부재합니다."
              },
              {
                icon: <ShieldOff className="w-5 h-5 text-indigo-400" />,
                title: "신뢰 요소 구성 부재",
                desc: "고객사 로고, 실질적인 진료/개발 사례, 가공되지 않은 진짜 후기, 인증서 등이 효과적인 타이밍에 진술되지 못했습니다."
              },
              {
                icon: <MousePointerClick className="w-5 h-5 text-indigo-400" />,
                title: "CTA 노출 및 디자인 약함",
                desc: "사용자가 즉각 연락할 수 있는 메인 버튼이 다른 서브메뉴와 동일한 가시성으로 묻혀 있어 클릭을 헤맵니다."
              },
              {
                icon: <Layers className="w-5 h-5 text-indigo-400" />,
                title: "복잡한 파편화 정보 구조",
                desc: "제공 부문이나 가격 구조, 도입 이득에 관한 내용들이 논리적 순차 없이 난잡하게 믹스되어 가독성을 방해합니다."
              },
              {
                icon: <Smartphone className="w-5 h-5 text-indigo-400" />,
                title: "모바일 전환 흐름 불편",
                desc: "메가 트래픽의 다수를 점하는 모바일 뷰 전용 가이드나, 한눈에 엄지 터치가 편한 연락용 간소 폼이 제외되어 있습니다."
              },
              {
                icon: <AlertOctagon className="w-5 h-5 text-indigo-400" />,
                title: "개선 우선순위 불명확",
                desc: "무엇부터 고쳐 갈지 모르다 보니 결국 비싼 종합 에이전시 전면 리뉴얼이라는 값비싼 자금 낭비 악순환에 직면합니다."
              }
            ].map((problem, i) => (
              <div 
                key={i}
                className="bg-slate-800/60 border border-slate-700/50 p-6 rounded-2xl relative overflow-hidden group hover:border-indigo-400 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-slate-900 w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-indigo-400 shadow-inner group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {problem.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight">{problem.title}</h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- Section 4: Solution Grid Section --- */}
      <section id="solution-section" className="py-20 relative">
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-[720px] mx-auto mb-16">
            <span className="text-indigo-600 text-xs font-extrabold tracking-wider uppercase block mb-2">DIAGNOSTIC ARCHITECTURE</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Viewport는 홈페이지를 고객의 시선에서 진단합니다
            </h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed">
              우리는 편향적인 주관 비평을 하지 않습니다. 유입 단계부터 가치 형성, 신뢰 증명, 액션 유도까지 사용자 행동 패턴에 입각한 <strong>9가지 과학적 세부 진단 기둥</strong>을 바탕으로 평가합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Compass className="w-5 h-5" />, title: "첫 화면 메시지", text: "방문자 접속 후 인지 이탈 지점을 차단하기 위해 메세지 주도 장치들을 꼼꼼하게 측정합니다." },
              { icon: <Target className="w-5 h-5" />, title: "사용자 흐름", text: "랜딩부터 최종 수수 단계까지 마찰 점수와 중복 노이즈, 인지 마비 지점을 제거합니다." },
              { icon: <Layers className="w-5 h-5" />, title: "정보 구조", text: "글로벌 헤더 및 서브 페이지 메뉴 내비게이션의 직관적 체계를 디자이너 관점에서 심화 정렬합니다." },
              { icon: <MousePointerClick className="w-5 h-5" />, title: "CTA 위치와 문구", text: "맥락 없이 흩어진 전환 버튼을 적재적소 구조로 전치해 실행력을 비약시킵니다." },
              { icon: <Smartphone className="w-5 h-5" />, title: "모바일 사용성", text: "스크롤 이동 거리 계산 및 원터치 반응 크기 등 모바일 이용 극대화 최적화를 진단합니다." },
              { icon: <ShieldCheck className="w-5 h-5" />, title: "신뢰 요소", text: "고객사의 로고나 평판 리뷰 데이터를 가장 설득력 높고 효과적인 스큐 섹션에 보장합니다." },
              { icon: <FileSpreadsheet className="w-5 h-5" />, title: "UX 카피 라이팅", text: "어려운 내부 공급자 언어 대신 고객이 혜택을 체감하는 단어로 간소 변경하는 기준을 다듬습니다." },
              { icon: <Trophy className="w-5 h-5" />, title: "시각적 위계", text: "글꼴 크기, 여백 차원, 컬러 주목 분포를 통해 중요한 핵심 구절부터 시선이 향하도록 조율합니다." },
              { icon: <Sparkles className="w-5 h-5" />, title: "개선 우선순위 도출", text: "적은 공수를 들여 즉각적인 문의량의 점프 효과를 낼 수 있는 우선 검증 액션플랜을 정밀 정립합니다." }
            ].map((dim, i) => (
              <div 
                key={i} 
                className={`p-6 rounded-2xl border border-slate-200/65 flex flex-col items-start hover:border-indigo-400 transition-all ${getGlassCardClass()}`}
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 shadow-sm">
                  {dim.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{dim.title}</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{dim.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- Section 5: Target Users Section --- */}
      <section id="target-section" className="py-20 bg-indigo-50/60 relative">
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-[720px] mx-auto mb-16">
            <span className="text-indigo-600 text-xs font-bold tracking-wider uppercase block mb-2">TARGET GROUPS</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Viewport가 필요한 조직
            </h2>
            <p className="text-sm text-slate-500 mt-3">
              우리 비즈니스 카테고리에 전형화된 고질적 UX/UI 전환 결핍 증상을 명확히 타격해 드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Rocket className="w-6 h-6 text-indigo-600" />,
                tag: "STARTUPS",
                title: "스타트업",
                desc: "혁신 아이디어와 솔루션 장점을 가졌지만 서비스 용어가 지나치게 복잡하여 유료 가입 내지 실질적인 유저 데모 신청 액션이 미달인 제품 혁신 팀"
              },
              {
                icon: <HeartPulse className="w-6 h-6 text-emerald-600" />,
                tag: "HEALHCARE",
                title: "병원·클리닉",
                desc: "최첨단 의료 기기와 우수 의료진이 무대 뒤에 숨겨져 있고, 모바일 예약 링크나 상담 전화 숏컷 단선이 정리되지 않아 내원 전환율이 정체된 정형외과, 피부과, 치과"
              },
              {
                icon: <Building2 className="w-6 h-6 text-blue-600" />,
                tag: "SMB",
                title: "중소기업 / 제조업",
                desc: "글로벌 파트너 실적과 전문 공인 인증서 등의 핵심 병기가 복잡하고 노후화된 구조 뒤에 가려져 있어 해외 바이어나 B2B 파트너의 공식 견적 요청 상담이 발생하지 않는 팀"
              },
              {
                icon: <GraduationCap className="w-6 h-6 text-violet-600" />,
                tag: "ACADEMY",
                title: "학원·교육기관",
                desc: "신뢰감 있는 수강 강사진 정보와 압도적인 우수 합격 데이터가 조밀한 표 속에만 갇혀 있고, 학부모 상담 설명회 신청 폼이 불량하여 모객 효율이 저조한 단체"
              }
            ].map((target, idx) => (
              <div 
                key={idx}
                className="bg-white hover:border-indigo-500 transition-all duration-300 p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm flex gap-5 hover:shadow-xl hover:shadow-indigo-600/5 group"
              >
                <div className="bg-slate-50 p-4 rounded-2xl text-slate-700 shrink-0 h-fit group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {target.icon}
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-widest">{target.tag}</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5 mb-2">{target.title}</h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{target.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- Section 6: How It Works Section --- */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-[720px] mx-auto mb-16">
            <span className="text-indigo-600 text-xs font-bold tracking-wider uppercase block mb-2">WORKFLOW</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              URL만 입력하면, AI가 전환 흐름을 분석합니다
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              복잡한 백엔드 추적 스크립트 설치 없이, URL과 간편 설문 응답만으로 즉각 착수됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {[
              { step: "01", label: "홈페이지 URL 입력", desc: "진단받고 싶은 메인 도메인을 간편 설정합니다." },
              { step: "02", label: "업종 및 목표 선택", desc: "문의 증가, 진료 예약 등 도출 목표를 지정합니다." },
              { step: "03", label: "현재 고민 작성", desc: "광고 유입률 대비 저조한 상담 이유 혹은 희망 개선 폭을 적습니다." },
              { step: "04", label: "AI UX/UI 정밀 진단", desc: "Viewport 전용 행동 위계 알고리즘이 페이지 구석을 투사합니다." },
              { step: "05", label: "리포트 실시간 확인", desc: "개선 우선 우선순위와 PDF 다운로드 키트를 전달받습니다." }
            ].map((step, i) => (
              <div 
                key={i}
                className="bg-slate-50 border border-slate-100 p-5 rounded-2xl relative select-none flex flex-col items-start text-left"
              >
                <span className="font-mono text-2xl font-black text-indigo-200 mb-2">{step.step}</span>
                <span className="font-bold text-sm text-slate-800 mb-1.5">{step.label}</span>
                <p className="text-xs text-slate-400 font-medium leading-normal">{step.desc}</p>
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 text-slate-300 z-10 translate-y-[-50%]">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- Section 7: Live Report Preview (Dynamic interactive view) --- */}
      <section id="report-preview" className="py-20 bg-[#F5F5F7] border-y border-slate-200">
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="text-indigo-600 text-xs font-bold tracking-wider uppercase block mb-2">LIVE REPORT PREVIEW</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              무엇을 고쳐야 할지, 리포트로 명확하게 정리합니다
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              아래는 입력하신 현재 업종 타겟에 부합하는 리포트 가상 시뮬레이터입니다. 업종 변경 시 진단 내용이 전격 동기화됩니다.
            </p>

            {/* Target Industry Switcher inside Live preview */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {['스타트업', '병원·클리닉', '중소기업', '학원·교육기관'].map((ind) => (
                <button
                  key={ind}
                  onClick={() => {
                    setIndustry(ind);
                    triggerToast(`업종 변경: "${ind}" 맞춤형 진단 셋팅`);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    industry === ind 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          {/* Actual Sample Report Interactive Box */}
          <div className={`p-6 md:p-8 rounded-3xl ${getGlassCardClass()}`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
              <div>
                <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest block mb-1">SELECTED INDUSTRY: {industry}</span>
                <h3 className="text-xl font-bold text-slate-900">Viewport AI 종합 진단 요약: "{simulatedReport.title}"</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-semibold">시뮬레이션 위험도 등급:</span>
                <span className="text-xs bg-red-150 text-red-600 font-bold px-3 py-1 rounded-full border border-red-200 bg-red-50">HIGH CRITICAL</span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Core Diagnosis Box */}
              <div className="bg-white/90 p-5 rounded-2xl border border-slate-200/80">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#786EF1] flex items-center gap-1.5 mb-2.5">
                  <span className="material-symbols-rounded text-sm">assignment_late</span>
                  핵심 전환 장애 진찰 개요
                </h4>
                <p className="text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                  {simulatedReport.message}
                </p>
              </div>

              {/* Checklist and Priorities UI */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Visual Checklist Column */}
                <div className="md:col-span-7 flex flex-col gap-3">
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-rounded text-sm">checklist</span>
                    AI 권정 5대 액션 체크리스트
                  </h4>
                  <div className="space-y-2.5">
                    {simulatedReport.checklist.map((item, id) => (
                      <div key={id} className="flex items-start gap-2.5 bg-white/50 p-3 rounded-xl border border-slate-200/50">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                          ✔
                        </div>
                        <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{item}</span>
                      </div>
                    ))}
                    <div className="flex items-start gap-2.5 bg-white/50 p-3 rounded-xl border border-slate-200/50">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                        ✔
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-normal">글로벌 이탈 예방을 위해 CTA 버튼 색상 대비율 7:1 통일</span>
                    </div>
                  </div>
                </div>

                {/* AI Advice Side Box */}
                <div className="md:col-span-5 flex flex-col justify-between bg-slate-900 text-white p-5 rounded-2xl relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
                  <div>
                    <span className="text-[10px] font-black tracking-widest text-[#786EF1] uppercase block mb-1">PRESCRIPTIVE INSIGHT</span>
                    <h5 className="text-sm font-bold text-slate-100 mb-2.5 flex items-center gap-1.5">
                      <span className="material-symbols-rounded text-base text-violet-400">psychology</span>
                      고객 인접도 개선 처방
                    </h5>
                    <p className="text-xs leading-relaxed text-slate-300 font-medium">
                      {simulatedReport.insight}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Viewport Report V2.4</span>
                    <code className="text-emerald-400">Auto-Refreshed</code>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- Section 8: Persona & Case Studies Section --- */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-[720px] mx-auto mb-16">
            <span className="text-indigo-600 text-xs font-bold tracking-wider uppercase block mb-2">PERSONAS & SUCCESS CASES</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              업종별로 다른 전환 문제를 진단합니다
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              실제 Viewport 진단 처방 하에 극적인 문의 유입 변화를 이뤄낸 업종별 도식 인물 정보입니다.
            </p>
          </div>

          <div className="flex justify-center gap-1.5 max-w-[500px] mx-auto bg-slate-100 p-1 rounded-2xl mb-10">
            {['김도윤 (스타트업)', '이서현 (메디컬)', '박민재 (학원 원장)'].map((p, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedCase(i);
                  triggerToast(`사례 선택: ${p}`);
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  selectedCase === i 
                    ? 'bg-white text-slate-950 shadow-md' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {p.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Persona visual display box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
            
            {/* Persona card */}
            <div className="md:col-span-5 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-16 h-16 rounded-full bg-indigo-600 text-white font-extrabold flex items-center justify-center text-lg shadow-md mb-4 bg-gradient-to-tr from-indigo-500 to-violet-500">
                {selectedCase === 0 ? "김" : selectedCase === 1 ? "이" : "박"}
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-0.5">
                {selectedCase === 0 ? "김도윤 (34세)" : selectedCase === 1 ? "이서현 (39세)" : "박민재 (42세)"}
              </h3>
              <p className="text-xs text-indigo-700 font-bold mb-3">
                {selectedCase === 0 ? "B2B SaaS 스타트업 대표" : selectedCase === 1 ? "정형외과 병원 마케팅 팀장" : "입시 영어·학원 원장"}
              </p>
              <div className="bg-slate-200/50 rounded-xl p-3 text-xs text-slate-650 w-full mb-2">
                <strong>현 시점 고민:</strong><br />
                {selectedCase === 0 ? "방문 트래픽에 비해 무료 데모 예약이 정말 발생하지 않습니다." : selectedCase === 1 ? "네이버 검색 광고비는 매월 천만원인데 전화가 뚝 끊겼습니다." : "커리큘럼을 정성껏 써두었지만 모바일 가입율이 처참합니다."}
              </div>
            </div>

            {/* Diagnosis results column */}
            <div className="md:col-span-7 space-y-4">
              <h4 className="text-xs uppercase font-black text-slate-400 tracking-wider flex items-center gap-1">
                <span className="material-symbols-rounded text-sm text-indigo-500">done_all</span>
                VIEWPORT 진단 및 처방 결과
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-slate-700">
                {selectedCase === 0 ? (
                  <>
                    <li className="bg-white p-3 rounded-lg border border-slate-200">📌 헤드라인을 기술 명세에서 <strong>"우리 서비스가 해결해줄 문제 효용"</strong> 중심으로 즉시 교체</li>
                    <li className="bg-white p-3 rounded-lg border border-slate-200">📌 모호한 "문의 요청" 대신 <strong>"30초 무료 원격 데모 체험하기"</strong> 문구로 고정 CTA 적용</li>
                    <li className="bg-white p-3 rounded-lg border border-slate-200">📌 신뢰도 고양을 위해 선도 업계 도입 로고 밴드를 히어로 하위영역에 밀접 재정렬</li>
                  </>
                ) : selectedCase === 1 ? (
                  <>
                    <li className="bg-white p-3 rounded-lg border border-slate-200">📌 메인 히어로 하단에 <strong>"대표 의료진의 진료 신념 및 실제 내원자 치유기"</strong> 전격 배치</li>
                    <li className="bg-white p-3 rounded-lg border border-slate-200">📌 모바일 진입 시 고밀도 <strong>"플로팅 원터치 예약 전화 바"</strong>를 최하단에 단단히 고착</li>
                    <li className="bg-white p-3 rounded-lg border border-slate-200">📌 초진 환자를 구원할 실시간 치료 예약 슬롯 화면 유리를 연동 간편화</li>
                  </>
                ) : (
                  <>
                    <li className="bg-white p-3 rounded-lg border border-slate-200">📌 복잡한 표 형태 자료를 <strong>"학년별 교육과정 3스텝 로드맵 일러스트"</strong>로 요약</li>
                    <li className="bg-white p-3 rounded-lg border border-slate-200">📌 명문대 합격 기록 및 선임 학부모 간증 란을 전면에 배치하여 전환 시선 유도</li>
                    <li className="bg-white p-3 rounded-lg border border-slate-200">📌 설명회 신청 폼에 실시간 잔여 좌석 마감 경고 UX 피드백 장치 결속</li>
                  </>
                )}
              </ul>
              
              <div className="pt-2 flex items-center gap-2">
                <span className="text-xs text-slate-500 font-bold">진단 개선 완료에 따른 추천 대표 심벌:</span>
                <span className="bg-indigo-600 text-white font-sans text-[11px] font-extrabold px-3 py-1 rounded-md">
                  {selectedCase === 0 ? "무료 데모 신청하기" : selectedCase === 1 ? "진료 예약하기" : "상담 신청하기"}
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- Section 9: Benefits Section --- */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-[720px] mx-auto mb-16">
            <span className="text-indigo-400 text-xs font-bold tracking-wider uppercase block mb-2">BENEFITS FOR YOU</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              리디자인 전에, 먼저 확인해야 할 장점들
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              수천만원의 웹 개발 에이전시에 계약하기 전, 단 돈 10만원대 리포트로 수천만원의 가치를 지켜드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { id: "01", title: "이탈 원인 파악", text: "방문 고객이 왜 문의를 지체하고 떠나는지 명징히 파헤칩니다." },
              { id: "02", title: "실행 우선순위", desc: "우선순위", text: "무엇부터 즉각 고칠 지 합리적 목록을 전달합니다." },
              { id: "03", title: "수정 요청 가이드", text: "제작사나 소속 개발자에게 전송할 고정 명세 기준을 쥡니다." },
              { id: "04", title: "개발 비용의 절감", text: "전면 리폼 대공사 없이 부분 튜닝만으로 큰 액션을 창출합니다." },
              { id: "05", title: "확실한 리드 증명", text: "데모, 전화문의, 상담 성사 비중이 확연히 뜁니다." }
            ].map((ben, idx) => (
              <div 
                key={idx}
                className="bg-slate-800 p-5 rounded-2xl relative flex flex-col justify-between border border-slate-700/60"
              >
                <span className="font-mono text-xs text-indigo-400 font-extrabold block mb-4">#BENEFIT {ben.id}</span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2 leading-tight">{ben.title}</h4>
                  <p className="text-xs text-slate-400 leading-normal">{ben.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- Section 10: Differentiation Section --- */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-[720px] mx-auto mb-16">
            <span className="text-indigo-600 text-xs font-bold tracking-wider uppercase block mb-2">DIFFERENTIATION</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              단순 분석이 아니라, 실행 가능한 진단을 제공합니다
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "일반 AI 챗봇 ✕", desc: "텍스트 복사 붙여넣기 식 대답이 아닙니다. 업종별 최우선 타겟 가치에 입각해 완결된 구조의 UX 진단 프레임을 배송합니다." },
              { title: "구 개발사 대행 ✕", desc: "곧장 비싼 전체 개편 견적서부터 미는 영리형 개발사와 달리 가벼운 시도로 전환 저항을 해킹할 묘안을 자문합니다." },
              { title: "GA 데이터 툴 ✕", desc: "해석하기 심란한 난장판 숫자 대신, 왜 이탈하는가에 관한 사람의 심리학적 행동 분석 기준을 친절히 풀어드립니다." },
              { title: "컨설팅 대비 고속⚡", desc: "수일씩 질질 이메일을 주고받으며 대기하는 지연 미팅 없이, 24시간 내 초정밀 AI 종합 시트지를 받아 처치할 수 있습니다." }
            ].map((diff, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl relative text-left"
              >
                <div className="bg-indigo-50 text-indigo-700 w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm font-bold text-xs">
                  🏆
                </div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-2">{diff.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- Section 11: Pricing Section --- */}
      <section id="pricing-section" className="py-20 bg-[#F5F5F7] border-t border-slate-200">
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-[720px] mx-auto mb-16">
            <span className="text-indigo-600 text-xs font-bold tracking-wider uppercase block mb-2">PRICING PLANS</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              필요한 수준에 맞게 진단해보세요
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Free plan */}
            <div className={`p-6 md:p-8 rounded-3xl border border-slate-200 flex flex-col justify-between ${getGlassCardClass()}`}>
              <div>
                <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase block mb-1">STARTER</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">무료 미니 진단</h3>
                <div className="font-mono text-3xl font-black text-slate-950 mb-6">
                  ₩0 <span className="text-xs text-slate-400 font-bold">/ 1회 최초 한정</span>
                </div>
                <div className="w-full h-[1px] bg-slate-200 mb-6" />
                <ul className="space-y-3.5 text-xs text-slate-650 text-left mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-600" /> 첫 화면 핵심 문제 3가지 요약</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-600" /> 간단한 개선 방향 제시</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-600" /> 회원 가입 시 연동 가능</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  scrollToSection('diagnosis-form');
                  triggerToast('무료 진단 폼에서 접수해주십시오!');
                }}
                className="w-full py-3.5 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 cursor-pointer"
              >
                무료로 시작하기
              </button>
            </div>

            {/* Standard Plan (Highlighted) */}
            <button
              onClick={() => {
                scrollToSection('diagnosis-form');
                triggerToast('기본 진단 리포트를 선택하셨습니다. 아래 폼을 작성해주세요.');
              }}
              className="p-6 md:p-8 rounded-3xl border-2 border-indigo-600 bg-white shadow-2xl relative flex flex-col justify-between text-left relative overflow-hidden cursor-pointer active:scale-99 transition-all"
            >
              <div className="absolute top-0 right-0 bg-indigo-600 text-white font-sans text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1">
                <Flame className="w-3 h-3 text-amber-300 animate-pulse" />
                <span>RECOMMENDED PLAN</span>
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest text-indigo-600 uppercase block mb-1">BEST FOR MOST</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">기본 진단 리포트</h3>
                <div className="font-mono text-3xl font-black text-slate-950 mb-6">
                  ₩99,000 <span className="text-xs text-slate-400 font-bold">/ 1회</span>
                </div>
                <div className="w-full h-[1px] bg-slate-200 mb-6" />
                <ul className="space-y-3.5 text-xs text-slate-650 text-left mb-8">
                  <li className="flex items-center gap-2 text-indigo-700 font-semibold"><CheckCircle2 className="w-3.5 h-3.5" /> UX/UI 핵심 이탈 지점 진단</li>
                  <li className="flex items-center gap-2 font-semibold text-slate-800"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" /> 성과 중심 CTA 개선안</li>
                  <li className="flex items-center gap-2 font-semibold text-slate-800"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" /> 모바일 엄지 편리 개선 포인트</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-600" /> 실천을 위한 개선 우선순위 가이드</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-600" /> PDF 보고서 다운로드 전송</li>
                </ul>
              </div>
              <div
                className="w-full py-3.5 rounded-xl text-xs font-bold text-center text-white cursor-pointer"
                style={{ backgroundImage: 'linear-gradient(180deg, #4f46e5 0%, #3730a3 100%)' }}
              >
                기본 리포트 신청하기
              </div>
            </button>

            {/* Premium plan */}
            <div className={`p-6 md:p-8 rounded-3xl border border-slate-200 flex flex-col justify-between ${getGlassCardClass()}`}>
              <div>
                <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase block mb-1">PRO PRESTIGE</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">상세 진단 리포트</h3>
                <div className="font-mono text-3xl font-black text-slate-950 mb-6">
                  ₩199,000 <span className="text-xs text-slate-400 font-bold">/ 1회</span>
                </div>
                <div className="w-full h-[1px] bg-slate-200 mb-6" />
                <ul className="space-y-3.5 text-xs text-slate-650 text-left mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-650" /> 사용자 인지 여정 맵핑 정합성</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-650" /> 헤드라인 UX 카피 처방전</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-650" /> 고객 증빙 신뢰 요소 전폭 튜닝</li>
                  <li className="flex items-center gap-2 font-semibold text-indigo-650"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" /> 실행용 액션 디테일 체크리스트</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-650" /> PDF 보고서 + 1:1 슬랙 컨시어지 30일</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  scrollToSection('diagnosis-form');
                  triggerToast('상세 리포트 플랜을 타겟하셨습니다. 하단 신청폼을 완성하십시오.');
                }}
                className="w-full py-3.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-black text-white cursor-pointer"
              >
                상상세 리포트 신청하기
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* --- Section 12: Diagnosis Application Form (With active rendering state integration) --- */}
      <section id="diagnosis-form" className="py-20 relative bg-white">
        <div className="w-full max-w-[700px] mx-auto px-6">
          
          <div className="text-center mb-12">
            <span className="text-[11px] font-black tracking-widest text-[#786EF1] uppercase block mb-1">SUBMIT DETAILED DIAGNOSIS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              지금 홈페이지의 전환 문제를 확인해보세요
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              정보 제출 즉시 <strong>Viewport AI</strong>가 가중 분석 모델을 활용해 진단 스냅샷 리포트를 즉각 렌더링해 줍니다.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200 relative overflow-hidden">
            
            {formSubmitted ? (
              <div className="text-center py-6 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center text-3xl mb-4 shadow-sm animate-bounce">
                  ✓
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-1">진단 신청 완료!</h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6 max-w-[360px] leading-relaxed">
                  상세 세부 PDF 사안은 기재하신 <strong>{email}</strong>로 24시간 내 배송됩니다. 먼저 상단의 라이브 리포트 미리보기에서 업종별 맞춤식 처방 진을 확인해보세요.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 bg-slate-900 text-white font-sans text-xs font-bold rounded-xl hover:bg-indigo-600 transition-colors"
                  >
                    새 홈페이지 진단하기
                  </button>
                  <button
                    onClick={() => scrollToSection('report-preview')}
                    className="px-4 py-2 bg-white text-slate-755 border border-slate-200 text-xs font-bold rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    샘플 요약 보기
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDiagnosisSubmit} className="space-y-4">
                
                {/* URL INPUT */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                    <Monitor className="w-3.5 h-3.5 text-indigo-600" />
                    홈페이지 URL 주소 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://yourcompany.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full bg-white border border-slate-200 p-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow transition-all bg-white hover:bg-slate-50/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* INDUSTRY SELECT */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                      <Rocket className="w-3.5 h-3.5 text-indigo-600" />
                      비즈니스 카테고리 <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full bg-white border border-slate-200 p-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                    >
                      <option value="스타트업">스타트업 (SaaS, 플랫폼 등)</option>
                      <option value="병원·클리닉">병원·클리닉 (성형, 치과, 한의원 등)</option>
                      <option value="중소기업">중소기업 (전통 제조, 수출, SMB)</option>
                      <option value="학원·교육기관">학원·교육기관 (설명회, 입시 등)</option>
                      <option value="B2B 서비스">B2B 전문 대행 및 컨설팅</option>
                      <option value="기타">기타 웹 솔루션</option>
                    </select>
                  </div>

                  {/* CONVERSION GOAL */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                      <Target className="w-3.5 h-3.5 text-indigo-600" />
                      핵심 도달 전환 목표 <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full bg-white border border-slate-200 p-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                    >
                      <option value="문의 증가">문의 증대 및 상담 예약</option>
                      <option value="데모 신청 증가">유료 데모 신청 유도</option>
                      <option value="진료 예약 증가">내원 및 실시간 질의 예약</option>
                      <option value="견적 요청 증가">바이어 실시간 협상 및 견적 요청</option>
                      <option value="상담 신청 증가">코스 상담 신청</option>
                      <option value="자료 다운로드 증가">백서(Whitepaper) 무료 전파</option>
                      <option value="채용 지원 증가">입사 지원 증대</option>
                    </select>
                  </div>
                </div>

                {/* PAIN POINT TEXTAREA */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                    현재 메인 고민 <span className="text-slate-400">(상세 서술 시 AI 정밀도 업)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="예: 페이스북 광고를 통해 하루에 300명이 들어오는 데이터는 뜨는데, 메일 문의 신청은 단 한 개도 생기지 않아서 답답합니다."
                    value={painPoint}
                    onChange={(e) => setPainPoint(e.target.value)}
                    className="w-full bg-white border border-slate-200 p-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-sans"
                  />
                </div>

                {/* EMAIL ADDRESS */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-indigo-600" />
                    리포트 수신 이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-slate-200 p-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white hover:bg-slate-50/50"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 font-sans font-bold text-sm text-white rounded-2xl py-4 bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer shadow-lg shadow-indigo-600/10 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-rounded animate-spin">sync</span>
                      <span>Viewport 분석 엔진 기동 중... (2초 소요)</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>분석 리포트 신청 및 즉시 진단 프리뷰 보기</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* --- Section 13: Final CTA Section --- */}
      <section className="relative py-24 select-none bg-slate-950 text-white overflow-hidden text-center justify-center flex flex-col items-center">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="absolute -top-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1100px] mx-auto px-6 z-10 flex flex-col items-center">
          <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase block mb-3">CONVERSION RECOVERY STARTS NOW</span>
          
          <h2 className="font-extrabold tracking-tight mb-4 max-w-[800px] leading-tight" style={{ fontSize: 'clamp(24px, 4.5vw, 42px)' }}>
            리디자인 전에, 지금 홈페이지의<br />전환 문제부터 확인하세요
          </h2>
          
          <p className="text-xs sm:text-base text-slate-400 font-medium max-w-[550px] mb-8 leading-relaxed">
            Viewport가 고객사가 지각하는 실제 화면 영역에서 이탈과 망설임을 야기하고 신용과 연락을 차단하는 UI 장애 마찰들을 전원 소거해 드립니다.
          </p>

          <button
            onClick={() => scrollToSection('diagnosis-form')}
            className="flex items-center gap-2 font-sans font-bold text-sm text-[#111111] bg-white hover:bg-indigo-50 py-3.5 px-8 rounded-2xl transition-all shadow-xl hover:translate-y-[-1px] cursor-pointer"
          >
            <span>내 홈페이지 진단 시작하기</span>
            <ArrowRight className="w-4 h-4 text-[#1a1a1a]" />
          </button>

          <span className="text-[11px] text-slate-500 font-medium mt-4">
            * 오직 URL 주소 기재만으로 24시간 피드백 실천 체크리스트 완수 가능
          </span>
        </div>
      </section>

      {/* --- Section 14: Balanced Footer --- */}
      <footer 
        id="app-full-footer"
        className="text-slate-400 bg-slate-950 border-t border-slate-900 py-12 px-6 md:px-10 font-sans tracking-wide select-none"
      >
        <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10 text-left">
          
          {/* Logo Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 text-white w-6 h-6 rounded-lg flex items-center justify-center font-bold">
                <Eye className="w-3.5 h-3.5" />
              </div>
              <span className="font-sans font-extrabold text-[18px] text-white tracking-tight">
                Viewport<span className="text-[#786EF1]">.</span>
              </span>
            </div>
            <p className="text-[12px] text-slate-500 leading-relaxed max-w-[320px]">
              AI UX/UI 전환 최적화 진단 리포트 전문 뷰포트.<br />
              고객사의 전환 저항 지점들을 명백히 다뤄 광고 집행 수익률(ROAS)을 정조준 보호합니다.
            </p>
          </div>

          {/* Quick links block */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3">Service Menu</h4>
            <ul className="text-[12px] space-y-2 text-slate-500">
              <li><button onClick={() => scrollToSection('problem-section')} className="hover:text-white cursor-pointer">서비스 가치 진단</button></li>
              <li><button onClick={() => scrollToSection('solution-section')} className="hover:text-white cursor-pointer">분석 세부 기둥</button></li>
              <li><button onClick={() => scrollToSection('target-section')} className="hover:text-white cursor-pointer">업종별 카테고리 기틀</button></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3">Premium Package</h4>
            <ul className="text-[12px] space-y-2 text-slate-500">
              <li><button onClick={() => scrollToSection('pricing-section')} className="hover:text-white cursor-pointer">기본 진단 보고 (99,000₩)</button></li>
              <li><button onClick={() => scrollToSection('pricing-section')} className="hover:text-white cursor-pointer">상세 진단 완수 (199,000₩)</button></li>
              <li><button onClick={() => scrollToSection('diagnosis-form')} className="hover:text-white cursor-pointer">무료 진단 스냅샷 렌더링</button></li>
            </ul>
          </div>

        </div>

        <div className="w-full h-[1px] bg-slate-900 mb-6" />

        <div className="w-full max-w-[1100px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-slate-600">
          <span>© 2026 Viewport Inc. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); triggerToast('개인정보 처리방침 안내'); }} className="hover:text-slate-400">개인정보 처리방침</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); triggerToast('이용 약관 안내'); }} className="hover:text-slate-400">서비스 이용약관</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
