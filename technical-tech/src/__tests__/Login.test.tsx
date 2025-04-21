import {
	act,
	fireEvent,
	render as rtlRender,
	screen,
	waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";

const render = (ui, { route = "/ingreso" } = {}) => {
	window.history.pushState({}, "Test page", route);
	return rtlRender(ui, { wrapper: Router });
};

describe("Login", () => {
	beforeEach(() => {
		render(<App />, { route: "/ingreso" });
	});

	test("Elementos existen", async () => {
		expect(screen.getByTestId("login__title"));
		expect(screen.getByTestId("login__email"));
		expect(screen.getByTestId("login__password"));
		expect(screen.getByTestId("login__btn-login"));

	});

	test("Mensaje de  error Email es requerido", async () => {
		userEvent.type(screen.getByTestId("login__password"), "pássword válido");
		await act(async () => {
			fireEvent.click(screen.getByTestId("login__btn-login"));
		});
		await waitFor(() => screen.getByTestId("alert__text"));

		expect(screen.getByTestId("alert__text"));
		expect(screen.getByText(/Email es requerido/));
	});

	test("Mensaje de  error Contraseña es requerida", async () => {
		userEvent.type(screen.getByTestId("login__email"), "email válido");
		await act(async () => {
			fireEvent.click(screen.getByTestId("login__btn-login"));
		});
		await waitFor(() => screen.getByTestId("alert__text"));

		expect(screen.getByTestId("alert__text"));
		expect(screen.getByText(/Contraseña es requerida/));
	});

	test("Mensaje de  error Datos inválidos", async () => {
		userEvent.type(screen.getByTestId("login__email"), "email inválido");
		userEvent.type(screen.getByTestId("login__password"), "pássword inválido");
		await act(async () => {
			fireEvent.click(screen.getByTestId("login__btn-login"));
		});
		await waitFor(() => screen.getByTestId("alert__text"));

		expect(screen.getByTestId("alert__text"));
		expect(screen.getByText(/Datos inválidos/));
	});
});
