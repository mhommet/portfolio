import { onMount } from 'svelte';

export let repositories = [];

onMount(async () => {
  const username = "mhommet";
  const repoCount = 10;
  const apiUrl = `https://api.github.com/users/${username}/repos?per_page=${repoCount}&sort=updated`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Failed to fetch repositories');

    repositories = await response.json();
  } catch (error) {
    console.error('Error fetching repositories:', error);
  }
});
