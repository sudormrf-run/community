# Sudoremove Community 사이트 프로젝트

## 프로젝트 개요

Sudoremove 브랜드의 공식 커뮤니티 사이트 구축 프로젝트입니다. AI 교육과 커뮤니티 활동을 중심으로 한 통합 플랫폼을 목표로 합니다.

### 브랜드 정보
- **브랜드명**: Sudoremove
- **현재 슬로건**: "모든 사람이 AI를 누릴 수 있도록 하는 것"
- **활동 채널**: YouTube 채널 운영 중

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

- **프레임워크**: Astro
- **호스팅**: GitHub Pages
- **게시판**: Giscus
- **문서**: MDX
- **CI/CD**: GitHub Actions
- **외부 연동**: Slack, Discord, 카카오톡

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

## 구현 계획

### Phase 1: 기본 구조 구축
1. Astro 프로젝트 초기 설정
2. 기본 페이지 레이아웃 구성
3. GitHub Pages 배포 설정

### Phase 2: 콘텐츠 시스템
1. MDX 문서 시스템 구축
2. Physical AI 튜토리얼 페이지 개발
3. LLM 강의 아카이브 구성

### Phase 3: 커뮤니티 기능
1. Giscus 게시판 통합
2. 행사 갤러리 페이지 개발

### Phase 4: 자동화 및 통합
1. GitHub Actions 워크플로우 설정
2. 외부 채널 연동 (Slack, Discord, 카카오톡)
3. 뉴스레터 자동화 시스템 구축

## TODO List

- [ ] Astro 프로젝트 초기화
- [ ] 기본 페이지 구조 설계
- [ ] UI/UX 디자인 시스템 결정
- [ ] MDX 콘텐츠 구조 설계
- [ ] Giscus 설정 및 통합 방안
- [ ] 갤러리 컴포넌트 개발 방안
- [ ] GitHub Actions 워크플로우 설계
- [ ] 뉴스레터 템플릿 및 자동화 방안

## 질문 및 확인 사항

1. **디자인 시스템**: 특정 디자인 가이드라인이나 참고할 사이트가 있나요?
2. **행사 갤러리**: 행사 정보를 어떤 형식으로 관리할 예정인가요? (JSON, MDX, CMS 등)
3. **뉴스레터**: 어떤 이메일 서비스를 사용할 예정인가요? (Mailchimp, SendGrid 등)
4. **카카오톡 연동**: 카카오톡 알림은 어떤 방식으로 구현할 예정인가요? (카카오워크, 채널톡 등)
5. **Shop/Blog 링크**: 외부 사이트의 URL을 알려주실 수 있나요?
6. **YouTube 연동**: YouTube 채널의 콘텐츠를 사이트에 표시할 계획이 있나요?

## 추가 제안사항

1. **SEO 최적화**: Astro의 SEO 기능을 활용한 검색 엔진 최적화
2. **다국어 지원**: 향후 글로벌 확장을 위한 i18n 고려
3. **Analytics**: Google Analytics 또는 유사 도구 통합
4. **PWA**: Progressive Web App 기능 추가 고려
