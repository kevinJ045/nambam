import { Component, Text, Widget } from "rayous";
import { buildProps } from "rayous/extra";
import "@/styles/style.tail.css";

export default class extends Component {	
	build(props: buildProps) {
		return new Widget({
			children: [
				props.page
			]
		});
	}
}