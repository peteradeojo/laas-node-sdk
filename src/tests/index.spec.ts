import dotenv from 'dotenv';
import laas, { Log } from '@app';

beforeAll(() => {
	dotenv.config({ path: '.env.test' });
});

describe('testing laas', () => {
	it('has sendLog as a function', () => {
		expect('sendLog' in laas).toBe(true);
		expect(typeof laas.sendLog).toBe('function');
	});

	test('returns a boolean result', async () => {
		let log: Log = {
			level: 'fatal',
			text: 'Lorem ipsum dolor sit amet',
		};

		let result = await laas.sendLog(log);
		expect(typeof result).toBe('boolean');
	});

	test('returns true when invalid/no log level is provided', async () => {
		let log = {
			level: 'invalid',
			text: 'Lorem ipsum dolor sit amet',
		};

		let result = await laas.sendLog(log as Log);
		expect(result).toBe(false);
	});

	test('send log with context', async () => {
		let log = {
			level: 'debug',
			text: 'Lorem ipsum dolor sit amet',
			context: {
				foo: 'bar',
				lorem: 'ipsum',
			},
		};

		let result = await laas.sendLog(log as Log);
		expect(result).toBe(true);
	});
});
