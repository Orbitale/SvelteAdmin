# v0.9.0

- **BC Break**: Definition options types have been renamed and merged in the `$lib/FieldDefinitions/definition.ts` file.
- Add `DateFilter` as a range of dates
- Add `BooleanFilter` with radio inputs
- Remove empty values from submitted filters

# v0.8.1

- Fix columns and tabs rendering in List (not super UX-friendly at first, but use cases could definitely be found for that)
- Standardize more fields to properly use dashboard's configured theme
- Update theme injection in view & form fields

# v0.8.0

- **BC Break**: importing a theme is now done via the `themes` variable which is exported by default in the main package.
- Fixed some building issues caused by the test setup
- Add a new "test" crud to showcase more fields
- Create or improve templates for Url, Number, Checkbox and Toggle fields
- Added `openInNewTab` option to `UrlField`, for "view" type usage (aka "list" and "view" operations)

# v0.7.0

- **BC Break**: `StateProcessor.process()` now returns an empty `Promise`, even though it contains nothing. It is to be in sync with the `StateProvider` class, and to make sure one can `await` the `.process()` method to execute actions _after_ it finished.
- Instead of using SvelteKit's `goto()` to redirect in New and Edit actions, changed its usage to `window.location.href = '...';`. It's only client-compatible, but these calls were only made in client context, so it should be fine. The main reason for this was to avoid having to depend on SvelteKit when building the package.
- Add base setup for Filters. 🎉 Now need more filter types!

# v0.6.6

- Update dependencies internally, especially update to Vitest 1.0
- Make sure CrudList requires a List operation object.
- Allow forcing List state provider to wait a minimum amount of time to avoid stressful blinking. Useful for UX and accessibility.

# v0.6.5

- Fix wrong variable assignation

# v0.6.4

- Fix UX issue with pagination where whole DataTable disappeared

# v0.6.3

- Fix wrong pagination default config

# v0.6.2

- Fix remaining extension imports in CrudList

# v0.6.1

- Fix missing export of `PaginatedResults` class.

# v0.6.0

- **BC Break** (though was unused): Disable Crud events for now, they have no real usage, and they imply mandatory callback. The configuration, apart Callback providers and processors, is supposed to be as much static as possible, to be able to configure it from outside just with JSON.
- Implemented pagination. To use it, configure the `itemsPerPage` in your action's Operation (like `List` for instance), and make sure your `StateProvider` for the same Operation returns an instance of the `PaginatedResults` object.
- Add `adminConfig.rootUrl` and configure redirection when submitting `new` or `edit` forms.
- Rename Dashboard web-component name to avoid duplication with other themes (still not sure whether the package will be built as web-components, but maybe, who knows)
- Remove useless custom theme call in test app, this helps in making sure the Dashboard-configured theme is the main one.

# v0.5.0

Changes:

- **BC Break**: Reorganize theme config, for consistency.<br>Before, some theme components were mixed in crud, view and form fields.<br>Now there are components specific to `crudActions`, `viewFields` and `formFields` that can be dynamic.<br>If end users want to, they can add new keys to these specific theme components, so their custom-created theme views can be used by their custom `Definition` objects.
- **BC Break** (internal): Revamp tabs and optimize their behavior for a simpler and more flexible approach (and even nestable, though I don't see use-cases for that).
- Create `identifierFieldName` CrudDefinition option, to allow using another field than `id` as an entity identifier.<br>Having an `id` property is mandatory for Carbon's `DataTable` component, but might become useful for standardization of identifier usage later in filters.
- Add `Columns` field type (new name, replaces "sections" concept). Nestable and sizeable. The `size` property in columns will have a behavior only related to the used theme. For example, Carbon has a 16-units grid, and Bootstrap's one is 12.<br>The user value will not be converted into any other grid size.

# v0.4.6

Changes:

- Fix null coalescing property call in Icon.svelte

# v0.4.4

Changes:

- Move `Icon` component outside themes, since it's generic, and export it to the public

# v0.4.3

Changes:

- Make sure icons can still be used when icon type is empty.

# v0.4.2

Changes:

- Fix CrudOperation that's no longer generic
- Attempt at fixing paths for themes module loading

# v0.4.1

Changes:

- Standardize more theme usage, to give form/view fields a name instead of the direct component
- Update all crud actions with new theme system, using a store

Internal work:

- Move internal test app persistence to a specific file
- Generate fake books with Faker for test app
- Start working on a Section field (upcoming)

# v0.4.0

Changes:

- **BC Break**: Create a separate theme config system. Themes must now be added to the `DashboardDefinition` config via the `adminConfig` option.<br>
  The current theme's path is `@orbitale/svelte-admin/themes/carbon`.
- Remove some warnings in test app
- Slight readme wording updates
- First addition of CI script
- Add browser-save support for whole test app. This means books are stored in your `localStorage`!

# v0.3.6

Changes:

- Add "autoCloseSideMenu" to AdminConfig to allow customizing left-side menu

# v0.3.5

Changes:

- Fixed wrong empty label display in menus

# v0.3.4

Changes:

- Added `AdminConfig.defaultLocale` property, to avoid having to set the locale manually outside the dashboard.

# v0.3.3

Changes:

- Added missing exports in `package.json`

# v0.3.2

Changes:

- Turns out previous version was incorrectly built when pushed to npm registry, so rebuilt it.

# v0.3.1

Changes:

- Remove all extensions from file imports

# v0.3.0

Changes:

- **BC Break**: lib was previously in the `admin/` subdirectory. This part has been removed, library is now accessible from its root path.
- **BC Break**: all Svelte templates have been moved to the `themes/carbon/` directory: this will further help with themes integration.
- **BC Break**: Svelte templates are no longer available from library's root, only via the `themes/` directory.
- Add a changelog
- Try to uniformize file imports
- Remove code from older repository
- Fix some linting errors

# v0.2.3

Changes:

- Add `initLocale` function helper to lib exports, this allows users to call the function themselves **before** the library does

# v0.2.2

Changes:

- Fix demo crud state provider and processor
- Transform peer deps into normal deps, and update installation readme
- Update documentation to add more details about state providers and processors

# v0.2.1

Changes:

- Fix file imports to use only js, because svelte-package doesn't change it

# v0.2.0

New version, complete revamp of previous version.

# v0.1.0

Prototype, stored in a previous `v0` branch.
