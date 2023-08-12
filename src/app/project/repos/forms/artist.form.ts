import { inject } from "@angular/core";
import { FormlyFieldConfig, FormlyFieldProps } from "@ngx-formly/core";
import { ArtistsService } from "../services/artists/artists.service";
import { startWith, switchMap } from "rxjs";

export function formlyInput(config: {
	key: string;
	label: string;
	className?: string;
	props: FormlyFieldProps;
	expressions?: any;
}): FormlyFieldConfig {
	return {
		key: config.key,
		type: "input",
		className: config.className,
		props: {
			label: config.label,
			...config.props,
		},
		expressions: {},
	};
}

export function artistForm(): FormlyFieldConfig[] {
	const artistsService = inject(ArtistsService);

	return [
		{
			validators: {
				validation: [{ name: "fieldMatch" }],
			},
			wrappers: ["panel"],
			fieldGroup: [
				formlyInput({
					key: "password",
					label: "Password",
					props: { required: true, type: "password" },
				}),
				formlyInput({
					key: "repeatPassword",
					label: "Repeat password",
					props: { type: "password", required: true },
					expressions: {
						hide: "!model.password",
					},
				}),
				formlyInput({
					key: "email",
					label: "Email",
					props: { required: true },
				}),
				{
					key: "vias",
					type: "select",
					props: {
						label: "Vias",
						options: artistsService.getViaTypes(),
					},
					expressionProperties: {
						"props.disabled": (model) => !model.email,
					},
					hooks: {
						// onInit: (field) => {
						// 	field.props!.options = field.formControl
						// 		?.get("email")
						// 		?.valueChanges.pipe(
						// 			switchMap(() =>
						// 				artistsService
						// 					.getAll()
						// 					.pipe(
						// 						map((artists) =>
						// 							artists.map((artist) => ({
						// 								label: artist.firstName,
						// 								value: artist.id,
						// 							})),
						// 						),
						// 					),
						// 			),
						// 		);
						// },
					},
				},
				{
					key: "country",
					type: "select",
					props: {
						label: "Country",
						options: artistsService.getCountries(),
					},
				},
				{
					key: "city",
					type: "select",
					props: {
						label: "City",
						options: artistsService.getCities(),
					},
					hooks: {
						onInit: (field: FormlyFieldConfig) => {
							field.props!.options = field.form
								?.get("country")
								?.valueChanges.pipe(
									startWith("NI"),
									switchMap((country) =>
										artistsService.getCountryCities(
											country,
										),
									),
								);
						},
					},
				},
			],
		},
		{
			wrappers: ["panel"],
			props: {
				label: "Data",
			},
			fieldGroup: [
				{
					key: "d",
					type: "datepicker",
					props: {
						label: "Date",
						required: true,
						showIcon: true,
					},
				},
				{
					key: "nickname",
					type: "custom-input",
					props: { label: "Custom input", required: true },
				},
			],
		},
	];
}
