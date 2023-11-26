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
            url: "/",
        },
        {
            url: "/blog",
        },
        {
            url: "/about",
        },
        {
            url: "/contact",
        },
        ...paths.map((path) => {
            return {
                url: `/blog/${path.slug}`,
                lastModified: new Date(path.updatedAt),
            }
        })
    ]
}