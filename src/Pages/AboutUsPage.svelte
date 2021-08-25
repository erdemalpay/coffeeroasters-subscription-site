<script>
    let srcHeroWhiteCup = "./images/images-about-us/image-hero-whitecup.jpg";

    let srcCommitment = "./images/images-about-us/image-commitment.jpg";

    let srcBgQuality = "./images/images-about-us/bg-quality.png";
    let srcQuality = "./images/images-about-us/image-quality.jpg";

    let srcUk = "./images/images-about-us/illustration-uk.svg";
    let srcCanada = "./images/images-about-us/illustration-canada.svg";
    let srcAustralia = "./images/images-about-us/illustration-australia.svg";
</script>

<main>
    <!-- section-about-us -->
    <div
        class="section-about-us"
        style={`background-image: url(${srcHeroWhiteCup});`}
    >
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
    <div
        class="section-quality"
        style={`background-image: url(${srcBgQuality});`}
    >
        <div class="quality-content">
            <div class="quality-content-left">
                <h2 class="quality-title">Uncompromising quality</h2>
                <p class="quality-text">
                    Although we work with growers who pay close attention to all
                    stages of <br /> harvest and processing, we employ, on our
                    end, a rigorous quality control <br /> program to avoid
                    over-roasting or baking the coffee dry. Every bag of coffee
                    is <br /> tagged with a roast date and batch number. Our
                    goal is to roast consistent, <br />
                    user-friendly coffee, so that brewing is easy and enjoyable.
                </p>
            </div>
            <img
                src={srcQuality}
                class="srcQuality-photo"
                alt="Uncompromising Quality"
            />
        </div>
    </div>

    <!-- section-headquarters -->
    <div class="section-headquarters">
        <h3 class="headquarters-header">Our headquarters</h3>

        <div class="headquarters-photos">
            <img src={srcUk} class="srcUk-photo" alt="Uk Map" />
            <img src={srcCanada} class="srcCanada-photo" alt="Canada Map" />
            <img
                src={srcAustralia}
                class="srcAustralia-photo"
                alt="Australia Map"
            />
        </div>

        <div class="headquarters-content">
            <div>
                <h3 class="part-header">United Kingdom</h3>
                <p class="part-text">
                    68 Asfordby Rd <br /> Alcaston <br /> SY6 1YA <br /> +44 1241
                    918425
                </p>
            </div>
            <div>
                <h3 class="part-header">Canada</h3>
                <p class="part-text">
                    1528 Eglinton Avenue <br /> Toronto <br /> Ontario M4P 1A6
                    <br /> +1 416 485 2997
                </p>
            </div>
            <div>
                <h3 class="part-header">Australia</h3>
                <p class="part-text">
                    36 Swanston Street <br /> Kewell <br /> Victoria <br /> +61 4
                    9928 3629
                </p>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* section-about-us */
    .section-about-us {
        height: 450px;
        width: 1280px;
        border-radius: 10px;
        display: flex;
    }
    .about-us-content {
        width: 445px;
        height: 176px;
        font-style: normal;
        color: #fefcf7;
        display: flex;
        flex-direction: column;
        margin: 85px;
    }
    .about-us-title {
        font-family: "Fraunces", serif;
        font-weight: 900;
        font-size: 40px;
        line-height: 48px;
        margin-top: 52px;
        margin-bottom: 8px;
    }
    .about-us-text {
        font-family: "Barlow", sans-serif;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
    }

    /* section-commitment */
    .section-commitment {
        width: 1110px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .commitment-title {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 48px;
        color: #333d4b;
        margin-top: 15px;
        margin-bottom: 16px;
    }
    .commitment-text {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #333d4b;
        mix-blend-mode: normal;
        opacity: 0.8;
    }

    /* section-quality */
    .section-quality {
        margin-top: 256px;
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 10px;
        width: 1280px;
        height: 474px;
    }
    .quality-content {
        width: 1110px;
        height: 210px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 55px;
    }
    .quality-content-left {
        width: 540px;
        height: 210px;
        display: flex;
        flex-direction: column;
    }
    .quality-title {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 48px;
        color: #fefcf7;
        margin-top: 33px;
        margin-bottom: 16px;
    }
    .quality-text {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #fefcf7;
    }
    .srcQuality-photo {
        width: 445px;
        height: 474px;
        border-radius: 8px;
        margin-top: -22px;
    }

    /* section-headquarters */
    .section-headquarters {
        width: 1045px;
        height: 366px;
        display: flex;
        flex-direction: column;
        margin-top: 145px;
        margin-bottom: 191px;
        margin-left: -65px;
    }
    .headquarters-header {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;
        color: #83888f;
    }
    .headquarters-photos {
        display: grid;
        grid-template-columns: 285px 285px 285px;
        grid-gap: 95px 95px;
        margin-top: 46px;
    }
    .srcUk-photo {
        height: 49.07px;
        width: 40.84px;
    }
    .srcCanada-photo {
        height: 49.96px;
        width: 51.56px;
    }
    .srcAustralia-photo {
        height: 43.9px;
        width: 48.97px;
    }
    .headquarters-content {
        display: grid;
        grid-template-columns: 285px 285px 285px;
        grid-gap: 95px 95px;
        margin-top: 15px;
    }
    .part-header {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 36px;
        color: #333d4b;
        margin-bottom: 22px;
    }
    .part-text {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 27px;
        color: #333d4b;
    }
</style>
