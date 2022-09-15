import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MainBodyContainer() {
	const [markdown, setMarkdown] = useState("# dello");

	return (
		<body className="h-100 w-100">
			<aside></aside>

			<ReactMarkdown># Hello</ReactMarkdown>
		</body>
	);
}
