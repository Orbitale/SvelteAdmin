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

- Add `initLocale` function helper to lib exports, this allows users to execute the function themselves **before** the library does

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
