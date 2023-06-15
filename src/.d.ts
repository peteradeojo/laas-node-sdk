export interface Log {
	level: 'info' | 'warn' | 'error' | 'fatal' | 'debug';
	text: string;
}

export interface Laas {
	sendLog: (log: Log, appToken?: string) => Promise<boolean>;
}
