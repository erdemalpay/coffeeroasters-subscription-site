<script>
    import Header from "../components/Header.svelte";
    import Button from "./components/Button.svelte";

    let srcHeroBlackCup = "./images/images-subscribe/image-hero-blackcup.jpg";

    let srcBgSteps = "./images/images-subscribe/bg-steps.png";

    let srcIconArrow = "./images/images-subscribe/icon-arrow.svg";

    let srcBgOrderSummary = "./images/images-subscribe/bg-order-summary.png";
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

    <!-- section-titles -->
    <div class="section-titles">
        <div class="section-titles-content">
            <h2 class="section-titles-number">01</h2>
            <h3 class="section-titles-header">Preferences</h3>
            <div class="section-titles-line" />
        </div>

        <div class="section-titles-content">
            <h2 class="section-titles-number">02</h2>
            <h3 class="section-titles-header">Bean Type</h3>
            <div class="section-titles-line" />
        </div>

        <div class="section-titles-content">
            <h2 class="section-titles-number">03</h2>
            <h3 class="section-titles-header">Quantity</h3>
            <div class="section-titles-line" />
        </div>

        <div class="section-titles-content">
            <h2 class="section-titles-number">04</h2>
            <h3 class="section-titles-header">Grind Option</h3>
            <div class="section-titles-line" />
        </div>

        <div class="section-titles-content">
            <h2 class="section-titles-number">05</h2>
            <h3 class="section-titles-header">Grind Option</h3>
        </div>
    </div>

    <!-- section-accordion-menu -->
    <div class="section-accordion-menu">
        <div class="section-accordion-menu-1">
            <div class="section-accordion-title">
                <h2 class="section-accordion-menu-header">
                    How do you drink your coffee?
                </h2>
            </div>
            <button class="btn-arrow"
                ><img
                    src={srcIconArrow}
                    class="srcIconArrow-photo"
                    alt="Icon Arrow"
                /></button
            >

            <!-- <div class="accordion-panels">
                <div class="accordion-panel_1">
                    <div class="accordion-part_1">
                        <h3 class="accordion-panel-header">Lorem ipsum</h3>
                        <p class="accordion-panel-text">Lorem ipsum</p>
                    </div>
                    <div class="accordion-part_2">
                        <h3 class="accordion-panel-header">Lorem ipsum</h3>
                        <p class="accordion-panel-text">Lorem ipsum</p>
                    </div>
                    <div class="accordion-part_3">
                        <h3 class="accordion-panel-header">Lorem ipsum</h3>
                        <p class="accordion-panel-text">Lorem ipsum</p>
                    </div>
                </div>
            </div> -->
        </div>

        <div class="section-accordion-menu-2">
            <div class="section-accordion-title">
                <h2 class="section-accordion-menu-header">
                    What type of coffee?
                </h2>
            </div>
            <button class="btn-arrow"
                ><img
                    src={srcIconArrow}
                    class="srcIconArrow-photo"
                    alt="Icon Arrow"
                /></button
            >
            <!-- <div class="accordion-panels">
                <div class="accordion-panel_1">
                    <div class="accordion-part_1">
                        <h3 class="accordion-panel-header">Lorem ipsum</h3>
                        <p class="accordion-panel-text">Lorem ipsum</p>
                    </div>
                    <div class="accordion-part_2">
                        <h3 class="accordion-panel-header">Lorem ipsum</h3>
                        <p class="accordion-panel-text">Lorem ipsum</p>
                    </div>
                    <div class="accordion-part_3">
                        <h3 class="accordion-panel-header">Lorem ipsum</h3>
                        <p class="accordion-panel-text">Lorem ipsum</p>
                    </div>
                </div>
            </div> -->
        </div>

        <div class="section-accordion-menu-3">
            <div class="section-accordion-title">
                <h2 class="section-accordion-menu-header">
                    How much would you like?
                </h2>
            </div>
            <button class="btn-arrow"
                ><img
                    src={srcIconArrow}
                    class="srcIconArrow-photo"
                    alt="Icon Arrow"
                /></button
            >
            <!-- <div class="accordion-panels">
                <div class="accordion-panel_1">
                    <div class="accordion-part_1">
                        <h3 class="accordion-panel-header">Lorem ipsum</h3>
                        <p class="accordion-panel-text">Lorem ipsum</p>
                    </div>
                    <div class="accordion-part_2">
                        <h3 class="accordion-panel-header">Lorem ipsum</h3>
                        <p class="accordion-panel-text">Lorem ipsum</p>
                    </div>
                    <div class="accordion-part_3">
                        <h3 class="accordion-panel-header">Lorem ipsum</h3>
                        <p class="accordion-panel-text">Lorem ipsum</p>
                    </div>
                </div>
            </div> -->
        </div>

        <div class="section-accordion-menu-4">
            <div class="section-accordion-title">
                <h2 class="section-accordion-menu-header">
                    Want us to grind them?
                </h2>
            </div>
            <button class="btn-arrow"
                ><img
                    src={srcIconArrow}
                    class="srcIconArrow-photo"
                    alt="Icon Arrow"
                /></button
            >
            <!-- <div class="accordion-panels">
                <div class="accordion-panel_1">
                    <div class="accordion-part_1">
                        <h3 class="accordion-panel-header">Lorem ipsum</h3>
                        <p class="accordion-panel-text">Lorem ipsum</p>
                    </div>
                    <div class="accordion-part_2">
                        <h3 class="accordion-panel-header">Lorem ipsum</h3>
                        <p class="accordion-panel-text">Lorem ipsum</p>
                    </div>
                    <div class="accordion-part_3">
                        <h3 class="accordion-panel-header">Lorem ipsum</h3>
                        <p class="accordion-panel-text">Lorem ipsum</p>
                    </div>
                </div>
            </div> -->
        </div>

        <div class="section-accordion-menu-5">
            <div class="section-accordion-title">
                <h2 class="section-accordion-menu-header">
                    How often should we deliver?
                </h2>
            </div>
            <button class="btn-arrow"
                ><img
                    src={srcIconArrow}
                    class="srcIconArrow-photo"
                    alt="Icon Arrow"
                /></button
            >
            <!-- <div class="accordion-panels">
                <div class="accordion-panel_1">
                    <div class="accordion-part_1">
                        <h3 class="accordion-panel-header">Lorem ipsum</h3>
                        <p class="accordion-panel-text">Lorem ipsum</p>
                    </div>
                    <div class="accordion-part_2">
                        <h3 class="accordion-panel-header">Lorem ipsum</h3>
                        <p class="accordion-panel-text">Lorem ipsum</p>
                    </div>
                    <div class="accordion-part_3">
                        <h3 class="accordion-panel-header">Lorem ipsum</h3>
                        <p class="accordion-panel-text">Lorem ipsum</p>
                    </div>
                </div>
            </div> -->
        </div>
    </div>

    <!-- section-order-summary -->
    <div class="section-order-summary">
        <img
            src={srcBgOrderSummary}
            class="srcBgOrderSummary-photo"
            alt="Bg Order Summary"
        />
        <div class="section-order-summary-content">
            <h3 class="section-order-summary-header">ORDER SUMMARY</h3>
            <p class="section-order-summary-text">
                “I drink my coffee using Capsules, with a _____ <br /> type of bean.
                _____ , sent to me _____.”
            </p>
        </div>
    </div>

    <!-- section-order-summary-btn -->
    <div class="order-summary-btn">
        <Button />
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
        border-radius: 10px;
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
        height: 1px;
        width: 760px;
        margin-left: 15.5px;
        /* border: 1px solid #fdd6ba; */
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

    /* section-titles */
    .section-titles {
        width: 255px;
        height: 356px;
        margin-left: 162px;
        margin-top: 179px;
        display: flex;
        flex-direction: column;
    }
    .section-titles-content {
        display: flex;
        flex-direction: row;
        height: 32px;

        margin: 24.5px 0px;
    }
    .section-titles-number {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;
        color: #83888f;
        height: 32px;
        width: 30px;
        cursor: pointer;
    }
    .section-titles-number:hover {
        color: #0e8784;
    }
    .section-titles-header {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;
        color: #83888f;
        margin-left: 28.5px;
        margin-top: 19px;
        height: 32px;
        width: 164px;
        cursor: pointer;
    }
    .section-titles-header:hover {
        color: #333d4b;
    }
    .section-titles-line {
        width: 255px;
        height: 1px;
        margin: 74px -228px;

        background: #83888f;
        mix-blend-mode: normal;
        opacity: 0.25;
    }

    /* section-accordion-menu */
    .section-accordion-menu {
        width: 730px;
        height: 2122px;
        margin-left: 542px;
        margin-top: -348px;

        display: grid;
        grid-gap: 88px 88px;
        grid-template-rows: 48px 48px 48px 48px 48px;
    }
    .section-accordion-menu-1,
    .section-accordion-menu-2,
    .section-accordion-menu-3,
    .section-accordion-menu-4,
    .section-accordion-menu-5 {
        width: 730px;
        height: 48px;
    }
    .section-accordion-title {
        width: 730px;
        height: 48px;
        display: flex;
        flex-direction: row;
    }
    .section-accordion-menu-header {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 48px;
        color: #83888f;
    }
    .btn-arrow {
        margin-left: 800px;
        margin-top: 0px;
    }
    /* .accordion-panels {
    .accordion-part_1,
    .accordion-part_1,
    .accordion-part_1 {
    }
    .accordion-panel-header {
    }
    .accordion-panel-text {
    } */

    /* section-order-summary */
    .section-order-summary {
        width: 730px;
        height: 208px;
        margin-left: 544px;
        margin-top: -1408px;
    }
    .srcBgOrderSummary-photo {
        border-radius: 10px;
    }
    .section-order-summary-content {
        width: 602px;
        height: 114px;
        margin-left: 50px;
        margin-top: -181px;
    }
    .section-order-summary-header {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #ffffff;
        mix-blend-mode: normal;
        opacity: 0.5;
    }
    .section-order-summary-text {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 40px;
        color: #ffffff;
        margin-top: -7px;
    }

    /* section-order-summary-btn */
    .order-summary-btn {
        margin-left: 971px;
        margin-top: -16px;
    }

</style>
