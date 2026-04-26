<template>
  <section class="section hero">
    <div class="hero-header">
      <div>
        <h2 class="eyebrow">Nick Forshee</h2>
        <h1>
          Full-Stack Engineer building scalable SaaS systems and developer tooling.
        </h1>
        <p class="lede">
          I work across Laravel, Vue, AWS, APIs, workflow architecture, and
          AI-assisted development to build software that is fast, practical, and
          reliable at scale.
        </p>
      </div>
      <img :src="profilePic" alt="Nick Forshee profile" class="profile-picture" loading="lazy" decoding="async" />
    </div>

    <div class="hero-actions">
      <a v-for="link in heroLinks" :key="link.label" :href="link.href"
        :class="['button', link.variant === 'primary' ? 'primary' : '']" :target="link.target" rel="noreferrer">
        {{ link.label }}
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { heroLinks } from "../data/links";
import profilePic from "../assets/hero_profile_picture.jpeg";
</script>
