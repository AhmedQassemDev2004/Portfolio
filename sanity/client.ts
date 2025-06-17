// sanity/client.ts
import { createClient } from 'next-sanity'
import {
  projectId,
  dataset,
  apiVersion,
} from './env.client'

// read‑only, public client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})


