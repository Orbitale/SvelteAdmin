import { faker } from '@faker-js/faker';
import { InMemoryStorage } from './memoryStorage';

let storage: null | InMemoryStorage<Book> = null;

export type Book = {
	id: number | string;
	title: string;
	description: string;
	numberOfPages: number;
	publishedAt: string;
};

export function getStorage(): InMemoryStorage<Book> {
	if (!storage) {
		storage = new InMemoryStorage<Book>('Book', getBase);
	}

	return storage;
}

function getBase(): Array<Book> {
	return Array(25)
		.fill(undefined)
		.map((_: undefined, i: number) => {
			return {
				id: faker.string.uuid(),
				title: i + 1 + ' ' + faker.music.songName(),
				description: faker.lorem.lines(3),
				numberOfPages: faker.number.int({ min: 50, max: 800 }),
				publishedAt: faker.date.anytime().toISOString()
			};
		});
}
