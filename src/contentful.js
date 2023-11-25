import { createClient } from "contentful"

/**
 * @type {import("contentful").ContentfulClientApi}
 */
const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default client;