export interface Discussion {
  id: string;
  title: string;
  body: string;
  bodyHTML: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  number: number;
  author: {
    login: string;
    avatarUrl: string;
  };
  category: {
    name: string;
    emoji: string;
  };
  comments: {
    totalCount: number;
  };
}

const GITHUB_API = 'https://api.github.com/graphql';

export async function fetchDiscussions(): Promise<Discussion[]> {
  const query = `
    query {
      repository(owner: "sudormrf-run", name: "community") {
        discussions(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}) {
          nodes {
            id
            title
            body
            bodyHTML
            createdAt
            updatedAt
            url
            number
            author {
              login
              avatarUrl
            }
            category {
              name
              emoji
            }
            comments {
              totalCount
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(GITHUB_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Public API access without token
      },
      body: JSON.stringify({ query })
    });

    if (!response.ok) {
      console.error('GitHub API error:', response.status);
      return [];
    }

    const data = await response.json();
    return data.data?.repository?.discussions?.nodes || [];
  } catch (error) {
    console.error('Failed to fetch discussions:', error);
    return [];
  }
}

export async function fetchDiscussion(number: number): Promise<Discussion | null> {
  const query = `
    query {
      repository(owner: "sudormrf-run", name: "community") {
        discussion(number: ${number}) {
          id
          title
          body
          bodyHTML
          createdAt
          updatedAt
          url
          number
          author {
            login
            avatarUrl
          }
          category {
            name
            emoji
          }
          comments {
            totalCount
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(GITHUB_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query })
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.data?.repository?.discussion || null;
  } catch (error) {
    console.error('Failed to fetch discussion:', error);
    return null;
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  
  if (minutes < 1) return '방금 전';
  if (minutes < 60) return `${minutes}분 전`;
  if (hours < 24) return `${hours}시간 전`;
  if (days < 7) return `${days}일 전`;
  
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}