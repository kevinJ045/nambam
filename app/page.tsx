
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Component, Text, Widget } from "rayous";
import { buildProps } from "rayous/extra";
import { React } from "rayous/react";

export default class extends Component {
	
	build(props: buildProps) {
		return new Widget({
			children: [
				<Button variant="accent">dj</Button>,
				<Card>
					<Text>ss</Text>
				</Card>
			]
		});
	}
}