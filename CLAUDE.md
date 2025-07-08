# Sudoremove Community 사이트 프로젝트

## 프로젝트 개요

Sudoremove 브랜드의 공식 커뮤니티 사이트 구축 프로젝트입니다. AI 교육과 커뮤니티 활동을 중심으로 한 통합 플랫폼을 목표로 합니다.

### 브랜드 정보
- **브랜드명**: Sudoremove
- **현재 슬로건**: "AI의 문턱을 낮추다"
- **활동 채널**: YouTube 채널 운영 중
- **브랜드 색상**: 
  - Primary: Orange (#fd7318)
  - Secondary: Green (#43d6a8)
  - Dark theme 기반

## 사이트 구조

### 1. 랜딩 페이지
- 브랜드 소개
- 주요 활동 하이라이트
- 최신 소식 및 공지

### 2. Documentation 페이지
- MDX 기반 문서
- Physical AI (HuggingFace LeRobot 기반) 튜토리얼
- LLM 강의 아카이브

### 3. 게시판
- Giscus 기반 커뮤니티 게시판
- GitHub Issues 연동

### 4. 행사 Archive
- 역대 행사 갤러리
- 예정된 행사 안내
- 행사 사진 및 리뷰

### 5. 외부 링크
- Shop (외부 연결)
- Blog (외부 연결)

## 기술 스택

- **프레임워크**: Astro v5.11.0
- **호스팅**: GitHub Pages (https://sudoremove.github.io/community)
- **게시판**: Giscus (구현 완료)
- **문서**: MDX (@astrojs/mdx v4.3.0)
- **CI/CD**: GitHub Actions (계획됨)
- **외부 연동**: Slack, Discord, 카카오톡 (계획됨)

## 주요 기능

### 1. 콘텐츠 관리
- MDX 기반 문서 작성 및 관리
- 갤러리 형태의 행사 아카이브

### 2. 커뮤니티 기능
- Giscus 기반 게시판
- 댓글 및 토론 기능

### 3. 자동화 시스템
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
3. LLM 강의 아카이브 구성 🟡 (구조만 구현)

### Phase 3: 커뮤니티 기능 ✅ (완료)
1. Giscus 게시판 통합 ✅
2. 행사 갤러리 페이지 개발 ✅

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
- [x] Giscus 설정 및 통합
- [x] 갤러리 컴포넌트 개발
- [x] 반응형 디자인 구현

### 진행 예정 작업 📋
- [ ] Physical AI 튜토리얼 콘텐츠 작성
- [ ] LLM 강의 아카이브 콘텐츠 추가
- [ ] 실제 행사 데이터로 갤러리 업데이트
- [ ] GitHub Actions 워크플로우 설계 및 구현
- [ ] 외부 채널 알림 연동 (Slack, Discord, 카카오톡)
- [ ] 뉴스레터 템플릿 및 자동화 시스템
- [ ] SEO 최적화 (sitemap, Open Graph)
- [ ] YouTube 채널 콘텐츠 연동

## 질문 및 확인 사항

1. **디자인 시스템**: 특정 디자인 가이드라인이나 참고할 사이트가 있나요?
2. **행사 갤러리**: 행사 정보를 어떤 형식으로 관리할 예정인가요? (JSON, MDX, CMS 등)
3. **뉴스레터**: 어떤 이메일 서비스를 사용할 예정인가요? (Mailchimp, SendGrid 등)
4. **카카오톡 연동**: 카카오톡 알림은 어떤 방식으로 구현할 예정인가요? (카카오워크, 채널톡 등)
5. **Shop/Blog 링크**: 외부 사이트의 URL을 알려주실 수 있나요?
6. **YouTube 연동**: YouTube 채널의 콘텐츠를 사이트에 표시할 계획이 있나요?

## 현재 구현된 기능

### 1. 페이지 구조
- **홈 페이지**: 히어로 섹션, 주요 기능 소개, 현재 포커스 (HuggingFace LeRobot)
- **문서 페이지**: Physical AI, LLM 강의 섹션 구조
- **게시판**: Giscus 기반 토론 시스템 (4개 카테고리)
- **행사 아카이브**: 예정된 행사, 지난 행사, 사진 갤러리

### 2. 디자인 및 UX
- Dark theme 기반 디자인
- 브랜드 색상 적용 (Orange, Green)
- 반응형 레이아웃
- 일관된 네비게이션 및 푸터

### 3. 기술적 구현
- Astro + MDX 설정 완료
- GitHub Pages 배포 구성
- CSS Variables를 활용한 테마 시스템
- Content Collections 구성

## 추가 제안사항

1. **콘텐츠 우선순위**: Physical AI 튜토리얼과 LLM 강의 콘텐츠 작성에 집중
2. **SEO 최적화**: Sitemap 생성, Open Graph 태그 추가
3. **검색 기능**: 문서 검색을 위한 Pagefind 또는 유사 도구 통합
4. **Analytics**: Google Analytics 또는 Plausible 통합
5. **YouTube 연동**: 최신 비디오 표시 위젯 추가
