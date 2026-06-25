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
      // hidden for now
      { path: "booking", Component: Booking },
      { path: "videos", Component: Videos },
      { path: "about", Component: About },
    ],
  },
]);