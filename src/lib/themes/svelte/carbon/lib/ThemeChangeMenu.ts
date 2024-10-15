import { type ActionIcon, type ActionOptions, CallbackAction } from '$lib/Actions';
import { type MenuLink, Submenu } from '$lib/Menu';

type Optional<T> = T | null | undefined;

type CarbonTheme = 'white' | 'g10' | 'g80' | 'g90' | 'g100';

export default class ThemeChangeMenu extends Submenu {
	static readonly availableThemes: Array<CarbonTheme> = ['white', 'g10', 'g80', 'g90', 'g100'];

	constructor(icon?: Optional<ActionIcon>, options?: ActionOptions) {
		const links: Array<MenuLink> = ThemeChangeMenu.availableThemes.map((theme) => {
			return new CallbackAction('carbon.theme.' + theme, undefined, () => this.changeTheme(theme));
		});

		super('carbon.theme.change_action', icon, links, options);
	}

	changeTheme(newTheme: CarbonTheme) {
		document.documentElement.setAttribute('theme', newTheme);
	}
}
