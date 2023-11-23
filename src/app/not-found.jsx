import Link from "next/link";

const Notfound = () =>{
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<h1 className="text-white/50 font-black text-4xl">What you doing here {">:("}</h1>
			<Link href="/" className="text-white font-black text-2xl hover:underline mt-10">Go Back</Link>
		</div>
	)
}

export default Notfound;