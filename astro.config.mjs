// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://sudoremove.github.io',
  base: '/community',
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: [
    starlight({
      title: 'Sudoremove Docs',
      description: 'AI의 문턱을 낮추는 Sudoremove 문서',
      social: [
        { link: 'https://github.com/sudormrf-run/community', icon: 'github' },
      ],
      sidebar: [
        {
          label: 'Physical AI',
          items: [
            { label: '개요', link: '/physical-ai/overview' },
            {
              label: 'LeRobot',
              items: [
                { label: '소개', link: '/physical-ai/lerobot/intro' },
                { label: '시작하기', link: '/physical-ai/lerobot/getting-started' },
                { label: '하드웨어 가이드', link: '/physical-ai/lerobot/hardware' },
                { label: '핵심 개념', link: '/physical-ai/lerobot/concepts' },
                { label: '튜토리얼', link: '/physical-ai/lerobot/tutorials' },
                { label: '고급 주제', link: '/physical-ai/lerobot/advanced' },
                { label: '리소스', link: '/physical-ai/lerobot/resources' },
              ],
            },
          ],
        },
        {
          label: 'LLM 강의',
          items: [
            { label: '기초', link: '/llm/basics' },
            { label: '고급', link: '/llm/advanced' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
      defaultLocale: 'ko',
      locales: {
        ko: {
          label: '한국어',
        },
      },
    }),
    mdx()
  ]
});
