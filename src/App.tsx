import { Footer, Header, Main } from "./components"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ProjectsPage } from "./pages"

function Root() {
  return (
    <div className="bg-bg1 min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/projects",
      element: <ProjectsPage />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
