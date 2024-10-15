import { faker } from '@faker-js/faker';
import { InMemoryStorage } from './memoryStorage';

let storage: null | InMemoryStorage<Author> = null;

export type Author = {
	id: number | string;
	first_name: string;
	last_name: string;
	bio: string;
};

export function getStorage(): InMemoryStorage<Author> {
	if (!storage) {
		storage = new InMemoryStorage<Author>('Author', getBase);
	}

	return storage;
}

function getBase(): Array<Author> {
	return Array(25)
		.fill(undefined)
		.map(() => {
			return {
				id: faker.string.uuid(),
				first_name: faker.person.firstName(),
				last_name: faker.person.lastName(),
				bio: faker.person.bio()
			};
		});
}
