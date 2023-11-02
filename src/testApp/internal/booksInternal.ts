import { v4 as uuid4 } from 'uuid';

export type Book = {
	id: number | string;
	title: string;
	description: string;
	numberOfPages: number;
	publishedAt: string;
};

const baseBooks: Array<Book> = [
	{
		id: uuid4(),
		title: 'The Hobbit',
		description: 'In a hole, lived a hobbit',
		numberOfPages: 310,
		publishedAt: new Date('1937-09-21').toISOString()
	},
	{
		id: uuid4(),
		title: 'Dune',
		description: 'Pretty spicy',
		numberOfPages: 896,
		publishedAt: new Date('1965-08-15').toISOString()
	}
];

export function getMemoryBooks(): Array<Book> {
	if (typeof window === 'undefined') {
		return baseBooks;
	}

	let memory = window.localStorage.getItem('books');
	if (memory === null || memory === undefined || memory === '') {
		memory = JSON.stringify(baseBooks);
	}

	return JSON.parse(memory || '[]') || {};
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
