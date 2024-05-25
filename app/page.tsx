import { Component, Text, Widget } from "rayous";
import { buildProps } from "rayous/extra";
import { React } from "rayous/react";

export default class extends Component {
	build(props: buildProps) {
		return new Widget({
			children: [
				<Text>Hello, Rayous!</Text>
			]
		});
	}
}