import client from "@/contentful";
import Image from "next/image";
import { Fragment, Suspense } from "react";
import Loading from "@/app/loading";
import { timeAgo } from "@/serverFunctions";
import { SiNextdotjs } from "react-icons/si";
import Link from "next/link";

const getPosts = async () => {
    const entries = await client.getEntries({
        content_type: "blogPost",
    })
    if (entries.items) return entries.items
}

const Blog = async () => {
    const postData = await getPosts()

    const CategoryIcons = {
        nextjs: <SiNextdotjs size="1.25rem" className="fill-white/50" />
    }

    const Post = ({ post, latest }) => {
        const { title, thumbnail, entry, mainCategory, slug } = post.fields;
        const { createdAt } = post.sys;
        const { tags } = post.metadata;

        return (
            <div className={`border border-white/40 flex rounded-3xl relative overflow-hidden isolate ${latest ? "md:col-span-2 md:h-56" : "md:h-40"}`}>
                <div className="w-full md:w-1/3 h-full absolute md:static -z-50">
                    <Image src={"https:" + thumbnail.fields.file.url} className="object-cover w-full h-full" alt="" width={300} height={300} />
                </div>
                <div className="absolute md:hidden w-full h-full -z-40 bg-gradient-to-b from-black/90 to-transparent"></div>
                <div className="flex flex-col items-start px-5 py-3">
                    <p className="text-white/50 text-xs flex flex-wrap items-center gap-2">
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
                    <h1 className={`text-white font-bold ${latest ? "text-sm md:text-2xl" : "text-sm"}`}>{title}</h1>
                    <p className={`text-white/50 ${latest ? "text-xs md:text-sm" : "text-xs"}`}>{entry}</p>

                    <Link href={`/blog/${slug}`} className="mt-auto ">
                        <button className="bg-[#442516] hover:bg-[#552817] transition-colors px-5 py-1 md:py-2 text-white font-bold w-fit rounded md:text-xs text-[.5rem]">READ MORE</button>
                    </Link>
                    <div className="absolute bottom-7 right-7 scale-[2.5]">
                        {
                            CategoryIcons[mainCategory]
                        }
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full h-screen px-5 md:px-0 items-center pt-32">
            <div className="text-3xl font-black text-white text-center md:text-left">Meric&apos;s Blog - Tips & How-to&apos;s for Frontend Developers</div>
            <p className="text-white/50 text-center md:w-[30rem]">Hey coders, welcome to my blog. Where I share useful tricks & tutorials about frontend development.</p>
            <div className="md:w-[65rem] grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 pb-5">
                {
                    postData.map((post, i) => {
                        return <Post post={post} key={i} latest={i === 0} />
                    })
                }
            </div>
        </div>
    )
}

export default Blog;