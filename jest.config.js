/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: {
		'^@app': '<rootDir>/src',
		'^@app/(.*)$': '<rootDir>/src/$1',
	},
};
