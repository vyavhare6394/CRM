package com.ankush.exception;


public class CustomerNotFoundExceptionIn extends RuntimeException {

	public CustomerNotFoundExceptionIn() {
	}

	public CustomerNotFoundExceptionIn(String message) {
		super(message);
	}

	public CustomerNotFoundExceptionIn(Throwable cause) {
		super(cause);
	}

	public CustomerNotFoundExceptionIn(String message, Throwable cause) {
		super(message, cause);
	}

	public CustomerNotFoundExceptionIn(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
