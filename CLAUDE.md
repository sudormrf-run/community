# SUDO REMOVE Community 사이트 프로젝트

## 프로젝트 개요

SUDO REMOVE 브랜드의 공식 커뮤니티 사이트 구축 프로젝트입니다. 함께 만들고 바로 따라할 수 있는 AI 프로젝트를 중심으로 한 통합 플랫폼을 목표로 합니다.

### 브랜드 정보
- **브랜드명**: SUDO REMOVE
- **현재 슬로건**: "AI의 문턱을 낮추다"
- **로고 텍스트**: `sudo rm -rf_` (커서 포함)
- **활동 채널**: 
  - YouTube: @sudoremove
  - GitHub: sudormrf-run
  - Blog: sudormrf.run
- **브랜드 색상**: 
  - Primary: Orange (#fd7318)
  - Secondary: Green (#43d6a8)
  - Dark theme 기반
  - 코드 폰트: JetBrains Mono

## 사이트 구조

### 1. 랜딩 페이지
- SUDO REMOVE 브랜드 소개
- 우리가 하는 일 (커뮤니티, 오픈소스, 컨설팅)
- YouTube 콘텐츠 임베드 (팟캐스트, 미니 다큐)
- On Going Projects

### 2. Documentation 페이지
- MDX 기반 문서
- Physical AI (HuggingFace LeRobot 기반) 튜토리얼
- LLM 강의 (파인튜닝 과정 외부 링크)

### 3. 게시판
- GitHub Discussions로 직접 연결
- Organization 레벨 Discussions 활용

### 4. 행사 Archive
- 역대 행사 갤러리
- 예정된 행사 안내

### 5. People 페이지
- SUDO REMOVE를 함께 만들어가는 사람들 소개
- 커뮤니티 참여 유도

### 6. 외부 링크
- Shop (Coming Soon)
- Blog (sudormrf.run)

## 기술 스택

- **프레임워크**: Astro v5.11.0
- **호스팅**: GitHub Pages (https://sudoremove.github.io/community)
- **게시판**: GitHub Discussions 직접 연동
- **문서**: MDX (@astrojs/mdx v4.3.0)
- **스타일**: Dark theme + JetBrains Mono 폰트
- **CI/CD**: GitHub Actions (계획됨)
- **외부 연동**: Slack, Discord, 카카오톡 (계획됨)

## 주요 기능

### 1. 콘텐츠 관리
- MDX 기반 문서 작성 및 관리
- YouTube 콘텐츠 임베드
- 갤러리 형태의 행사 아카이브

### 2. 커뮤니티 기능
- GitHub Discussions 직접 연결
- People 페이지를 통한 커뮤니티 빌딩

### 3. 자동화 시스템 (계획)
- GitHub Actions를 통한 외부 채널 연동
  - 새 게시글 알림 (Slack, Discord, 카카오톡)
- 주간 뉴스레터 자동 발행

## 구현 현황

### Phase 1: 기본 구조 구축 ✅ (완료)
1. Astro 프로젝트 초기 설정 ✅
2. 기본 페이지 레이아웃 구성 ✅
3. GitHub Pages 배포 설정 ✅

### Phase 2: 콘텐츠 시스템 🟡 (진행중)
1. MDX 문서 시스템 구축 ✅
2. Physical AI 튜토리얼 페이지 개발 🟡 (구조만 구현)
3. LLM 강의 외부 링크 연결 ✅

### Phase 3: 커뮤니티 기능 ✅ (완료)
1. GitHub Discussions 연동 ✅
2. 행사 갤러리 페이지 개발 ✅
3. YouTube 콘텐츠 임베드 ✅
4. People 페이지 추가 ✅

### Phase 4: 자동화 및 통합 ❌ (예정)
1. GitHub Actions 워크플로우 설정
2. 외부 채널 연동 (Slack, Discord, 카카오톡)
3. 뉴스레터 자동화 시스템 구축

## TODO List

### 완료된 작업 ✅
- [x] Astro 프로젝트 초기화
- [x] 기본 페이지 구조 설계 및 구현
- [x] UI/UX 디자인 시스템 결정 (Dark theme + 브랜드 색상)
- [x] MDX 콘텐츠 구조 설계
- [x] GitHub Discussions 연동
- [x] 갤러리 컴포넌트 개발
- [x] 반응형 디자인 구현
- [x] YouTube 콘텐츠 임베드
- [x] People 페이지 구현
- [x] 네비게이션 통일 (sudo rm -rf_ 스타일)

### 진행 예정 작업 📋
- [ ] Physical AI 튜토리얼 콘텐츠 작성
- [ ] 실제 행사 데이터로 갤러리 업데이트
- [ ] GitHub Actions 워크플로우 설계 및 구현
- [ ] 외부 채널 알림 연동 (Slack, Discord, 카카오톡)
- [ ] 뉴스레터 템플릿 및 자동화 시스템
- [ ] SEO 최적화 (sitemap, Open Graph)
- [ ] Shop 페이지 오픈

## 질문 및 확인 사항

1. **디자인 시스템**: 특정 디자인 가이드라인이나 참고할 사이트가 있나요?
2. **행사 갤러리**: 행사 정보를 어떤 형식으로 관리할 예정인가요? (JSON, MDX, CMS 등)
3. **뉴스레터**: 어떤 이메일 서비스를 사용할 예정인가요? (Mailchimp, SendGrid 등)
4. **카카오톡 연동**: 카카오톡 알림은 어떤 방식으로 구현할 예정인가요? (카카오워크, 채널톡 등)

## 현재 구현된 기능

### 1. 페이지 구조
- **홈 페이지**: 
  - SUDO REMOVE 히어로 섹션
  - 우리가 하는 일 (커뮤니티, 오픈소스, 컨설팅)
  - YouTube 콘텐츠 (팟캐스트, 미니 다큐)
  - On Going Projects
- **문서 페이지**: 
  - Physical AI (LeRobot 튜토리얼)
  - LLM 강의 (파인튜닝 과정 링크)
- **게시판**: GitHub Discussions 직접 연결
- **행사 아카이브**: 예정된 행사, 지난 행사
- **People**: 팀 멤버 소개

### 2. 디자인 및 UX
- Dark theme 기반 디자인
- 브랜드 색상 적용 (Orange, Green)
- JetBrains Mono 코드 폰트
- 반응형 레이아웃
- 통일된 네비게이션 (sudo rm -rf_ 스타일)

### 3. 기술적 구현
- Astro + MDX 설정 완료
- GitHub Pages 배포 구성
- CSS Variables를 활용한 테마 시스템
- Content Collections 구성
- YouTube iframe 임베드

## 추가 제안사항

1. **콘텐츠 우선순위**: Physical AI 튜토리얼 콘텐츠 작성에 집중
2. **SEO 최적화**: Sitemap 생성, Open Graph 태그 추가
3. **검색 기능**: 문서 검색을 위한 Pagefind 또는 유사 도구 통합
4. **Analytics**: Google Analytics 또는 Plausible 통합
5. **실제 YouTube 영상 ID**: 현재 임베드된 YouTube 콘텐츠의 실제 영상 ID로 교체 필요

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.