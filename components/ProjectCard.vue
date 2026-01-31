<template>
  <div class="app-card">
    <div class="app-card-header">
      <div class="app-icon">{{ project.icon }}</div>
      <span class="project-type-badge" :class="project.type">
        {{ project.type === 'mobile' ? 'Mobile' : 'Web' }}
      </span>
    </div>
    <h3 class="app-title">{{ project.title }}</h3>
    <p class="app-description">{{ project.description }}</p>
    <div class="app-tags">
      <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <div class="app-actions">
      <a :href="supportUrl" class="btn btn-outline" target="_blank" rel="noopener">Support</a>
      <a :href="privacyUrl" class="btn btn-outline" target="_blank" rel="noopener">Privacy</a>
      <a
        v-if="project.primaryAction"
        :href="project.primaryAction.url"
        class="btn btn-primary"
      >
        {{ project.primaryAction.label }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects/types'
import { getSupportUrl, getPrivacyUrl } from '~/data/projects/types'

const props = defineProps<{
  project: Project
}>()

const supportUrl = computed(() => getSupportUrl(props.project.id))
const privacyUrl = computed(() => getPrivacyUrl(props.project.id))
</script>

<style scoped>
.app-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.project-type-badge {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.6rem;
  border-radius: 50px;
}

.project-type-badge.mobile {
  background: linear-gradient(135deg, #10b98120, #10b98140);
  color: #059669;
}

.project-type-badge.web {
  background: linear-gradient(135deg, #2563eb20, #2563eb40);
  color: #1d4ed8;
}
</style>
