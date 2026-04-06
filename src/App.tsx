import { useState } from 'react';
import { MapPin, Train, Landmark, Navigation, Copy, Info, ChevronDown, ChevronUp, Languages, ExternalLink } from 'lucide-react';

const App = () => {
  const [activeStep, setActiveStep] = useState(0);

  const addressKR = "부산광역시 부산진구 서면문화로 53번길 7-3";
  const addressEncoded = encodeURIComponent(addressKR);
  
  // Naver Map 連結：搜尋該地址
  const naverMapUrl = `https://map.naver.com/v5/search/${addressEncoded}`;

  const copyToClipboard = (text: string) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("已複製韓文地址，可貼上至地圖使用！");
  };

  const openNaverMap = () => {
    window.open(naverMapUrl, '_blank');
  };

  const steps = [
    {
      id: 1,
      title: "第一站：金海機場出口",
      titleKR: "김해공항 3번 게이트",
      subtitle: "抵達國際線 1 樓 3 號出口",
      color: "bg-blue-500",
      icon: <MapPin className="text-white" />,
      content: [
        "抵達金海機場 (김해국제공항) 1 樓入境大廳。",
        "尋找 3 號出口 (3번 게이트 / Gate 3)。",
        "在出口旁的「釜山銀行 (BNK 부산은행)」或「新韓銀行 (신한은행)」換錢所 (환전소) 換取小額韓元。"
      ],
      tip: "機場匯率較差，建議先換 2 萬韓元作為基本車資。"
    },
    {
      id: 2,
      title: "第二站：機場輕軌 (BGL)",
      titleKR: "부산김해경전철 (공항역)",
      subtitle: "步行至機場站，搭往「沙上」",
      color: "bg-purple-600",
      icon: <Train className="text-white" />,
      content: [
        "踏出 3 號出口，過馬路橫跨機場聯外道路。",
        "順著地上「紫色線條」指示走，抵達輕軌機場站 (공항역)。",
        "使用 T-money 或現金購買前往「沙上站 (사상역)」的車票。",
        "搭乘往「沙上 (사상행 / Sasang)」方向，坐 3 站後下車。"
      ],
      tip: "輕軌是無人駕駛的，建議坐在第一節車廂欣賞風景。"
    },
    {
      id: 3,
      title: "第三站：沙上站轉乘",
      titleKR: "사상역 환승 (2호선)",
      subtitle: "換乘地鐵 2 號線 (綠線)",
      color: "bg-gray-500",
      icon: <Landmark className="text-white" />,
      content: [
        "在輕軌終點站「沙上站 (사상역)」下車並刷卡出站。",
        "沿著連通道走，尋找綠色圓圈「2 號線 (2호선)」標誌。",
        "步行約 5 分鐘後進入地鐵 2 號線沙上站。",
        "搭乘往「西面 (서면) / 萇山 (장산)」方向。"
      ],
      tip: "沙上站轉乘需要走出輕軌建築進入地鐵建築，請跟隨綠色指標。"
    },
    {
      id: 4,
      title: "第四站：抵達西面站",
      titleKR: "서면역 9번 출구",
      subtitle: "前往 9 號出口 (最方便)",
      color: "bg-green-600",
      icon: <Train className="text-white" />,
      content: [
        "地鐵坐 8 站，抵達「西面站 (서면역)」。",
        "跟著指標尋找「9 號出口 (9번 출구)」。",
        "9 號出口設有電扶梯 (에스컬레이터)，帶行李最輕鬆。"
      ],
      tip: "西面站地下街非常大，請先在站內確認 9 號出口方向再出站。"
    },
    {
      id: 5,
      title: "最終站：抵達目的地",
      titleKR: "서면문화로 53번길 7-3",
      subtitle: "步行至文化路 53 番街",
      color: "bg-orange-500",
      icon: <Navigation className="text-white" />,
      content: [
        "從 9 號出口上來後，朝北方直走（直行過第一個路口）。",
        "在右前方看到寬闊的「西面文化路 (서면문화로)」右轉進入。",
        "沿文化路直行，在右手邊巷口「53 番街 (53번길)」轉入。",
        "尋找門牌 7-3 即抵達飯店。"
      ],
      hasMapButton: true,
      tip: "這一區離西面樂天百貨步行僅需 5 分鐘，生活機能極佳。"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-24">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10 p-4 shadow-sm">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Languages className="text-blue-500" /> 釜山導航助手
          </h1>
          <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
            機場 ↔ 西面
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-4">
        {/* Destination Card with Naver Map Link */}
        <div className="bg-gradient-to-br from-indigo-700 to-blue-800 rounded-3xl p-6 text-white shadow-xl">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <p className="text-blue-100 text-[10px] uppercase tracking-widest mb-1 opacity-80">HOTEL ADDRESS</p>
              <h2 className="text-xl font-bold leading-tight mb-1">西面文化路 53番街 7-3</h2>
              <p className="text-blue-200 text-sm font-medium">서면문화로 53번길 7-3</p>
            </div>
            <button 
              onClick={() => copyToClipboard(addressKR)}
              className="bg-white/15 p-2.5 rounded-xl hover:bg-white/25 transition-all active:scale-90"
            >
              <Copy size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-6">
            <button 
              onClick={openNaverMap}
              className="bg-green-500 hover:bg-green-400 text-white py-3 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm shadow-lg transition-all active:scale-95"
            >
              <ExternalLink size={18} /> Naver Map
            </button>
            <div className="bg-white/10 rounded-2xl p-2 px-3 border border-white/10 flex flex-col justify-center">
              <p className="text-[10px] text-blue-200 uppercase">預估車程</p>
              <p className="font-bold text-sm text-white">45-50 分鐘</p>
            </div>
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all ${activeStep === index ? 'ring-2 ring-blue-500/20' : ''}`}
            >
              <button 
                onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                className="w-full text-left p-4 flex items-center gap-4"
              >
                <div className={`${step.color} w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                  {step.icon}
                </div>
                <div className="flex-1 overflow-hidden">
                  <h3 className="font-bold text-slate-800 text-sm md:text-base">{step.title}</h3>
                  <p className="text-blue-600 text-[10px] font-extrabold uppercase tracking-tight mb-0.5">{step.titleKR}</p>
                  <p className="text-slate-500 text-xs truncate">{step.subtitle}</p>
                </div>
                {activeStep === index ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
              </button>

              {activeStep === index && (
                <div className="px-4 pb-5 pt-0 border-t border-slate-100 bg-slate-50/50">
                  <ul className="mt-4 space-y-4">
                    {step.content.map((item, i) => {
                      const parts = item.split(/(\([^)]+\))/g);
                      return (
                        <li key={i} className="flex gap-3 text-sm text-slate-600">
                          <div className="w-5 h-5 bg-white border border-slate-300 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-slate-500 mt-0.5 shadow-sm">
                            {i + 1}
                          </div>
                          <p className="leading-relaxed">
                            {parts.map((p, pi) => p.startsWith('(') ? <span key={pi} className="font-bold text-blue-700 bg-blue-100/50 px-1 rounded mx-0.5">{p}</span> : p)}
                          </p>
                        </li>
                      );
                    })}
                  </ul>

                  {step.hasMapButton && (
                    <div className="mt-6">
                      <button 
                        onClick={openNaverMap}
                        className="w-full bg-slate-800 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
                      >
                        <MapPin size={20} className="text-green-400" /> 點擊開啟 Naver Map 步行導航
                      </button>
                    </div>
                  )}

                  <div className="mt-5 bg-amber-50 border border-amber-100 p-4 rounded-2xl flex gap-3">
                    <Info size={20} className="text-amber-500 flex-shrink-0" />
                    <p className="text-xs text-amber-800 leading-relaxed italic">
                      <span className="font-bold">溫馨提醒：</span> {step.tip}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SOS Helpers */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200">
          <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2 border-b pb-2">
            <Languages size={18} className="text-blue-500" /> 現場求助對照
          </h4>
          <div className="space-y-4">
            <div className="group">
              <p className="text-[10px] text-slate-400 mb-1">請問西面站怎麼走？</p>
              <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center group-active:bg-slate-100">
                <p className="text-sm font-medium text-slate-700">서면역이 어디인가요?</p>
                <Copy size={14} className="text-slate-300" />
              </div>
            </div>
            <div className="group">
              <p className="text-[10px] text-slate-400 mb-1">請帶我去這個地址 (給司機看)</p>
              <div className="p-3 bg-slate-50 rounded-xl group-active:bg-slate-100">
                <p className="text-sm font-bold text-blue-800 mb-1">이 주소로 가주세요:</p>
                <p className="text-xs text-slate-600 bg-white p-2 rounded border border-slate-200">
                  부산진구 서면문화로 53번길 7-3
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-lg border-t z-20">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-4">
          <button 
            onClick={() => copyToClipboard(addressKR)}
            className="bg-slate-100 text-slate-800 py-3.5 rounded-2xl font-bold text-sm active:scale-95 transition-all"
          >
            複製韓文地址
          </button>
          <button 
            onClick={openNaverMap}
            className="bg-green-600 text-white py-3.5 rounded-2xl font-bold text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            開啟 Naver Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;