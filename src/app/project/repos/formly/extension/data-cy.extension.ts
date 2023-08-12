import { FormlyExtension, FormlyFieldConfig } from "@ngx-formly/core";

export const dataCyExtension: FormlyExtension = {
	prePopulate: (field: FormlyFieldConfig) => {
		if (field.props?.attributes?.["data-cy"]) {
			return;
		}

		field.props = {
			...field.props,
			attributes: { "data-cy": field.key ? field.key.toString() : "" },
		};
	},
};
