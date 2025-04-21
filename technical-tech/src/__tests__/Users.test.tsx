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

describe("Users", () => {
	beforeEach(async () => {
		render(<App />, { route: "/ingreso" });

		userEvent.type(screen.getByTestId("login__email"), "eve.holt@reqres.in");
		userEvent.type(screen.getByTestId("login__password"), "cityslicka");

		await act(async () => {
			fireEvent.click(screen.getByTestId("login__btn-login"));
		});

		fireEvent.click(screen.getByTestId("header__link-users"));
		await waitFor(() => screen.getByTestId("users__title"));
	});
	test("Elementos existen", async () => {
		expect(screen.getByTestId("users__title"));
		expect(screen.getByTestId("users__table"));
		expect(screen.getByTestId("users__btn-create"));

		await waitFor(() => screen.getByText("george.bluth@reqres.in"), {
			timeout: 3000,
		});

		expect(screen.getAllByTestId(/user__img-*/).length).toBeGreaterThan(5)
		expect(screen.getAllByRole("img").length).toBeGreaterThan(5);
		expect(screen.getAllByTestId(/users__btn-page-*/).length).toBeGreaterThan(1)
		

		await act(async () => {
			fireEvent.click(screen.getByTestId("header__link-signout"));
		});
	});

	test("Botón redirecciona a /crear", async () => {
		fireEvent.click(screen.getByTestId("users__btn-create"));
		await waitFor(() => screen.getByTestId("create__title"));

		await act(async () => {
			fireEvent.click(screen.getByTestId("header__link-signout"));
		});
	});
});
