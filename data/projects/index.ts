import type { Project } from './types'
import { snakeModern } from './snake-modern'

/**
 * All projects displayed in the portfolio.
 * To add a new project:
 * 1. Create data/projects/{project-id}.ts (copy _template.ts)
 * 2. Import it here
 * 3. Add it to the projects array
 */
export const projects: Project[] = [
  snakeModern,
]
