import {
	act,
	cleanup,
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

describe("Crear", () => {
	beforeEach(async () => {
		render(<App />, { route: "/ingreso" });

		userEvent.type(screen.getByTestId("login__email"), "eve.holt@reqres.in");
		userEvent.type(screen.getByTestId("login__password"), "cityslicka");
		await act(async () => {
			fireEvent.click(screen.getByTestId("login__btn-login"));
		});

		fireEvent.click(screen.getByTestId("header__link-users"));
		await waitFor(() => screen.getByTestId("users__title"));

		fireEvent.click(screen.getByTestId("header__link-create"));
		await waitFor(() => screen.getByTestId("create__title"));
	});

	test("Elementos existen", async () => {
		expect(screen.getByTestId("create__title"));
		expect(screen.getByTestId("create__name"));
		expect(screen.getByTestId("create__job"));
		expect(screen.getByTestId("create__btn"));

		await act(async () => {
			fireEvent.click(screen.getByTestId("header__link-signout"));
		});
	});

	test("Mensaje de  error 'Nombre requerido'", async () => {
		userEvent.type(screen.getByTestId("create__job"), "trabajo válido");
		await act(async () => {
			fireEvent.click(screen.getByTestId("create__btn"));
		});

		await waitFor(() => screen.getByTestId("alert__text"));

		expect(screen.getByTestId("alert__text"));
		expect(screen.getByText(/Nombre requerido/));

		await act(async () => {
			fireEvent.click(screen.getByTestId("header__link-signout"));
		});
	});

	test("Mensaje de  error 'Trabajo requerido'", async () => {
		userEvent.type(screen.getByTestId("create__name"), "nombre válido");
		await act(async () => {
			fireEvent.click(screen.getByTestId("create__btn"));
		});

		await waitFor(() => screen.getByTestId("alert__text"));

		expect(screen.getByTestId("alert__text"));
		expect(screen.getByText(/Trabajo requerido/));

		await act(async () => {
			fireEvent.click(screen.getByTestId("header__link-signout"));
		});
	});
});
