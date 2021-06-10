# nuxt-i18next

Add `nuxt-i18next` to nuxt.config.js

```js
modules: [
	// nuxt-i18next must be before nuxt-i18n
	['nuxt-i18next', {
		interpolation: {
			prefix: '{', // default {{
			suffix: '}', // default }}
			pluralSeparator: '-', // default _
		},
		translation: {
			prepend: '', // prepend for pluralization strings
		},
	}],
	'nuxt-i18n',
],
```

## Pluralization

Plural strings are suffixed with `_plural` and use the `count` value.  
Example:

```vue

<template>
	<div>
		{{ $t('cookie', {count: 1}} }} <!-- cookie -->
		{{ $t('cookie', {count: 3}} }} <!-- cookie_plural -->
	</div>
</template>
```

## Helpers

With helpers it is possible to do something with variables in a translation.

### uppercase

```json
{
	"author": {
		"name": "{{name, uppercase}}"
	}
}
```

The Variable `{{name}}` would be printed in uppercase.

### lowercase

```json
{
	"author": {
		"name": "{{name, lowercase}}"
	}
}
```

The Variable `{{name}}` would be printed in lowercase.

### Add Custom Helpers

Add a new plugin and use `app.i18n.formatter.addHelper` to add custom helpers:

```js
export default ({ app }) => {
	app.i18n.formatter.addHelper('uppercase', (value) => {
		if (!value) {
			return value;
		}

		return value.toString().toUpperCase();
	});
}
```