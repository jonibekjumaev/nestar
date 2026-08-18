export interface T {
	[key: string]: any;
}

export interface FormattedErrorExtensions {
	code?: string;
	exception?: {
		response?: {
			message?: string;
		};
	};
	response?: {
		message?: string;
	};
}
