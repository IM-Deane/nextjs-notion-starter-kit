import { Client } from '@notionhq/client'
import slugify from 'slugify'

const NOTION_API_KEY = process.env.NOTION_API_KEY ?? ''
const notion = new Client({ auth: NOTION_API_KEY })

export async function getPosts() {
  const database = await queryDatabase()
  return parseProperties(database)
}

const queryDatabase = async () =>
  await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID ?? '',
    filter: {
      and: [
        {
          property: 'published',
          checkbox: {
            equals: true
          }
        },
        {
          property: 'featured',
          checkbox: {
            equals: true
          }
        }
      ]
    }
  })

export type Post = {
  id: string
  title: string
  description: string
  published_on: string
  slug: string
}

const parseProperties = (database: any): Post[] =>
  database.results.map((row) => {
    const { id, properties } = row

    const titleCell = properties.title.title
    const title = titleCell?.[0].plain_text
    const slug = slugify(title, { lower: true, trim: true })
    const published_on = properties.published_on.date.start
    const description = properties.description.rich_text[0].plain_text

    return { id, title, slug, published_on, description }
  })

export function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  })
}
