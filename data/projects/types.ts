/**
 * Project type definitions for the portfolio.
 * Each project can be either 'mobile' or 'web'.
 */
export type ProjectType = 'mobile' | 'web'

export interface Project {
  /** Unique identifier - used for support/privacy URLs (e.g. "snake-modern") */
  id: string
  /** Display name of the project */
  title: string
  /** Short description shown on the project card */
  description: string
  /** Project type: mobile app or web app */
  type: ProjectType
  /** Emoji or icon for the project card */
  icon: string
  /** Technology/category tags (e.g. "iOS", "Vue.js") */
  tags: string[]
  /** Primary action: App Store, Play Store, or Live Demo link */
  primaryAction?: {
    label: string
    url: string
  }
}

/**
 * Helper to build support URL for a project.
 * Support pages live at: /support/{project-id}.html
 */
export function getSupportUrl(projectId: string): string {
  return `/support/${projectId}.html`
}

/**
 * Helper to build privacy policy URL for a project.
 * Privacy pages live at: /privacy/{project-id}.html
 */
export function getPrivacyUrl(projectId: string): string {
  return `/privacy/${projectId}.html`
}
