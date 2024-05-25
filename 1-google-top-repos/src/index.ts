import axios from 'axios';

interface Repository {
  name: string;
  stargazers_count: number;
}


const fetchTopReposRest = async (): Promise<void> => {
  const url = 'https://api.github.com/users/google/repos';
  const token = 'tu_token_de_github_aquí'; // Replace with your GitHub token

  try {
    let allRepos: Repository[] = [];
    let page = 1;
    let fetchMore = true;

    while (fetchMore) {
      const response = await axios.get<Repository[]>(url, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `Bearer ${token}`
        },
        params: {
          sort: 'full_name',
          direction: 'desc',
          per_page: 100,
          page: page
        }
      });
      allRepos = allRepos.concat(response.data);
      fetchMore = response.data.length === 100;
      page += 1;
    }
    const sortedRepos = allRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    const topRepos = sortedRepos.slice(0, 10);
    console.log('\nTop 10 Repositories of Google on GitHub (REST):');
    topRepos.forEach((repo, index) => {
      console.log(`${index + 1}. ${repo.name} - Stars: ${repo.stargazers_count}`);
    });

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


const fetchTopReposGraphQL = async () => {
    const url = 'https://api.github.com/graphql';
    const token = 'tu_token_de_github_aquí'; // Replace with your GitHub token
    const query = `
      {
        organization(login: "google") {
          repositories(first: 10, orderBy: {field: STARGAZERS, direction: DESC}) {
            edges {
              node {
                name
                stargazers {
                  totalCount
                }
              }
            }
          }
        }
      }
    `;

    try {
        const response = await axios({
            url: url,
            method: 'post',
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                query: query
            }
        });

        const repos = response.data.data.organization.repositories.edges;
        console.log('\nTop 10 Repositories of Google on GitHub (GraphQL):');
        repos.forEach((repo: any, index: number) => {
            console.log(`${index + 1}. ${repo.node.name} - Stars: ${repo.node.stargazers.totalCount}`);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


fetchTopReposRest();


fetchTopReposGraphQL();
