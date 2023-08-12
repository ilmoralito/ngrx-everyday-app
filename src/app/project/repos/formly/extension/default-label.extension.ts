import { FormlyExtension, FormlyFieldConfig } from "@ngx-formly/core";

export const defaultLabelExtension: FormlyExtension = {
	prePopulate: (field: FormlyFieldConfig) => {
		console.log(field.props?.label)
		if (field.props?.label) {
			return;
		}

		field.props = { ...field.props, label: "Default label" };
	},
};
