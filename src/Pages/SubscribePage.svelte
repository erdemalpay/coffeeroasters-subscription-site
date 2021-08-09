<script>
    import Header from "../components/Header.svelte";

    let srcHeroBlackCup = "./images/images-subscribe/image-hero-blackcup.jpg";

    let srcBgSteps = "./images/images-subscribe/bg-steps.png";
</script>

<main>
    <Header />

    <!-- section-create-plan -->
    <div class="section-create-plan">
        <img
            src={srcHeroBlackCup}
            class="srcHeroBlackCup-photo"
            alt="Hero Black Cup"
        />
        <div class="create-plan-content">
            <h2 class="create-plan-title">Create plan</h2>
            <p class="create-plan-text">
                Coffee the way you wanted it to be. For coffee delivered <br />
                tomorrow, or next week. For whatever brew method you use. For
                <br />
                choice, for convenience, for quality.
            </p>
        </div>
    </div>

    <!-- section-how-it-works -->
    <div class="section-how-it-works">
        <img src={srcBgSteps} class="srcBgSteps-photo" alt="Bg Steps" />
        <div class="how-it-works-content">
            <div class="how-it-works-timeline">
                <ul>
                    <li class="how-it-works-oval-1" />
                    <li class="how-it-works-oval-2" />
                    <li class="how-it-works-oval-3" />
                </ul>
                <div class="how-it-works-line" />
            </div>
            <div class="how-it-works-parts">
                <div class="how-it-works-part-1">
                    <h1 class="part-1-number">01</h1>
                    <h3 class="part-1-header">Pick your <br />coffee</h3>
                    <p class="part-1-text">
                        Select from our evolving range of artisan coffees. Our
                        beans are ethically sourced and we pay fair prices for
                        them. There are new coffees in all profiles every month
                        for you to try out.
                    </p>
                </div>
                <div class="how-it-works-part-2">
                    <h1 class="part-1-number">02</h1>
                    <h3 class="part-1-header">Choose the frequency</h3>
                    <p class="part-1-text">
                        Customize your order frequency, quantity, even your
                        roast style and grind type. Pause, skip or cancel your
                        subscription with no commitment through our online
                        portal.
                    </p>
                </div>
                <div class="how-it-works-part-3">
                    <h1 class="part-1-number">03</h1>
                    <h3 class="part-1-header">Receive and enjoy!</h3>
                    <p class="part-1-text">
                        We ship your package within 48 hours, freshly roasted.
                        Sit back and enjoy award-winning world-class coffees
                        curated to provide a distinct tasting experience.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="choose">
        <button class="accordion">Section 1</button>
        <div class="panel">
            <p>Lorem ipsum...</p>
        </div>
        <button class="accordion">Section 2</button>
        <div class="panel">
            <p>Lorem ipsum...</p>
        </div>
        <button class="accordion">Section 3</button>
        <div class="panel">
            <p>Lorem ipsum...</p>
        </div>
    </div>
</main>

<style>
    main {
        width: 1440px;
        height: 3218px;
    }

    /* section-create-plan */
    .section-create-plan {
        width: 1280px;
        height: 450px;
        margin-left: 78px;
        margin-top: 39px;
    }
    .srcHeroBlackCup-photo {
        background: #a2a2a2;
        border-radius: 10px;
    }
    .create-plan-content {
        width: 445px;
        height: 182px;
        margin-left: 85px;
        margin-top: -379px;
        font-style: normal;
        color: #fefcf7;
    }
    .create-plan-title {
        font-family: "Fraunces", serif;
        font-weight: 900;
        font-size: 72px;
        line-height: 72px;
    }
    .create-plan-text {
        font-family: "Barlow", sans-serif;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        margin-top: -28px;
    }

    /* section-how-it-works */
    .section-how-it-works {
        width: 1045px;
        height: 565px;
        margin-left: 78px;
        margin-top: 203px;
    }
    .srcBgSteps-photo {
        width: 1280px;
        height: 653px;
        margin-left: 0px;
        margin-top: -35px;
        z-index: -1;
    }
    .how-it-works-content {
        width: 1045px;
        height: 453px;
        margin-top: -744px;
        margin-left: 85px;
    }
    ul {
        display: flex;
        float: left;
    }
    li {
        display: flex;
        flex-direction: column;
        margin-left: 0px;
        height: 27px;
        width: 27px;
        border: 2px solid #0e8784;
        border-radius: 50%;
        z-index: 1;
    }
    .how-it-works-timeline {
        margin-top: 202px;
    }
    .how-it-works-oval-1 {
        margin-left: -40px;
        margin-top: -30px;
    }
    .how-it-works-oval-2 {
        margin-left: 349px;
        margin-top: -30px;
    }
    .how-it-works-oval-3 {
        margin-left: 349px;
        margin-top: -30px;
    }
    .how-it-works-line {
        height: 0.5px;
        width: 760px;
        margin-left: 15.5px;
        border: 1px solid #fdd6ba;
        background: #fdd6ba;
        z-index: 1;
    }
    .how-it-works-parts {
        display: grid;
        grid-template-columns: 285px 285px 285px;
        grid-gap: 95px 95px;
        margin-top: 81px;
    }
    .how-it-works-part-1 {
        height: 355px;
    }
    .how-it-works-part-2 {
        height: 355px;
    }
    .how-it-works-part-3 {
        height: 355px;
    }
    .part-1-number {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 72px;
        line-height: 72px;
        color: #fdd6ba;
    }
    .part-1-header {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 36px;
        color: #fefcf7;
        margin-top: 39px;
    }
    .part-1-text {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #fefcf7;
        margin-top: 42px;
    }

    /* section choose */
    .choose {
        margin-left: 80px;
        margin-top: 100px;
    }
</style>
