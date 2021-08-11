<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";

    let srcHeroWhiteCup = "./images/images-about-us/image-hero-whitecup.jpg";

    let srcCommitment = "./images/images-about-us/image-commitment.jpg";

    let srcBgQuality = "./images/images-about-us/bg-quality.png";
    let srcQuality = "./images/images-about-us/image-quality.jpg";

    let srcUk = "./images/images-about-us/illustration-uk.svg";
    let srcCanada = "./images/images-about-us/illustration-canada.svg";
    let srcAustralia = "./images/images-about-us/illustration-australia.svg";
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

    <!-- section-quality -->
    <div class="section-quality">
        <img src={srcBgQuality} class="srcBgQuality-photo" alt="Bg Quality" />
        <div class="quality-content">
            <h2 class="quality-title">Uncompromising quality</h2>
            <p class="quality-text">
                Although we work with growers who pay close attention to all
                stages of <br /> harvest and processing, we employ, on our end,
                a rigorous quality control <br /> program to avoid over-roasting
                or baking the coffee dry. Every bag of coffee is <br /> tagged
                with a roast date and batch number. Our goal is to roast
                consistent, <br />
                user-friendly coffee, so that brewing is easy and enjoyable.
                <img
                    src={srcQuality}
                    class="srcQuality-photo"
                    alt="Uncompromising Quality"
                />
            </p>
        </div>
    </div>

    <!-- section-headquarters -->
    <div class="section-headquarters">
        <h3 class="headquarters-header">Our headquarters</h3>

        <div class="headquarters-content">
            <div class="headquarters-parts">
                <div>
                    <img src={srcUk} class="srcUk-photo" alt="Uk Map" />
                    <h3 class="part-1-header">United Kingdom</h3>
                    <p class="part-1-text">
                        68 Asfordby Rd <br /> Alcaston <br /> SY6 1YA <br /> +44
                        1241 918425
                    </p>
                </div>
                <div>
                    <img
                        src={srcCanada}
                        class="srcCanada-photo"
                        alt="Canada Map"
                    />
                    <h3 class="part-1-header">Canada</h3>
                    <p class="part-1-text">
                        1528 Eglinton Avenue <br /> Toronto <br /> Ontario M4P
                        1A6 <br /> +1 416 485 2997
                    </p>
                </div>
                <div>
                    <img
                        src={srcAustralia}
                        class="srcAustralia-photo"
                        alt="Australia Map"
                    />
                    <h3 class="part-3-header">Australia</h3>
                    <p class="part-3-text">
                        36 Swanston Street <br /> Kewell <br /> Victoria <br /> +61
                        4 9928 3629
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- section-footer -->
    <div class="headquarters-footer">
        <Footer />
    </div>
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
        margin-top: 171px;
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

    /* section-quality */
    .section-quality {
        width: 1280px;
        height: 562px;
        margin-left: -303px;
        margin-top: 356px;
    }
    .srcBgQuality-photo {
        width: 1280px;
        height: 474px;
        margin-left: 380px;
        margin-top: -100px;
        border-radius: 10px;
    }
    .srcQuality-photo {
        width: 445px;
        height: 474px;
        margin-left: 663px;
        margin-top: -387px;
        border-radius: 8px;
    }
    .quality-content {
        width: 540px;
        height: 210px;
        margin-left: 465px;
        margin-top: -423px;
    }
    .quality-title {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 48px;
        color: #fefcf7;
    }
    .quality-text {
        margin-top: -28px;
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #fefcf7;
        margin-top: 0px;
    }

    /* section-headquarters */
    .section-headquarters {
        width: 1045px;
        height: 366px;
        margin-left: 165px;
        margin-top: -43px;
    }
    .headquarters-header {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;
        color: #83888f;
    }
    .headquarters-content {
        width: 1045px;
        height: 262px;
        margin-left: 0px;
    }
    .headquarters-parts {
        display: grid;
        grid-template-columns: 285px 285px 285px;
        grid-gap: 95px 95px;
        margin-top: 81px;
    }
    .srcUk-photo {
        height: 49.07px;
        width: 40.8px;
        margin-top: -6px;
        margin-left: 2px;
    }
    .srcCanada-photo {
        height: 49.9px;
        width: 51.5px;
        margin-top: -6px;
        margin-left: 2px;
    }
    .srcAustralia-photo {
        height: 43.9px;
        width: 48.9px;
        margin-top: -6px;
        margin-left: 2px;
    }
    .part-1-header {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 36px;
        color: #333d4b;
        margin-top: 39px;
    }
    .part-1-text {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #333d4b;
        margin-top: -9px;
    }
    .part-3-header {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 36px;
        color: #333d4b;
        margin-top: 45px;
    }
    .part-3-text {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #333d4b;
        margin-top: -9px;
    }

    /* section-footer */
    .headquarters-footer {
        margin-top: -151px;
    }
</style>
