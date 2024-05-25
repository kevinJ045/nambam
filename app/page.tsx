
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import LocalStore from "@/data/local";
import { Component, InputWrapper, Text, Widget } from "rayous";
import { asyncComponent, buildProps } from "rayous/extra";
import { React } from "rayous/react";

@asyncComponent()
export default class extends Component {

	static updateMode: "refresh" | "reinit" = "refresh";
	
	async build(props: buildProps) {
		const github_url = LocalStore.get('github_url');
		if(github_url) {
			return new Widget({
				children: [

				]
			});
		} else {
			return new Widget({
				children: [
					<Card class="m-[10px] w-[320px] bg-base-200"
					title={<Text>Github URL</Text>}
					content={[
						<InputWrapper
						id="git_url"
						title="URL"
						class="input input-bordered mt-5"></InputWrapper>,
						<Text class="mt-4">Your github url where you put your anime list</Text>
					]}
					actionsClass="mt-5 justify-end"
					actions={[
						<Button
						onClick={() => {
							LocalStore.set('github_url', (this._currentWidget.find('#git_url') as any).val())
						}}
						variant="accent">Set</Button>
					]}></Card>
				]
			});
		}
	}
}