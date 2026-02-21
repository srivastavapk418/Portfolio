import { useState, useEffect } from 'react';
import axios from 'axios';

const GITHUB_USER = 'srivastavapk418';

export function useGitHub() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          axios.get(`https://api.github.com/users/${GITHUB_USER}`),
          axios.get(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=8`)
        ]);
        setUser(userRes.data);
        const repoData = reposRes.data;
        const totalStars = repoData.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
        setRepos({ list: repoData, totalStars });
      } catch (err) {
        setError('GitHub API rate limit reached. View profile directly.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { user, repos, loading, error };
}
