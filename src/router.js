import Home from "./pages/HomePage.svelte";
import AboutUsPage from "./pages/AboutUsPage.svelte";
import SubscribePage from "./pages/SubscribePage.svelte";

export const routes = {
    "/": Home,
    "/about": AboutUsPage,
    "/subscribe": SubscribePage,
    "*": Home,
};
