import { FormlyFieldConfig, FormlyFieldProps } from "@ngx-formly/core";

export const formlyInput = (config: {
	key: string;
	label: string;
	props: FormlyFieldProps;
}): FormlyFieldConfig => {
	return {
		key: config.key,
		type: "input",
		className: "flex-1",
		props: {
			label: config.label,
			...config.props,
		},
	};
};
