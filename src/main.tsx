import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import { RouterProvider } from "react-router-dom"
import { AppRoutes } from "./routes.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={AppRoutes} />
	</React.StrictMode>
)
