class CustomFormatter {
	constructor(i18n) {
		const options = JSON.parse('<%= JSON.stringify(options) %>'); // prevent invalid js code

		this.i18n = i18n;
		this.options = Object.assign({
			interpolation: {
				prefix: '{{',
				suffix: '}}',
			},
		}, options);
		this.helpers = {};
	}

	interpolate(translation, params, key) {
		let isPlural = false;
		if (params && typeof params.count === 'number') {
			isPlural = Math.abs(params.count) > 1;
		}
		if (isPlural) {
			let pluralMessage = null;
			let messages = this.i18n._getMessages()[this.i18n.locale];
			let pluralizationKey = key + '_plural';
			if (messages[pluralizationKey]) {
				pluralMessage = messages[pluralizationKey];
			}
			else {
				let pluralTranslation = messages;
				for (let key of pluralizationKey.split('.')) {
					if (!pluralTranslation) {
						break;
					}
					pluralTranslation = pluralTranslation[key];
				}

				if (pluralTranslation) {
					pluralMessage = pluralTranslation;
				}
			}

			if (pluralMessage) {
				translation = pluralMessage;
			}
			else {
				console.log('translation not found :(', key);
			}
		}

		let test = new RegExp(this.options.interpolation.prefix + '([a-z A-Z-.,]+)' + this.options.interpolation.suffix, 'gm');
		let translated = translation;
		let match;
		while (match = test.exec(translation)) {
			let args = match[1].replace(/ /gm, '').split(',');
			let variableArgs = args[0].split('.');
			let key = variableArgs[0];
			let value = params[key] || null;

			for (let key of variableArgs.slice(1)) {
				if (!value) {
					break;
				}

				value = value[key];
			}

			for (let helperMethod of args.slice(1)) {
				if (this.helpers[helperMethod]) {
					value = this.helpers[helperMethod](value);
				}
			}

			translated = translated.replace(match[0].toString(), value);
		}

		return translated;
	}

	addHelper(name, callback) {
		this.helpers[name] = callback;
	}
}

export default async ({ app }) => {
	let customFormatter = new CustomFormatter(app.i18n);

	customFormatter.addHelper('uppercase', (value) => {
		if (!value) {
			return value;
		}

		return value.toString().toUpperCase();
	});

	customFormatter.addHelper('lowercase', (value) => {
		if (!value) {
			return value;
		}

		return value.toString().toUpperCase();
	});

	app.i18n.formatter = customFormatter;
}