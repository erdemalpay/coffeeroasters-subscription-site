<script>
    import Header from "./components/Header.svelte";
    import Button from "./components/Button.svelte";

    let srcHeroCoffeepress = "./images/images-home/image-hero-coffeepress.jpg";
</script>

<main>
    <Header />
    <!-- section-coffeepresso -->
    <div class="section-coffeepresso">
        <img
            src={srcHeroCoffeepress}
            class="srcHeroCoffeepress-photo"
            alt="Hero Coffeepresso"
        />
        <div class="coffeepresso-content">
            <h1>Great coffee made simple.</h1>
            <p>
                Start your mornings with the world’s best coffees. Try our
                expertly curated artisan coffees from our best roasters
                delivered directly to your door, at your schedule.
            </p>
        </div>
        <Button />
    </div>
</main>

<style>
    /* section-coffeepresso */
    .section-coffeepresso {
        width: 1280px;
        height: 600px;
        margin-left: 78px;
        margin-top: 39px;
    }
    .srcHeroCoffeepress-photo {
        background: #a2a2a2;
        border-radius: 10px;
        z-index: -1;
    }
    .coffeepresso-content {
        width: 493px;
        height: 255px;
        margin-left: 85px;
        margin-top: -487px;
    }
    h1 {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 72px;
        line-height: 72px;
        color: #fefcf7;
    }
    p {
        margin-top: 32.5px;

        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #fefcf7;
        mix-blend-mode: normal;
        opacity: 0.8;
    }
</style>
