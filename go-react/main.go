package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	//creamos instancia de fiber
	app := fiber.New()

	// Initialize default config
	app.Use(cors.New())

	//implementamos elementos estaticos	
	app.Static("/", "./client/build")

	//crear ruta en GO
	app.Get("/users", func(c *fiber.Ctx) error {
		return c.JSON(&fiber.Map{
			"data": "users desde el backend",
		})
	})

	//agregamos el escuchador
	app.Listen(":3000")
	fmt.Println("Server is running on port 3000")
}
