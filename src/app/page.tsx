import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "SRE 기반의 클라우드 인프라 및 CI/CD 파이프라인 구축",
    desc: "NCP와 Docker를 활용하여 배포 과정을 자동화하고, 무중단 배포 및 인프라 모니터링 환경을 구축한 프로젝트",
    skills: ["Linux", "Next.js", "Tailwind CSS", "Docker", "GitHub Actions", "NCP"],
    goal: "CI/CD 자동화 인프라 구축을 통한 배포 리드타임 단축 및 SRE 핵심 메커니즘 구조적 이해",
    result: "-",
    progress: [
      { phase: "기획/설계", value: 70 },
      { phase: "개발 완료", value: 40 },
      { phase: "최적화 및 QA", value: 0 }
    ],
    link: "https://github.com/jjyundev/web-cicd"
  },
  {
    id: 2,
    title: "-",
    desc: "-",
    skills: ["-"],
    goal: "-",
    result: "-",
    progress: [
      { phase: "-", value: 100 }
    ],
    link: "https://github.com"
  },
  {
    id: 3,
    title: "-",
    desc: "-",
    skills: ["-"],
    goal: "-",
    result: "-",
    progress: [
      { phase: "-", value: 100 }
    ],
    link: "https://github.com"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white text-zinc-900 selection:bg-zinc-200">
      
      {/* 고정 네비게이션 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold tracking-tight text-lg">JJYUNDEV.</a>
          <div className="flex gap-6 text-sm font-medium text-zinc-600">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero 섹션 */}
      <section className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-16">
        <div className="max-w-4xl">
          <p className="text-zinc-400 font-medium tracking-wider uppercase text-sm mb-4">Senior Engineer</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            복잡함을 덜어내고 <br />
            <span className="text-zinc-400">본질에 집중하는</span> 개발자입니다.
          </h1>
          <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
            충남대학교 컴퓨터융합학부에서 사용자 중심의 창의적인 아이디어를 
            견고한 코드로 융합하는 개발자입니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 bg-zinc-900 text-white font-medium text-sm rounded-lg hover:bg-zinc-800 transition-all shadow-sm">
              Explore Work
            </a>
            <a href="#contact" className="px-6 py-3 bg-zinc-100 text-zinc-900 font-medium text-sm rounded-lg hover:bg-zinc-200 transition-all">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About & Skills 섹션 */}
      <section id="about" className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-12">01. About & Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* 프로필 및 약력 */}
            <div className="md:col-span-1 space-y-6">
              <div className="w-32 h-32 bg-zinc-200 rounded-2xl overflow-hidden filter grayscale contrast-125">
                <Image 
                src="/images/profileImg.jpg" 
                alt="profile"
                width={128} 
                height={128}
                className="w-full h-full object-cover"
                priority />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">장지윤</h3>
                <p className="text-sm text-zinc-500 mb-4">Cheonan, South Korea</p>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  여러 프로젝트에서 사용자 중심의 제품을 만들어왔습니다. 성능 최적화와 자동화에 흥미가 많습니다.
                </p>
              </div>
            </div>

            {/* 기술 스택 */}
            <div className="md:col-span-2 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">Frontend</h4>
                <ul className="space-y-2 text-zinc-700 font-medium">
                  <li>JavaScript / TypeScript</li>
                  <li>React / Next.js</li>
                  <li>Tailwind CSS / Emotion</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">DevOps & Tools</h4>
                <ul className="space-y-2 text-zinc-700 font-medium">
                  <li>Git / GitHub Actions</li>
                  <li>Docker / NCP</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects 섹션 */}
      <section id="projects" className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-16">02. Selected Projects</h2>
        
        <div className="space-y-24">
          {projects.map((project) => (
            <div key={project.id} className="group border-b border-zinc-100 pb-16 last:border-0 last:pb-0">
              <div className="grid md:grid-cols-12 gap-8">
                {/* 프로젝트 기본 소개 */}
                <div className="md:col-span-5 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-zinc-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="px-2.5 py-1 bg-zinc-100 text-zinc-600 rounded text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold border-b-2 border-zinc-900 pb-0.5 hover:text-zinc-500 hover:border-zinc-300 transition-all">
                      Go to GitHub Repository →
                    </a>
                  </div>
                </div>

                {/* 상세 목표, 성과 및 과정 그래프 */}
                <div className="md:col-span-7 bg-zinc-50 p-6 md:p-8 rounded-2xl space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase mb-1">Goal</h4>
                    <p className="text-sm text-zinc-800 font-medium">{project.goal}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase mb-1">Result</h4>
                    <p className="text-sm text-zinc-800 font-medium">{project.result}</p>
                  </div>
                  
                  {/* 과정 진행 그래프 */}
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase mb-3">Project Progress</h4>
                    <div className="space-y-3">
                      {project.progress.map((prog, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-xs font-medium text-zinc-600">
                            <span>{prog.phase}</span>
                            <span>{prog.value}%</span>
                          </div>
                          <div className="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
                            <div 
                              className="bg-zinc-800 h-1.5 rounded-full transition-all duration-1000" 
                              style={{ width: `${prog.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact 섹션 (Footer 겸용) */}
      <section id="contact" className="bg-zinc-900 text-zinc-400 py-24 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">03. Contact</h2>
          <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight max-w-lg mx-auto">
            제품의 본질에 집중하며, 임팩트 있는 성장을 함께할 팀을 기다립니다.
          </p>
          
          {/* 주요 CTA (이메일 발송) */}
          <div className="pt-4">
            <a href="mailto:wldbs838@gmail.com" className="inline-block px-8 py-4 bg-white text-zinc-900 font-semibold rounded-xl hover:bg-zinc-100 transition-all shadow-md">
              Email Me (wldbs838@gmail.com)
            </a>
          </div>

          {/* 소셜 및 소스 링크 */}
          <div className="flex justify-center gap-6 pt-4 text-sm font-medium">
            <a href="https://github.com/jjyundev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>

          <p className="text-xs text-zinc-600 pt-12">
            © {new Date().getFullYear()} jjyundev.
          </p>
        </div>
      </section>

    </div>
  );
}