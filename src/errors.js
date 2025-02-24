export class TimeoutError extends Error {
	constructor(timeout) {
		super("Timeout exceeded.");
		this.name = "TimeoutError";
		this.timeout = timeout;
	}
}

export class RetryError extends Error {
	constructor(retries, reason, url) {
		super(`Retries exhausted. URL: ${url} - Last Error: ${reason.message}`);
		this.name = "RetryError";
		this.retries = retries;
		this.exception = reason;
	}
}

export class AbortError extends Error {
	constructor() {
		super("The user aborted a request.");
		this.name = "AbortError";
	}
}
