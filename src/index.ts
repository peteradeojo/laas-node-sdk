import axios from 'axios';

export interface Log {
	level: 'info' | 'warn' | 'error' | 'fatal' | 'debug';
	text: string;
}

export default {
	sendLog: async (log: Log, appToken?: string) => {
		try {
			const response = await axios.post(
				'https://laas-api-nest.onrender.com/logs',
				log,
				{
					headers: {
						APP_ID: appToken || process.env.LAAS_APP_TOKEN,
					},
				}
			);

			if (response.status == 200 || response.status == 201) return true;

			return false;
		} catch (err: any) {
			// console.error(err);
			// console.error(err.response?.message);
			// console.error(err.response?.status);
			return false;
		}
	},
};
