import { toast } from '@zerodevx/svelte-toast';

export default function message(content: string, type: ToastType) {
	const toast = new Toast(content, type || 'info');

	toast.show();

	return toast;
}

export function success(content: string): Toast {
	return message(content, 'success');
}

export function error(content: string): Toast {
	return message(content, 'error');
}

export function warning(content: string): Toast {
	return message(content, 'warning');
}

export function info(content: string): Toast {
	return message(content, 'info');
}

export type ToastType = 'info' | 'success' | 'warning' | 'error';

export class Toast {
	private readonly _content: string;
	private readonly _toast_type: ToastType;

	constructor(content: string, type: ToastType) {
		this._content = (content || '').replace(/\n/g, '<br>');
		this._toast_type = type;
	}

	show() {
		toast.push({
			msg: this._content,
			theme: this.theme(),
			pausable: true
		});
	}

	private theme(): { [key: string]: string } {
		const style = Toast.getColors(this._toast_type);

		style['--toastWidth'] = '25rem';

		return style;
	}

	static getColors(toast_type: ToastType): { [key: string]: string } {
		switch (toast_type) {
			case 'info':
				return { '--toastBackground': '#6ee0f7', '--toastColor': '' };
			case 'warning':
				return { '--toastBackground': '#f7d56e', '--toastColor': '' };
			case 'error':
				return { '--toastBackground': '#f07582', '--toastColor': '' };
			case 'success':
				return { '--toastBackground': '#79ecb5', '--toastColor': '' };
			default:
				throw 'Invalid toast type.';
		}
	}
}
