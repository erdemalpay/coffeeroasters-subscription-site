<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";

    let srcHeroWhiteCup = "./images/images-about-us/image-hero-whitecup.jpg";

    let srcCommitment = "./images/images-about-us/image-commitment.jpg";
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

    <!-- section-commitment -->
    <div class="section-commitment">
        <img
            src={srcCommitment}
            class="srcCommitment-photo"
            alt="Our Commitment"
        />
        <div class="commitment-content">
            <h2 class="commitment-title">Our commitment</h2>
            <p class="commitment-text">
                We’re built on a simple mission and a commitment to doing good
                along the <br /> way. We want to make it easy for you to
                discover and brew the world’s best <br /> coffee at home. It all
                starts at the source. To locate the specific lots we want <br />
                to purchase, we travel nearly 60 days a year trying to understand
                the <br /> challenges and opportunities in each of these places.
                We collaborate with <br />
                exceptional coffee growers and empower a global community of farmers
                <br />
                through with well above fair-trade benchmarks. We also offer training,
                support <br /> farm community initiatives, and invest in coffee
                plant science. Curating only <br /> the finest blends, we roast
                each lot to highlight tasting profiles distinctive to
                <br />
                their native growing region.
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

    /* section-commitment */
    .section-commitment {
        width: 1110px;
        height: 520px;
        margin-left: 163px;
        margin-top: 168px;
    }
    .srcCommitment-photo {
        width: 445px;
        height: 520px;
        border-radius: 8px;
    }
    .commitment-content {
        width: 540px;
        height: 340px;
        margin-left: 570px;
        margin-top: -469px;
    }
    .commitment-title {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 48px;
        color: #333d4b;
    }
    .commitment-text {
        margin-top: -28px;
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #333d4b;
        margin-top: -0px;
    }
</style>
