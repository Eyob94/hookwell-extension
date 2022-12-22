import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		console.log("hello");
	}, []);

	return (
		<div className="p-4 rounded w-72 min-h-fit">
			<div className="">
				<div>Hookwell</div>
			</div>
		</div>
	);
}
