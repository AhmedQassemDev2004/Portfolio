import { createClient } from 'next-sanity'
import {
  projectId,
  dataset,
  apiVersion,
  sanityApiToken,
} from './env.server'
import { log } from 'console'

export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: sanityApiToken,
  useCdn: false,
})


log(sanityApiToken)