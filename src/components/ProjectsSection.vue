<template>
  <section class="section">
    <h2>Featured Projects</h2>

    <div class="projects-grid">
      <article
        v-for="project in projects"
        :key="project.title"
        class="project-card"
        :class="{ muted: project.muted }"
      >
        <div>
          <div class="project-header">
            <h3>{{ project.title }}</h3>
            <span class="project-tag">{{ project.tag }}</span>
          </div>

          <p>{{ project.description }}</p>

          <ul v-if="project.bullets?.length" class="project-list">
            <li v-for="bullet in project.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
        </div>

        <div v-if="project.links?.length" class="project-links">
          <a
            v-for="link in project.links"
            :key="link.label"
            class="button"
            :href="link.href"
            target="_blank"
            rel="noreferrer"
          >
            {{ link.label }}
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from "../data/projects";
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-links {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.project-links .button {
  min-width: 120px;
  justify-content: center;
}
</style>
