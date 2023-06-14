import dotenv from 'dotenv';
import laas, { Log } from '@app';
import { assert } from 'console';

beforeAll(() => {
	dotenv.config({ path: '.env.test' });
});

describe('testing laas', () => {
	it('has sendLog as a function', () => {
		expect(Object.getOwnPropertyNames(laas).includes('sendLog')).toBe(true);
		expect(typeof laas.sendLog).toBe('function');
	});

	test('returns a boolean result', async () => {
		let log: Log = {
			level: 'info',
			text: 'Lorem ipsum dolor sit amet',
		};

		let result = await laas.sendLog(log);
		expect(typeof result).toBe('boolean');
	});

	test('returns false when invalid/no log level is provided', async () => {
		let log = {
			level: 'invalid',
			text: 'Lorem ipsum dolor sit amet',
		};

		let result = await laas.sendLog(log as Log);
		expect(result).toBe(false);
	});
});
