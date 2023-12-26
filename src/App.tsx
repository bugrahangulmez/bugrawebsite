import { Footer, Header, Main } from "./components"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AboutPage, BlogPage, ContactPage, ProjectsPage } from "./pages"

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
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/blog",
      element: <BlogPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
