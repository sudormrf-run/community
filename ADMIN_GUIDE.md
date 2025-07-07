# Sudoremove Community 관리자 가이드

## 목차
1. [프로젝트 구조](#프로젝트-구조)
2. [초기 설정](#초기-설정)
3. [콘텐츠 관리](#콘텐츠-관리)
4. [배포 프로세스](#배포-프로세스)
5. [유지보수](#유지보수)

## 프로젝트 구조

```
community/
├── src/
│   ├── pages/           # 페이지 파일들
│   │   ├── index.astro  # 랜딩 페이지
│   │   ├── docs/        # Documentation 페이지
│   │   ├── archive/     # 행사 아카이브
│   │   └── board/       # 게시판
│   ├── layouts/         # 레이아웃 컴포넌트
│   ├── components/      # 재사용 가능한 컴포넌트
│   └── content/         # MDX 콘텐츠
│       ├── docs/        # 문서 콘텐츠
│       └── events/      # 행사 정보
├── public/              # 정적 파일 (이미지, 폰트 등)
├── astro.config.mjs     # Astro 설정 파일
└── package.json         # 프로젝트 의존성
```

## 초기 설정

### 1. 사전 준비사항
- Node.js 18 이상 설치
- Git 설치
- GitHub 계정

### 2. 프로젝트 설정
```bash
# 1. 저장소 클론
git clone https://github.com/sudoremove/community.git
cd community

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
```

### 3. GitHub Pages 설정
1. GitHub 저장소의 Settings > Pages로 이동
2. Source: "GitHub Actions" 선택
3. 첫 배포 후 URL 확인: `https://sudoremove.github.io/community`

## 콘텐츠 관리

### MDX 문서 작성
1. `src/content/docs/` 디렉토리에 `.mdx` 파일 생성
2. Frontmatter 작성:
```mdx
---
title: "문서 제목"
description: "문서 설명"
date: 2024-01-01
author: "작성자"
tags: ["AI", "Tutorial"]
---

# 문서 내용
```

### 행사 정보 추가
1. `src/content/events/` 디렉토리에 행사 정보 파일 생성
2. 이미지는 `public/images/events/` 디렉토리에 저장

### 게시판 관리
- Giscus 설정은 `src/components/Giscus.astro`에서 관리
- GitHub 저장소의 Discussions 기능 활성화 필요

## 배포 프로세스

### 자동 배포 (권장)
```bash
# main 브랜치에 push하면 자동 배포
git add .
git commit -m "Update: 변경사항 설명"
git push origin main
```

### 수동 배포
```bash
# 1. 빌드
npm run build

# 2. 프리뷰 (선택사항)
npm run preview

# 3. GitHub Actions 수동 실행
# GitHub 저장소 > Actions > Deploy to GitHub Pages > Run workflow
```

## 유지보수

### 일상적인 작업

#### 1. 콘텐츠 업데이트
```bash
# 1. 최신 코드 pull
git pull origin main

# 2. 콘텐츠 수정
# src/content/ 디렉토리에서 작업

# 3. 로컬 테스트
npm run dev

# 4. 커밋 및 푸시
git add .
git commit -m "Content: 업데이트 내용"
git push origin main
```

#### 2. 의존성 업데이트
```bash
# 1. 업데이트 확인
npm outdated

# 2. 안전한 업데이트
npm update

# 3. 주요 버전 업데이트 (주의 필요)
npm install package-name@latest
```

### 문제 해결

#### 빌드 실패 시
1. 로컬에서 빌드 테스트: `npm run build`
2. 에러 메시지 확인 및 수정
3. GitHub Actions 로그 확인

#### 배포 후 페이지가 보이지 않을 때
1. GitHub Pages 설정 확인
2. `astro.config.mjs`의 `base` 경로 확인
3. 브라우저 캐시 삭제 후 재시도

### 백업
```bash
# 전체 백업 (콘텐츠 포함)
git archive --format=zip HEAD > backup-$(date +%Y%m%d).zip
```

## 추가 기능 설정

### Giscus (게시판) 설정
1. https://giscus.app 방문
2. 저장소 설정:
   - Repository: `sudoremove/community`
   - Discussion Category: `General`
3. 생성된 설정값을 `src/components/Giscus.astro`에 적용

### Newsletter 자동화
1. 이메일 서비스 가입 (예: Mailchimp)
2. API 키 발급
3. GitHub Secrets에 API 키 저장
4. `.github/workflows/newsletter.yml` 워크플로우 설정

### 외부 알림 연동
GitHub Actions를 통한 Slack/Discord 알림:
1. 각 서비스의 Webhook URL 생성
2. GitHub Secrets에 URL 저장
3. 워크플로우에 알림 스텝 추가

## 보안 주의사항
- API 키나 비밀번호는 절대 코드에 직접 포함하지 않음
- GitHub Secrets 사용
- `public/` 디렉토리에 민감한 정보 저장 금지

## 연락처
문제 발생 시 다음 채널로 문의:
- GitHub Issues: https://github.com/sudoremove/community/issues
- Email: admin@sudoremove.com (예시)