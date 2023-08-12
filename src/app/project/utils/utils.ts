export const getRandomName = () => {
	const names = [
		"Purrungado",
		"Coronel",
		"Canelo",
		"Simbat",
		"Gata loca",
		"Ready",
		"Hotch",
		"Nami",
		"Bonita",
		"Bonita",
		"Peluso",
		"Coco",
		"Saigueya",
	];
	const index = Math.floor(Math.random() * names.length);

	return names[index];
};
