<script>
    import Router from "svelte-spa-router";
    import { routes } from "./router";

    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
</script>

<body>
    <Header />
    <Router {routes} />
    <Footer />
</body>
