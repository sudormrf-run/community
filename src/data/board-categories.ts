export interface BoardCategory {
  id: string;
  name: string;
  emoji: string;
  description: string;
  discussionCategoryId: string;
  slug: string;
}

export const boardCategories: BoardCategory[] = [
  {
    id: 'physical-ai',
    name: 'Physical AI',
    emoji: '🤖',
    description: 'HuggingFace LeRobot, 로봇 프로젝트, 하드웨어 제어 관련 토론',
    discussionCategoryId: 'DIC_kwDONjDao84ClXPF', // General 카테고리 ID (나중에 변경 필요)
    slug: 'physical-ai'
  },
  {
    id: 'llm-ai',
    name: 'LLM & AI',
    emoji: '💬',
    description: '언어 모델, AI 기술, 프롬프트 엔지니어링 등',
    discussionCategoryId: 'DIC_kwDONjDao84ClXPF',
    slug: 'llm-ai'
  },
  {
    id: 'tutorials',
    name: '학습 자료',
    emoji: '📚',
    description: '튜토리얼, 강의 자료, 유용한 리소스 공유',
    discussionCategoryId: 'DIC_kwDONjDao84ClXPF',
    slug: 'tutorials'
  },
  {
    id: 'projects',
    name: '프로젝트',
    emoji: '💡',
    description: '개인/팀 프로젝트 소개, 협업 제안, 피드백',
    discussionCategoryId: 'DIC_kwDONjDao84ClXPF',
    slug: 'projects'
  },
  {
    id: 'general',
    name: '자유게시판',
    emoji: '💭',
    description: '일반적인 토론, 질문, 커뮤니티 소식',
    discussionCategoryId: 'DIC_kwDONjDao84ClXPF',
    slug: 'general'
  }
];