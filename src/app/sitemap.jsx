import client from "@/contentful";

export default async function sitemap() {
    const entries = await client.getEntries({
        content_type: "blogPost",
    });

    const paths = entries.items.map((item) => {
        return {
            slug: item.fields.slug,
            updatedAt: item.sys.updatedAt,
        }
    });

    return [
        {
            url: "https://meric.dev/",
        },
        {
            url: "https://meric.dev/blog",
        },
        {
            url: "https://meric.dev/about",
        },
        {
            url: "https://meric.dev/contact",
        },
        ...paths.map((path) => {
            return {
                url: `https://meric.dev/blog/${path.slug}`,
                lastModified: new Date(path.updatedAt),
            }
        })
    ]
}