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

describe("Navigación", () => {
	afterAll(()=>cleanup())
	
	test("Opciones en el header Ingreso, Usuarios, Crear y Cerrar Sesión", async () => {
		render(<App />);
		expect(screen.getByTestId("header__link-login"));
		expect(screen.getByTestId("header__link-users"));
		expect(screen.getByTestId("header__link-create"));
		expect(screen.getByTestId("header__link-signout"));

		expect(screen.getAllByText(/ingreso/i))
		expect(screen.getAllByText(/usuarios/i))
		expect(screen.getAllByText(/crear/i))
		expect(screen.getAllByText(/cerrar Sesión/i))
	});

	test("Ruta Error404", async () => {
		render(<App />, { route: "/cualquier-ruta-con-error" });
		expect(screen.getByTestId("error404__title"));
		expect(screen.getByText(/no encontramos esta página./i))
	});

	test("Sin token redirige a Ingreso", async () => {
		render(<App />, { route: "/ingreso" });
		expect(screen.getByTestId("login__title"));
		expect(screen.getAllByText(/ingreso/i).length).toBeGreaterThan(1)

		fireEvent.click(screen.getByTestId("header__link-users"));
		await waitFor(() => screen.getByTestId("login__title"));

		fireEvent.click(screen.getByTestId("header__link-create"));
		await waitFor(() => screen.getByTestId("login__title"));
	});

	test("Con token navega a crear, usuarios y cierra sesión.", async () => {
		render(<App />, { route: "/ingreso" });

		userEvent.type(screen.getByTestId("login__email"), "eve.holt@reqres.in");
		userEvent.type(screen.getByTestId("login__password"), "cityslicka");
		await act(async () => {
			fireEvent.click(screen.getByTestId("login__btn-login"));
		});

		fireEvent.click(screen.getByTestId("header__link-users"));
		await waitFor(() => screen.getByTestId("users__title"));
		expect(screen.getAllByText(/usuarios/i).length).toBeGreaterThan(1)

		fireEvent.click(screen.getByTestId("header__link-create"));
		await waitFor(() => screen.getByTestId("create__title"));
		expect(screen.getAllByText(/crear/i).length).toBeGreaterThan(1)

		await act(async () => {
			fireEvent.click(screen.getByTestId("header__link-signout"));
		});
		await waitFor(() => screen.getByTestId("login__title"));
	});
});
