const Loading = () => {
    return (
        <div className="flex flex-col w-full h-screen justify-center items-center">
            <div className="text-3xl font-black text-white">Meric&apos;s Blog - Tips & How-to&apos;s for Frontend Developers</div>
            <p className="text-white/50 text-center w-[30rem]">Hey coders, welcome to my blog. Where I share useful tricks & tutorials about frontend development.</p>
            <div className="w-[65rem] grid grid-cols-2 mt-5 gap-5">
                <div className={`border h-64 border-white/40 flex rounded-3xl relative overflow-hidden col-span-2`}>
                    <div className="skeleton h-full w-1/3"></div>
                    <div className="flex flex-col items-start px-5 py-3 w-full">
                        <p className="text-white/20 text-xs flex items-center gap-2">
                        </p>
                        <div className="skeleton h-5 w-full rounded-3xl"></div>
                        <div className="skeleton h-5 w-1/3 rounded-3xl mt-5"></div>
                    </div>
                </div>
                <div className={`border h-36 border-white/40 flex rounded-3xl relative overflow-hidden`}>
                    <div className="skeleton h-full w-1/3"></div>
                    <div className="flex flex-col items-start px-5 py-3 w-full">
                        <p className="text-white/20 text-xs flex items-center gap-2">
                        </p>
                        <div className="skeleton h-5 w-full rounded-3xl"></div>
                        <div className="skeleton h-5 w-1/3 rounded-3xl mt-5"></div>
                    </div>
                </div>
                <div className={`border h-36 border-white/40 flex rounded-3xl relative overflow-hidden`}>
                    <div className="skeleton h-full w-1/3"></div>
                    <div className="flex flex-col items-start px-5 py-3 w-full">
                        <p className="text-white/20 text-xs flex items-center gap-2">
                        </p>
                        <div className="skeleton h-5 w-full rounded-3xl"></div>
                        <div className="skeleton h-5 w-1/3 rounded-3xl mt-5"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;