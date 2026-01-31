import type { Project } from './types'

/**
 * TEMPLATE: Copy this file to create a new project.
 * 1. Copy this file: cp _template.ts my-new-project.ts
 * 2. Rename the export and update all fields below
 * 3. Add to index.ts
 * 4. Create public/support/my-new-project.html (copy from _template-support.html)
 * 5. Create public/privacy/my-new-project.html (copy from _template-privacy.html)
 *
 * See README.md "How to Add New Projects" for full instructions.
 */
export const templateProject: Project = {
  id: 'my-project-id',           // lowercase, use hyphens (e.g. "taskflow", "smart-home")
  title: 'Project Name',
  description: 'Brief description of your project. What does it do? Who is it for?',
  type: 'web',                   // 'mobile' | 'web'
  icon: '🌐',                    // emoji for the card
  tags: ['Vue.js', 'Node.js'],   // technology or category tags
  primaryAction: {
    label: 'Live Demo',          // "App Store" | "Play Store" | "Live Demo" | "View Project"
    url: 'https://example.com',
  },
}
