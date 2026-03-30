<template>
  <section class="section">
    <h2>Contact</h2>
    <div class="card">
      <p>
        I’m open to connecting about engineering roles, SaaS platforms,
        developer tooling, and interesting technical problems.
      </p>

      <div class="contact-links">
        <a
          v-for="link in contactLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { contactLinks } from "../data/links";
</script>
