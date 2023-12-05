import client from "@/contentful"
import { timeAgo } from "@/serverFunctions"
import { redirect } from "next/navigation"
import { Fragment } from "react"
import { SiNextdotjs } from "react-icons/si"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { MARKS } from "@contentful/rich-text-types"
import dynamic from "next/dynamic"

const Highlighter = dynamic(() => import("@/components/Highlighter"), { ssr: false });

export async function generateStaticParams() {
    const entries = await client.getEntries({
        content_type: "blogPost",

    })

    return entries.items.map((p) => ({
        id: p.fields.slug
    }))
}

export async function generateMetadata({params}) {
	const postData = await getPost(params.id)
    const { title, thumbnail, entry, mainCategory } = postData.fields;
    const { createdAt } = postData.sys;
    const { tags } = postData.metadata;

    return {
        title: title + " | Mericdev",
        description: entry,
        image: "https:" + thumbnail.fields.file.url,
        category: mainCategory,
        keywords: tags.map((tag) => tag.sys.id),
        openGraph: {
            title: title + " | Mericdev",
            description: entry,
            images: [
                {
                    url: "https:" + thumbnail.fields.file.url,
                    width: 300,
                    height: 300,
                    alt: title
                }
            ],
            type: "article",
            article: {
                publishedTime: createdAt,
                tags: tags.map((tag) => tag.sys.id)
            }
        }
    }
}

const CategoryIcons = {
    nextjs: <SiNextdotjs size="1.25rem" className="fill-white/50" />
}

const getPost = async id => {
    const entry = await client.getEntries({
        content_type: "blogPost",
        "fields.slug": id
    })

    return entry.items[0]
}

const BlogPage = async ({ params }) => {
    const postData = await getPost(params.id)
    if (!postData) redirect("/blog")
    const { title, thumbnail, entry, mainCategory } = postData.fields;
    const { createdAt } = postData.sys;
    const { tags } = postData.metadata;

    return (
        <div className="flex flex-col text-white pt-32 px-5 md:px-0 md:w-[50rem] mx-auto">
            <h1 className="font-bold text-3xl mb-5">{title}</h1>
            <div className="flex flex-col md:flex-row gap-5 relative">
                <img src={"https:" + thumbnail.fields.file.url} width={300} height={300} className="w-40" alt="" />
                <div className="flex flex-col">
                    <p className="text-white/50 text-xs flex gap-2">
                        <span>{timeAgo(createdAt)}</span>
                        <span>•</span>
                        {
                            tags.map((tag, i) => {
                                return (
                                    <Fragment key={i}>
                                        <span>{tag.sys.id.slice(0, 1).toUpperCase() + tag.sys.id.substr(1)}</span>
                                        {
                                            i !== tags.length - 1 &&
                                            <span>•</span>
                                        }
                                    </Fragment>
                                )
                            })
                        }
                    </p>
                    <p className={`text-white/70 font-medium text-xl`}>{entry}</p>
                    <p className={`text-white/50 mt-auto text-base font-normal`}>2 min read</p>
                    <div className="absolute bottom-7 right-7 scale-[2.5]">
                        {
                            CategoryIcons[mainCategory]
                        }
                    </div>
                </div>
            </div>
            <section className="prose prose-invert mt-10">
                {documentToReactComponents(postData.fields.content, {
                    renderMark: {
                        [MARKS.CODE]: (text) => {
                            return (
                                <Highlighter>
                                    {text}
                                </Highlighter>
                            )
                        }
                    }
                })}
            </section>
        </div>
    );
}

export default BlogPage;