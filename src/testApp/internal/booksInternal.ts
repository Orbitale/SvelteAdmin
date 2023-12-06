import { faker } from '@faker-js/faker';

export type Book = {
	id: number | string;
	title: string;
	description: string;
	numberOfPages: number;
	publishedAt: string;
};

const baseBooks: Array<Book> = Array(25)
	.fill(undefined)
	.map((_, i) => {
		return {
			id: faker.string.uuid(),
			title: (i+1)+' '+faker.music.songName(),
			description: faker.lorem.lines(3),
			numberOfPages: faker.number.int({ min: 50, max: 800 }),
			publishedAt: faker.date.anytime().toISOString()
		};
	});

export function getMemoryBooks(): Array<Book> {
	if (typeof window === 'undefined') {
		return [];
	}

	let memory = window.localStorage.getItem('books');
	if (memory === null || memory === undefined || memory === '' || memory === '[]') {
		memory = JSON.stringify(baseBooks);
		window.localStorage.setItem('books', memory);
	}

	return JSON.parse(memory);
}

export function getBook(id: string | number): Book {
	const foundBooks = getMemoryBooks().filter((b) => b.id.toString() === id.toString());

	if (foundBooks.length === 0) {
		throw new Error(`Book with id "${id}" was not found.`);
	}

	if (foundBooks.length !== 1) {
		throw new Error(`Error: Found multiple books with id "${id}".`);
	}

	return foundBooks[0];
}
