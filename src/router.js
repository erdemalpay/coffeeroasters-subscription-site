import Home from "./pages/HomePage.svelte";
import AboutUsPage from "./pages/AboutUsPage.svelte";
import Subscribe from "./components/Subscribe.svelte";

export const routes = {
    "/": Home,
    "/about": AboutUsPage,
    "/subscribe": Subscribe,
    "*": Home,
};
