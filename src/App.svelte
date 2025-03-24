<script>
  import { onMount } from 'svelte';
  import './App.css';

  let repositories = [];

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
</script>

<div class="App">
  <div class="typeme">
    <span class="text-secondary">milan@hommet.ch </span>
    <span class="text-background">~ </span>
    <span class="cursor">$ </span>me -h
  </div>

  <section class="output">
    <ul class="links">
      <li>
        <a class="github" href="https://github.com/milan144" target="_blank" rel="noopener noreferrer" alt="github">
          GitHub
        </a>
      </li>
      <li>
        <a class="linkedin" href="https://www.linkedin.com/in/milan-hommet-840414315/" target="_blank" rel="noopener noreferrer" alt="linkedin">
          LinkedIn
        </a>
      </li>
    </ul>

    <p>
      Je suis Milan, un développeur fullstack basé en France.
    </p>
    <p>
      Je poursuis actuellement un MBA en développement et management de projets. J'aime apprendre de nouveaux langages et frameworks pendant mon temps libre.
      J'ai un contrat d'alternance chez <a href="https://www.teicee.com/" class='teicee' target="_blank" rel="noopener noreferrer" alt="teicee">Téïcée</a> en tant que développeur fullstack.
    </p>

    <section class="education">
      <h3>Formation</h3>
      <ul>
        <li>2023 - 2025 : MBA - Développeur Fullstack</li>
        <li>2022 - 2023 : BACHELOR - Développeur Web</li>
        <li>2020 - 2022 : BTS SIO - Développement web et logiciel</li>
      </ul>
    </section>

    <section class="experiences">
      <h3>Expériences</h3>
      <ul>
        <li>2022 - aujourd'hui : Développeur Fullstack chez Téïcée</li>
      </ul>
    </section>

    <section class="skills">
      <h3>Compétences</h3>
      <ul>
        <li>Langages de programmation : Python, JavaScript, Typescript, Dart, PHP, C#</li>
        <li>Développement Mobile : Flutter</li>
        <li>Développement Logiciel : Electron</li>
        <li>Développement Web : React, Symfony, VueJS, NextJS, NodeJS</li>
        <li>Bases de données : MySQL, MongoDB</li>
      </ul>
    </section>

    <h3>CV</h3>
    <ul id="cv">
      <li><a href="CV%20MILAN%20HOMMET.pdf">Télécharger mon cv</a></li>
    </ul>

    <h3>Projets</h3>
    <ul id="github-projects">
      {#each repositories as repo}
        <li>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" title={repo.description || "Aucune description disponible"}>
            {repo.name} - {repo.description || "Aucune description disponible"}
          </a>
        </li>
      {/each}
    </ul>
  </section>
</div>
