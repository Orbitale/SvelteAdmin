# Svelte admin, prototype

⚠ This package is totally a **prototype**. It's used in one single personal project and not meant for production (yet)!

It's being rewritten for now, documentation will come when architecture will be stabilized.

It is actually the second prototype. The first one is in the [v0](https://github.com/Orbitale/SvelteAdmin/tree/v0) branch.

## Installation

For now, since the package is only a prototype, you can run one of these commands to add it to your project:

```bash
yarn add "@orbitale/svelte-admin@git://github.com/Orbitale/SvelteAdmin.git"

npm install --save "@orbitale/svelte-admin@git://github.com/Orbitale/SvelteAdmin.git"
```

This comes with no warranty of working perfectly (again, it's a prototype).

## Usage

An administration panel is composed of three main things:

1. The ̀ Dashboard` definition: it provides some metadata, the links you will add to your menus.
2. The `Crud` definition**s**: added to your Dashboard, they define the resource type you will manipulate in each action of your Crud. All Cruds also define how to fetch and persist your data from whatever data source you want (usually it might be some kind of API).
3. The Svelte components that will **render** the Dashboard, based on your sole ̀ Dashboard` definition, and called by user input (like URL parameters).

Usually, you will have only **one dashboard** and set **one Crud per entity** to your administration panel.

### Create a Dashboard

First, create a classic [SvelteKit project](https://kit.svelte.dev/), as a simple empty application, and when prompted whether to use Typescript, say **yes** (we highly recommend using Typescript).

#### The Dashboard config

Then, create a ̀ src/lib/admin/Dashboard.ts` file, and start writing the necessary data to create a Dasbhoard object:

```typescript
// src/lib/admin/Dashboard.ts

// Some fancy icons for a neat UI:
import { Book, Home } from 'carbon-icons-svelte';

// SvelteAdmin classes:
import { DashboardDefinition, UrlAction } from '@orbitale/svelte-admin';

// See later:
import booksCrud from './booksCrud.ts';

// The dashboard setup:
export const dashboard = new DashboardDefinition({
	// Some metadata regarding your admin panel
	admin: {
		head: {
			brandName: '{ Your company/brand name }',
			appName: '{ Your app name }'
		}
	},

	// The main menu on the left side of the page
	sideMenu: [
		new UrlAction('Homepage', '/', Home),
		new UrlAction('Book', '/admin/books/list', Book)
	],

	// Here you set all the Crud configurations of your admin panel
	// For organization purposes, we recommend you to define your Crud configs
	//   in separate typescript files, it makes it easier to read and maintain.
	cruds: [booksCrud]
});
```

#### The Crud config

Then, create the `src/lib/admin/booksCrud.ts` file, it will host your "Books" Crud configuration:

```typescript
// src/lib/admin/booksCrud.ts

// Again, some icons to pop your admin!
import { Pen, TrashCan } from 'carbon-icons-svelte';

// SvelteAdmin classes:
import {
	TextField,
	TextareaField,
	UrlAction,
	ListAction,
	EditAction,
	DeleteAction,
	type BaseCrudAction,
	CallbackStateProcessor,
	CallbackStateProvider
} from '@orbitale/svelte-admin';

// These are the most common fields you want for your "Book" entity:
const fields = [
	new TextField('title', 'Title', { placeholder: "Enter the book's title" }),
	new TextareaField('description', 'description', {
		placeholder: "Enter the book's descrption",
		help: "Please don't make a summary of the book, remember to not spoil your readers!"
	})
];
// Note: these fields can obviously change based on different pages/actions,
//   so feel free to spread this out if you have more complex admins!

// Finally: the actual Crud object!
export const booksCrud = new CrudDefinition(
	// This is a unique name that will serve as identifier for the Crud:
	'books',

	{
		// These labels are used to display titles or operation messages,
		// If you add them to your own translation dictionary, they can be translated too!
		// (see more about translations below)
		label: { singular: 'Book', plural: 'Books' },

		// The "actions" are the actual Crud pages you will use.
		// SvelteAdmin has some generic ones for you, but you can also create your own!
		actions: [
			// Basic data grid listing all your Books.
			// Will display "edit" and "delete" buttons on the right of the list.
			new ListAction(fields, [
				new UrlAction('Edit', '/admin/books/edit/:id', Pen),
				new UrlAction('Delete', '/admin/books/delete/:id', TrashCan)
			]),

			// Straightforward "edit" form, can be accessed via the "edit" link above.
			new EditAction(fields, []),

			// Deletion page with confirmation message and buttons,
			// accessed via the "delete" link configured above
			new DeleteAction(fields, new UrlAction('List', '/admin/books/list', null))
		],

		// See below about state processors and providers.
		stateProcessor: new CallbackStateProcessor(function (data: any, action: BaseCrudAction, requestParameters = {}): void {
			console.info('TODO: process new, edit or delete data based on the current action');
		}),

		// See below about state processors and providers.
		stateProvider: new CallbackStateProvider(function (action: BaseCrudAction, requestParameters: KeyValueObject = {}): Array | null {
			console.info('TODO: return actual data, like from an API');

			return null;
		})
	}
);
```

Voilà!

Well, your Crud is not totally ready, because it needs two more things: being rendered, and fetching the **real** data.

About the "fetching" part, we will leave this for below chapters.

However, let's render our dashboard!

#### Rendering the dashboard

If you have a common SvelteKit project, you can directly create a new route page for your base admin.

Since we will mostly use the URL to determine what Crud and actions we are looking at, let's use SvelteKit's router to make things shine with as less code as possible!

Create a `src/routes/[crud]/[action]/+page.svelte` file with the following code:

```html
<script lang="ts">
	// src/routes/[crud]/[action]/+page.svelte

	// The Dashboard component that will render all the things:
	import Dashboard from '@orbitale/svelte-admin';

	// This is a custom Svelte store created by SvelteKit,
	//   it points to an instance of a Page object,
	//   which can allow us to gather data from the current page,
	//   such as the window.URL object, or the dynamic parameters of your route.
	// More details about the "page" store there:
	//   https://kit.svelte.dev/docs/modules#$app-stores-page
	import { page } from '$app/stores';

	// That's your custom dashboard!
	// The "$lib" alias is configured by SvelteKit,
	//   it always points to your "src/lib/" directory.
	import { dashboard } from '$lib/admin/Dashboard.ts';

	let crud: string = $page.params.crud;
	let action: string = $page.params.action;

	// Here, we merge URL.searchParams (the query string)
	// with "$page.params", which corresponds to Route parameters.
	// In our case, route parameters are [crud] and [action].
	// This means that "?crud=..." or "?crud=...&action=..."
	// will not be able to override /admin/[crud]/[action]
	// An entire admin in one single route, in short :)
	let requestParameters = {
		...$page.url.searchParams,
		...$page.params,
	}
</script>

<Dashboard {dashboard} {crud} {action} {requestParameters} />
```

That's it!

Now, your admin is prepared.

Here is the shorter version with no comments, if you want to copy-paste for a quick setup:

```html
<script lang="ts">
	import Dashboard from '@orbitale/svelte-admin';
	import { page } from '$app/stores';
	import { dashboard } from '$lib/admin/Dashboard.ts';

	let crud: string = $page.params.crud;
	let action: string = $page.params.action;
	let requestParameters = { ...$page.url.searchParams, ...$page.params };
</script>

<Dashboard {dashboard} {crud} {action} {requestParameters} />
```

---

## TODO continue the readme,
## TODO roadmap: state providers, state processors, translations.
