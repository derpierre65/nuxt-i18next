// definition http://translate.sourceforge.net/wiki/l10n/pluralforms
let sets = [
	{
		lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR',
		       'tg', 'tl', 'ti', 'tr', 'uz', 'wa'], nr: [1, 2], fc: 1,
	},

	{
		lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en',
		       'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi',
		       'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb',
		       'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco',
		       'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'], nr: [1, 2], fc: 2,
	},

	{
		lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo',
		       'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'], nr: [1], fc: 3,
	},

	{ lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 },

	{ lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
	{ lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
	{ lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
	{ lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
	{ lngs: ['fr'], nr: [1, 2], fc: 9 },
	{ lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
	{ lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
	{ lngs: ['is'], nr: [1, 2], fc: 12 },
	{ lngs: ['jv'], nr: [0, 1], fc: 13 },
	{ lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
	{ lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
	{ lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
	{ lngs: ['mk'], nr: [1, 2], fc: 17 },
	{ lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
	{ lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
	{ lngs: ['or'], nr: [2, 1], fc: 2 },
	{ lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
	{ lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
	{ lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
];
let _rulesPluralsTypes = {
	1: function (n) {return Number(n > 1);},
	2: function (n) {return Number(n != 1);},
	3: function (n) {return 0;},
	4: function (n) {return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);},
	5: function (n) {return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);},
	6: function (n) {return Number((n == 1) ? 0 : (n >= 2 && n <= 4) ? 1 : 2);},
	7: function (n) {return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);},
	8: function (n) {return Number((n == 1) ? 0 : (n == 2) ? 1 : (n != 8 && n != 11) ? 2 : 3);},
	9: function (n) {return Number(n >= 2);},
	10: function (n) {return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);},
	11: function (n) {return Number((n == 1 || n == 11) ? 0 : (n == 2 || n == 12) ? 1 : (n > 2 && n < 20) ? 2 : 3);},
	12: function (n) {return Number(n % 10 != 1 || n % 100 == 11);},
	13: function (n) {return Number(n !== 0);},
	14: function (n) {return Number((n == 1) ? 0 : (n == 2) ? 1 : (n == 3) ? 2 : 3);},
	15: function (n) {return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);},
	16: function (n) {return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);},
	17: function (n) {return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);},
	18: function (n) {return Number(n == 0 ? 0 : n == 1 ? 1 : 2);},
	19: function (n) {return Number(n == 1 ? 0 : n == 0 || (n % 100 > 1 && n % 100 < 11) ? 1 : (n % 100 > 10 && n % 100 < 20) ? 2 : 3);},
	20: function (n) {return Number(n == 1 ? 0 : (n == 0 || (n % 100 > 0 && n % 100 < 20)) ? 1 : 2);},
	21: function (n) {return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0); },
	22: function (n) {return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3); },
};

function createRules() {
	const rules = {};
	sets.forEach((set) => {
		set.lngs.forEach((l) => {
			rules[l] = {
				numbers: set.nr,
				plurals: _rulesPluralsTypes[set.fc],
			};
		});
	});

	return rules;
}

class PluralResolver {
	constructor(options = {}) {
		this.options = options;
		this.rules = createRules();
	}

	getRule(code) {
		return this.rules[code];
	}

	getSuffix(code, count) {
		const rule = this.getRule(code);
		if (!rule) {
			console.warn(`no plural rule found for: ${code}`);
			return '';
		}

		// if (rule.numbers.length === 1) return ''; // only singular
		const idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
		let suffix = rule.numbers[idx];

		// special treatment for lngs only having singular and plural
		if (rule.numbers.length === 2 && rule.numbers[0] === 1) {
			if (suffix === 2) {
				suffix = 'plural';
			}
			else if (suffix === 1) {
				suffix = '';
			}
		}

		if (rule.numbers.length === 2 && rule.numbers[0] === 1) {
			return this.options.prepend && suffix.toString() ? this.options.prepend + suffix.toString() : suffix.toString();
		}

		return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
	}
}

class CustomFormatter {
	constructor(i18n) {
		const options = JSON.parse('<%= JSON.stringify(options) %>'); // prevent invalid js code

		this.helpers = {};
		this.i18n = i18n;
		this.pluralResolver = new PluralResolver(this.options.translation);
		this.options = Object.assign({
			translation: {
				prepend: '',
			},
			interpolation: {
				prefix: '{{',
				suffix: '}}',
				pluralSeparator: '_',
			},
		}, options);
	}

	interpolate(translation, params, key) {
		let pluralSuffix = this.pluralResolver.getSuffix(this.i18n.locale, params.count);
		if (pluralSuffix) {
			let pluralMessage = null;
			let messages = this.i18n._getMessages()[this.i18n.locale];
			let pluralizationKey = key + this.options.interpolation.pluralSeparator + pluralSuffix;
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