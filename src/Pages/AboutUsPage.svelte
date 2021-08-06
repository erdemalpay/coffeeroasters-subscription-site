<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";

    let srcHeroWhiteCup = "./images/images-about-us/image-hero-whitecup.jpg";
</script>

<main>
    <Header />

    <!-- section-about-us -->
    <div class="section-about-us">
        <img
            src={srcHeroWhiteCup}
            class="srcHeroWhiteCup-photo"
            alt="Hero White Cup"
        />
        <div class="about-us-content">
            <h2 class="about-us-title">About Us</h2>
            <p class="about-us-text">
                Coffeeroasters began its journey of exotic discovery in 1999, <br
                />
                highlighting stories of coffee from around the world. We have
                <br />
                since been dedicated to bring the perfect cup - from bean to
                <br />
                brew - in every shipment.
            </p>
        </div>
    </div>
    <Footer />
</main>

<style>
    main {
        width: 1440px;
        height: 2891px;
    }

    /* section-about-us */
    .section-about-us {
        width: 1280px;
        height: 450px;
        margin-left: 78px;
        margin-top: 39px;
    }
    .srcHeroWhiteCup-photo {
        background: #a2a2a2;
        border-radius: 10px;
    }
    .about-us-content {
        width: 445px;
        height: 176px;
        margin-left: 85px;
        margin-top: -350px;
        font-style: normal;
        color: #fefcf7;
    }
    .about-us-title {
        font-family: "Fraunces", serif;
        font-weight: 900;
        font-size: 40px;
        line-height: 48px;
    }
    .about-us-text {
        font-family: "Barlow", sans-serif;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        margin-top: -9px;
    }
</style>
