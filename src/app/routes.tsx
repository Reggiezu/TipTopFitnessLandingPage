import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Booking } from "./pages/Booking";
import { Videos } from "./pages/Videos";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Guides } from "./pages/Guides";
import { GuideDetail } from "./pages/GuideDetail";
import { Transformations } from "./pages/Transformations";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "guides", Component: Guides },
      { path: "guides/:slug", Component: GuideDetail },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
      { path: "transformations", Component: Transformations },
      // hidden for now
      { path: "booking", Component: Booking },
      { path: "videos", Component: Videos },
      { path: "about", Component: About },
    ],
  },
]);