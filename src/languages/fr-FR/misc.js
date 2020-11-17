const languageData = {
	ERROR_MESSAGE: 'Une erreur s’est produite lors de l’exécution de cette commande, essayez à nouveau ou contactez la prise en charge.',
	INCORRECT_FORMAT: (commandExample) => `Veuillez utiliser le format : \`${commandExample}\`.`,
	MISSING_PERMISSION: (permission) => `Il me manque la permission : \`${permission}\`.`,
	USER_PERMISSION: (permission) => `Vous manquez l’autorisation : \`${permission}\`.`,
	MISSING_ROLE: 'Je n’ai pas pu trouver ce rôle.',
	NO_REASON: 'Aucune raison donnée.',
	// external files/plugins
	INCORRECT_DELIMITERS: 'S’il vous plaît utiliser l’un des délimiteurs de temps suivant: `d`,  `h`,  `m`, `s`.',
	NOT_NUMBER:'Ça doit être un numéro.',
	MAX_TIME: 'Ça ne peut pas durer plus de 10 jours.',
};

const translate = (key, args) => {
	const translation = languageData[key];
	if(typeof translation === 'function') return translation(args);
	else return translation;
};

module.exports = translate;
