const query = `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = process.env.PAT_1 || process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).json({
      error: 'GitHub token is not configured. Add PAT_1 to the portfolio Vercel project.'
    });
  }

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github+json',
        'User-Agent': 'SahilCodeLab-Portfolio'
      },
      body: JSON.stringify({
        query,
        variables: { login: 'SahilCodeLab' }
      })
    });

    const result = await response.json();

    if (!response.ok || result.errors?.length) {
      console.error('GitHub GraphQL Error:', result.errors || result);
      return res.status(response.ok ? 502 : response.status).json({
        error: 'GitHub API request failed',
        details: result.errors?.[0]?.message || 'Unknown GitHub API error'
      });
    }

    const calendar = result.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return res.status(404).json({ error: 'GitHub contribution calendar not found' });
    }

    const contributions = calendar.weeks.flatMap((week) => week.contributionDays);

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({
      contributions,
      totalContributions: calendar.totalContributions
    });
  } catch (error) {
    console.error('GitHub Contributions Error:', error);
    return res.status(500).json({
      error: 'Unable to load GitHub contributions'
    });
  }
}
