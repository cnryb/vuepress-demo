import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: 'vuepress-demo',
  alias: {
    '@theme': path.resolve(__dirname, 'theme'),
  }
})
