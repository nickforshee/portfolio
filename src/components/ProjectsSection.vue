<template>
  <section class="section">
    <h2>Featured Projects</h2>

    <div class="projects-grid">
      <article class="project-card">
        <div class="project-header">
          <h3>Airport Maps</h3>
          <span class="project-tag">Open-source fork + enhancements</span>
        </div>

        <p>
          Adapted and extended an existing open-source visualization project
          into an aviation-focused mapping tool that renders airport
          infrastructure from OpenStreetMap data using ICAO-based lookup.
        </p>

        <ul class="project-list">
          <li>
            Reworked the project from city-road visualization to airport
            infrastructure mapping
          </li>
          <li>Added airport-focused search and rendering behavior</li>
          <li>Used OpenStreetMap / Overpass data and deployed publicly</li>
        </ul>

        <div class="project-links">
          <a
            href="https://github.com/nickforshee/airport-maps"
            target="_blank"
            rel="noreferrer"
            >GitHub</a
          >
          <a
            href="https://airport-maps-forshee.vercel.app"
            target="_blank"
            rel="noreferrer"
            >Live Demo</a
          >
        </div>
      </article>

      <article class="project-card muted">
        <div class="project-header">
          <h3>More Projects Coming</h3>
          <span class="project-tag">In progress</span>
        </div>

        <p>
          I’m currently building out additional portfolio projects focused on
          workflow systems, developer tooling, and AI-integrated applications.
        </p>
      </article>
    </div>
  </section>
</template>
