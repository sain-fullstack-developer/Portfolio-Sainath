import {
	Html5Original,
	Css3Original,
	NodejsOriginal,
	ExpressOriginal,
	MongodbOriginal,
	SqliteOriginal,
	NextjsLine,
	ReactOriginal,
	ReduxOriginal,
	TailwindcssPlain,
	COriginal,
	JavascriptOriginal,
	JavaOriginal,
	GithubOriginal,
	GitlabOriginal,
	StorybookOriginal,
	FigmaOriginal,
	TensorflowOriginal,
} from "devicons-react";

type SkillCardBlockProps = {
	icon: string;
	name: string;
};

export default function SkillCardBlock({ icon, name }: SkillCardBlockProps) {
	let IconComponent = null;
	switch (icon) {
		case "HtmlOriginal":
			IconComponent = Html5Original;
			break;
		case "CSSOriginal":
			IconComponent = Css3Original;
			break;
		case "StorybookOriginal":
			IconComponent = StorybookOriginal;
			break;
		case "TensorflowOriginal":
			IconComponent = TensorflowOriginal;
			break;
		case "FigmaOriginal":
			IconComponent = FigmaOriginal;
			break;
		case "ReactOriginal":
			IconComponent = ReactOriginal;
			break;
		case "NextjsLine":
			IconComponent = NextjsLine;
			break;
		case "TailwindcssPlain":
			IconComponent = TailwindcssPlain;
			break;
		case "JavascriptOriginal":
			IconComponent = JavascriptOriginal;
			break;
		case "MongoDBPlain":
			IconComponent = MongodbOriginal;
			break;
		case "SQLitePlain":
			IconComponent = SqliteOriginal;
			break;
		case "NodejsOriginal":
			IconComponent = NodejsOriginal;
			break;
		case "ExpressOriginal":
			IconComponent = ExpressOriginal;
			break;
		case "ReduxOriginal":
			IconComponent = ReduxOriginal;
			break;
		case "GitlabOriginal":
			IconComponent = GitlabOriginal;
			break;
		case "JavaOriginal":
			IconComponent = JavaOriginal;
			break;
		case "COriginal":
			IconComponent = COriginal;
			break;
		case "GithubOriginal":
			IconComponent = GithubOriginal;
			break;
		default:
			break;
	}

	return (
		<div className="flex flex-row  justify-evenly items-center gap-4 p-4 rounded-[5px] bg-ab">
			{IconComponent && (
				<div>
					<IconComponent className="scale-[150%]" />
				</div>
			)}
			<div>{name}</div>
		</div>
	);
}
