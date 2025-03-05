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
      I'm a software developer based in France, specializing in software and mobile development but I'm also interested in game development.
    </p>
    <p>
      I'm currently pursuing an MBA in development and management. I like to learn new languages and frameworks in my free time.
      I have a work-study contract at <a href="https://www.teicee.com/" class='teicee' target="_blank" rel="noopener noreferrer" alt="teicee">Téïcée</a> as a backend developer.
    </p>
    <p>
      I'm always looking for new challenges and opportunities, so feel free to contact me. I'm open to new projects and collaborations.
    </p>

    <section class="education">
      <h3>Education</h3>
      <ul>
        <li>2023 - 2025 : Master degree - Fullstack developer</li>
        <li>2022 - 2023 : Bachelor degree - Web developer</li>
        <li>2020 - 2022 : BTEC Higher National Diploma - web and software development</li>
      </ul>
    </section>

    <section class="experiences">
      <h3>Experiences</h3>
      <ul>
        <li>2022 - today : Fullstack Developer at Téïcée</li>
      </ul>
    </section>

    <section class="skills">
      <h3>Skills</h3>
      <ul>
        <li>Programming Languages: Python, JavaScript, Typescript, Dart, PHP</li>
        <li>Mobile Development: Flutter, React Native</li>
        <li>Software Development: Electron</li>
        <li>Web Development: React, Symfony, VueJS, NextJS, NodeJS</li>
        <li>Databases: MySQL, MongoDB, Microsoft SQL Server</li>
        <li>Game Engine: Unity</li>
      </ul>
    </section>

    <h3>CV</h3>
    <ul id="cv">
      <li><a href="CV%20MILAN%20HOMMET.pdf">Download my cv</a></li>
    </ul>

    <h3>Projects</h3>
    <ul id="github-projects">
      {#each repositories as repo}
        <li>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" title={repo.description || "No description available"}>
            {repo.name} - {repo.description || "No description available"}
          </a>
        </li>
      {/each}
    </ul>
  </section>
</div>
