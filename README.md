# SUDO REMOVE Community

SUDO REMOVE 브랜드의 공식 커뮤니티 사이트입니다. 함께 만들고 바로 따라할 수 있는 AI 프로젝트 플랫폼을 제공합니다.

## 🚀 프로젝트 개요

- **브랜드**: SUDO REMOVE
- **슬로건**: "AI의 문턱을 낮추다"
- **URL**: https://sudoremove.github.io/community
- **YouTube**: [@sudoremove](https://youtube.com/@sudoremove)
- **GitHub**: [sudormrf-run](https://github.com/sudormrf-run)

## 📁 프로젝트 구조

```text
/
├── public/             # 정적 자산
│   └── sudormrf.jpg   # 로고 이미지
├── src/
│   ├── content/       # MDX 콘텐츠
│   │   ├── config.ts
│   │   └── docs/      # 문서 콘텐츠
│   │       └── physical-ai/  # Physical AI 튜토리얼
│   ├── layouts/       # 레이아웃 컴포넌트
│   │   ├── Layout.astro
│   │   └── DocsLayout.astro
│   ├── pages/         # 페이지 라우트
│   │   ├── index.astro      # 홈
│   │   ├── docs/            # 문서
│   │   ├── archive/         # 행사
│   │   ├── events/          # 행사 (리다이렉트)
│   │   └── people/          # People
│   └── styles/        # 스타일 파일
└── astro.config.mjs   # Astro 설정
```

## 🎨 주요 기능

### 구현 완료 ✅
- 다크 테마 기반 UI/UX
- 반응형 디자인
- MDX 기반 문서 시스템
- YouTube 콘텐츠 임베드 (팟캐스트, 미니 다큐)
- GitHub Discussions 연동 게시판
- 행사 갤러리 페이지
- People 페이지
- GitHub Pages 배포

### 개발 예정 📋
- Physical AI 튜토리얼 콘텐츠 확충
- GitHub Actions 자동화
- 외부 채널 알림 (Slack, Discord, 카카오톡)
- Shop 페이지 오픈

## 🛠️ 개발 환경 설정

### 필수 요구사항
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:4321)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 🎨 브랜드 색상

- **Primary**: `#fd7318` (Orange)
- **Secondary**: `#43d6a8` (Green)
- **Background**: `#0d030f` (Dark)
- **Accent Colors**: 
  - `#5fadfe` (Blue)
  - `#c21829` (Red)
  - `#fde471` (Yellow)
  - `#fefca8` (Light Yellow)

## 📝 콘텐츠 작성 가이드

### MDX 문서 추가
1. `src/content/docs/` 디렉토리에 `.mdx` 파일 생성
2. Frontmatter에 제목과 설명 추가
3. MDX 문법으로 콘텐츠 작성

### 행사 정보 추가
1. `src/pages/archive/index.astro` 파일 수정
2. 행사 데이터 배열에 새 항목 추가
3. 행사 이미지는 `public/images/events/`에 저장

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.



