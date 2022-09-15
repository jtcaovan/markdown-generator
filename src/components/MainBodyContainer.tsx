import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MainBodyContainer() {
	const [markdown, setMarkdown] = useState("");

	return (
		<div className="flex flex-row h-screen w-100 divide-x-2 cursor-text">
			<form className="w-1/2 h-screen">
				<textarea
					className="w-full h-screen bg-black-100"
					value={markdown}
					onChange={(event) => setMarkdown(event.target.value)}
				/>
			</form>
			<Markdown
				className="prose w-1/2 h-screen"
				children={markdown}
				remarkPlugins={[remarkGfm]}
			/>
		</div>
	);
}
