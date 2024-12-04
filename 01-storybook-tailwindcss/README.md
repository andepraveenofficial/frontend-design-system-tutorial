# Storybook : Tailwindcss

### Techstack

1. UI Layer : React
2. Language : Typescript
3. Styling : Tailwindcss

### Setup : Tailwindcss

- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`
- Configuration

```js tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

- Add tailwind

```css index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Setup : Storybook

1. Install Storybook : `npx storybook@latest init`
2. Configuration

```js tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./stories/**/*.{js,jsx,ts,tsx,mdx}",
		"./.storybook/**/*.{js,jsx,ts,tsx,mdx}",
	],

	theme: {
		extend: {},
	},
	plugins: [],
};
```

```ts preview.ts
import type { Preview } from "@storybook/react";
import "../src/index.css"; // Add this line

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
```

### Installation

- `npm install`

### Start the Application

- `npm run dev`

### Start the Storybook

- `npm run storybook`

### Design System

1. variant
2. size
3. functions
