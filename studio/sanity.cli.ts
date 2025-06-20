import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '87m92kyy',
    dataset: 'production'
  },
    studioHost: process.env.SANITY_STUDIO_STUDIO_HOST || '', // Visit https://www.sanity.io/docs/environment-variables to learn more about using environment variables for local & production.
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
