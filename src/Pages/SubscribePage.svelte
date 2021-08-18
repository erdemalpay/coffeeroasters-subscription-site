<script>
    import Header from "../components/Header.svelte";
    import Button from "../components/Button.svelte";
    import Footer from "../components/Footer.svelte";

    import OrderSummaryPopUp from "../components/OrderSummaryPopUp.svelte";

    import OrderSummaryContent from "../components/OrderSummaryContent.svelte";
    let showOrderSummaryPopUp = false;

    let srcHeroBlackCup = "./images/images-subscribe/image-hero-blackcup.jpg";

    let srcBgSteps = "./images/images-subscribe/bg-steps.png";

    let srcIconArrow = "./images/images-subscribe/icon-arrow.svg";

    let srcBgOrderSummary = "./images/images-subscribe/bg-order-summary.png";

    let valuePreferences = "_____";
    let valueBeanType = "_____";
    let valueQuantity = "_____";
    let valueGrindOption = "_____";
    let valueDeliveries = "_____";
    /* let valueDefault = "_____"; */

    /* esranın kodu */
    let isOpenPreferences = false;
    let isOpenBeanType = false;
    let isOpenQuantity = false;
    let isOpenGrindOption = false;
    let isOpenDeliveries = false;
    let priceEveryWeek = "";
    let priceEvery2Weeks = "";
    let priceEveryMonth = "";
    const capsule = "Capsule";
    const filter = "Filter";
    const espresso = "Espresso";

    $: {
        if (valueQuantity == "250g") {
            priceEveryWeek = "7.20";
            priceEvery2Weeks = "9.60";
            priceEveryMonth = "12.00";
        } else if (valueQuantity == "500g") {
            priceEveryWeek = "13.00";
            priceEvery2Weeks = "17.50";
            priceEveryMonth = "22.00";
        } else if (valueQuantity == "1000g") {
            priceEveryWeek = "22.00";
            priceEvery2Weeks = "32.00";
            priceEveryMonth = "42.00";
        }
    }
    /* esranın kodu */

    export const togglePopUp = () => {
        showOrderSummaryPopUp = !showOrderSummaryPopUp;
    };
</script>

<main>
    <OrderSummaryPopUp {showOrderSummaryPopUp} on:click={togglePopUp} />
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
        <!-- esranın kodu -->
        <div class="accordion-menu">
            <div class="questions">
                <button
                    class="accordion"
                    on:click={() => (isOpenPreferences = !isOpenPreferences)}
                >
                    How do you drink your coffee?
                </button>
                <div>
                    {#if isOpenPreferences}
                        <img src="../images/iconArrow-up.svg" alt="arrow up" />
                    {:else}
                        <img
                            src="../images/iconArrow-down.svg"
                            alt="arrow down"
                        />
                    {/if}
                </div>
            </div>
            <div class="panel choices" class:open-panel={isOpenPreferences}>
                <div
                    class="choice-box"
                    class:selected={valuePreferences == capsule}
                    on:click={() => {
                        valuePreferences = capsule;
                        valueGrindOption = "";
                        isOpenGrindOption = false;
                    }}
                >
                    <h2 class="sub-heading">Capsule</h2>
                    <p class="sub-text">
                        Compatible with Nespresso systems and similar brewers
                    </p>
                </div>
                <div
                    class="choice-box"
                    class:selected={valuePreferences == filter}
                    on:click={() => (valuePreferences = "Filter")}
                >
                    <h2 class="sub-heading">Filter</h2>
                    <p class="sub-text">
                        For pour over or drip methods like Aeropress, Chemex,
                        and V60
                    </p>
                </div>
                <div
                    class="choice-box"
                    class:selected={valuePreferences == espresso}
                    on:click={() => (valuePreferences = "Espresso")}
                >
                    <h2 class="sub-heading">Espresso</h2>
                    <p class="sub-text">
                        Dense and finely ground beans for an intense, flavorful
                        experience
                    </p>
                </div>
            </div>
            <div
                class="questions"
                on:click={() => (isOpenBeanType = !isOpenBeanType)}
            >
                <button class="accordion"> What type of coffee? </button>
                <div>
                    {#if isOpenBeanType}
                        <img src="../images/iconArrow-up.svg" alt="arrow up" />
                    {:else}
                        <img
                            src="../images/iconArrow-down.svg"
                            alt="arrow down"
                        />
                    {/if}
                </div>
            </div>
            <div class="panel choices" class:open-panel={isOpenBeanType}>
                <div
                    class="choice-box"
                    class:selected={valueBeanType == "Single Origin"}
                    on:click={() => (valueBeanType = "Single Origin")}
                >
                    <h2 class="sub-heading">Single Origin</h2>
                    <p class="sub-text">
                        Distinct, high quality coffee from a specific
                        family-owned farm
                    </p>
                </div>
                <div
                    class="choice-box"
                    class:selected={valueBeanType == "Decaf"}
                    on:click={() => (valueBeanType = "Decaf")}
                >
                    <h2 class="sub-heading">Decaf</h2>
                    <p class="sub-text">
                        Just like regular coffee, except the caffeine has been
                        removed
                    </p>
                </div>
                <div
                    class="choice-box"
                    class:selected={valueBeanType == "Blended"}
                    on:click={() => (valueBeanType = "Blended")}
                >
                    <h2 class="sub-heading">Blended</h2>
                    <p class="sub-text">
                        Combination of two or three dark roasted beans of
                        organic coffees
                    </p>
                </div>
            </div>
            <div
                class="questions"
                on:click={() => (isOpenQuantity = !isOpenQuantity)}
            >
                <button class="accordion"> How much would you like? </button>
                <div>
                    {#if isOpenQuantity}
                        <img src="../images/iconArrow-up.svg" alt="arrow up" />
                    {:else}
                        <img
                            src="../images/iconArrow-down.svg"
                            alt="arrow down"
                        />
                    {/if}
                </div>
            </div>
            <div class="panel choices" class:open-panel={isOpenQuantity}>
                <div
                    class="choice-box"
                    class:selected={valueQuantity == "250g"}
                    on:click={() => {
                        valueQuantity = "250g";
                    }}
                >
                    <h2 class="sub-heading">250g</h2>
                    <p class="sub-text">
                        Perfect for the solo drinker. Yields about 12 delicious
                        cups.
                    </p>
                </div>
                <div
                    class="choice-box"
                    class:selected={valueQuantity == "500g"}
                    on:click={() => (valueQuantity = "500g")}
                >
                    <h2 class="sub-heading">500g</h2>
                    <p class="sub-text">
                        Perfect option for a couple. Yields about 40 delectable
                        cups.
                    </p>
                </div>
                <div
                    class="choice-box"
                    class:selected={valueQuantity == "1000g"}
                    on:click={() => (valueQuantity = "1000g")}
                >
                    <h2 class="sub-heading">1000g</h2>
                    <p class="sub-text">
                        Perfect for offices and events. Yields about 90
                        delightful cups.
                    </p>
                </div>
            </div>
            {#if valuePreferences != capsule}
                <div
                    class="questions"
                    on:click={() => (isOpenGrindOption = !isOpenGrindOption)}
                >
                    <button class="accordion"> Want us to grind them? </button>
                    <div>
                        {#if isOpenGrindOption}
                            <img
                                src="../images/iconArrow-up.svg"
                                alt="arrow up"
                            />
                        {:else}
                            <img
                                src="../images/iconArrow-down.svg"
                                alt="arrow down"
                            />
                        {/if}
                    </div>
                </div>
            {/if}

            {#if valuePreferences == capsule}
                <div class="questions">
                    <button class="accordion"> Whant us to grind them? </button>
                    <div>
                        <img
                            src="../images/iconArrow-down.svg"
                            alt="arrow down"
                        />
                    </div>
                </div>
            {/if}

            <div
                class="panel choices"
                class:open-panel={isOpenGrindOption &&
                    valuePreferences != capsule}
            >
                <div
                    class="choice-box"
                    class:selected={valueGrindOption == "Wholebean"}
                    on:click={() => (valueGrindOption = "Wholebean")}
                >
                    <h2 class="sub-heading">Wholebean</h2>
                    <p class="sub-text">
                        Best choice if you cherish the full sensory experience
                    </p>
                </div>
                <div
                    class="choice-box"
                    class:selected={valueGrindOption == "Filter"}
                    on:click={() => (valueGrindOption = "Filter")}
                >
                    <h2 class="sub-heading">Filter</h2>
                    <p class="sub-text">
                        For drip or pour-over coffee methods such as V60 or
                        Aeropress.
                    </p>
                </div>
                <div
                    class="choice-box"
                    class:selected={valueGrindOption == "Cafetiére"}
                    on:click={() => (valueGrindOption = "Cafetiére")}
                >
                    <h2 class="sub-heading">Cafetiére</h2>
                    <p class="sub-text">
                        Course ground beans specially suited for french press
                        coffee
                    </p>
                </div>
            </div>
            <div
                class="questions"
                on:click={() => (isOpenDeliveries = !isOpenDeliveries)}
            >
                <button class="accordion">
                    How often should we deliver?
                </button>
                <div>
                    {#if isOpenDeliveries}
                        <img src="../images/iconArrow-up.svg" alt="arrow up" />
                    {:else}
                        <img
                            src="../images/iconArrow-down.svg"
                            alt="arrow down"
                        />
                    {/if}
                </div>
            </div>
            <div class="panel choices" class:open-panel={isOpenDeliveries}>
                <div
                    class="choice-box"
                    class:selected={valueDeliveries == "Every week"}
                    on:click={() => (valueDeliveries = "Every week")}
                >
                    <h2 class="sub-heading">Every week</h2>
                    <p class="sub-text">
                        ${priceEveryWeek} per shipment. Includes free first-class
                        shipping.
                    </p>
                </div>
                <div
                    class="choice-box"
                    class:selected={valueDeliveries == "Every 2 weeks"}
                    on:click={() => (valueDeliveries = "Every 2 weeks")}
                >
                    <h2 class="sub-heading">Every 2 weeks</h2>
                    <p class="sub-text">
                        ${priceEvery2Weeks} per shipment. Includes free priority
                        shipping.
                    </p>
                </div>
                <div
                    class="choice-box"
                    class:selected={valueDeliveries == "Every month"}
                    on:click={() => (valueDeliveries = "Every month")}
                >
                    <h2 class="sub-heading">Every month</h2>
                    <p class="sub-text">
                        ${priceEveryMonth} per shipment. Includes free priority shipping.
                    </p>
                </div>
            </div>
        </div>
        <!-- esranın kodu -->
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
            <OrderSummaryContent bind:valuePreferences
            bind:valueBeanType
            bind:valueQuantity
            bind:valuePreferences
            bind:valuePreferences />
        </div>
    </div>

    <!-- section-order-summary-btn -->
    <div class="order-summary-btn" on:click={togglePopUp}>
        <Button buttonName="Create my plan!" />
    </div>

    <!-- section-footer -->
    <div class="section-footer">
        <Footer />
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
        margin-top: -540px;
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
        position: absolute;
        margin-top: -84px;
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
        height: 2px;
        width: 760px;
        margin-left: 15.5px;
        background: #fdd6ba;
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

    /* esranın kodu */
    .accordion {
        cursor: pointer;
        padding: 18px;
        width: 730px;
        text-align: left;
        border: none;
        outline: none;
        transition: 0.4s;
        font-family: Fraunces;
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 48px;
        color: #83888f;
        background-color: white;
    }
    .panel {
        background-color: white;
        display: block;
        height: 0px;
        overflow: hidden;
        width: 730px;
    }
    .open-panel {
        height: 306px;
    }
    .choices {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 88px;
    }
    .choice-box {
        width: 228px;
        height: 250px;
        background-color: #f4f1eb;
        border-radius: 8px;
        margin-top: 56px;
        cursor: pointer;
    }
    .selected {
        background-color: #0e8784;
    }
    .choice-box:hover {
        background-color: #fdd6ba;
        cursor: pointer;
    }
    .selected:hover {
        background-color: #0e8784;
    }
    .sub-heading {
        font-family: Fraunces;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;
        color: #333d4b;
        margin: 0px 28px;
        margin-top: 32px;
    }
    .sub-text {
        font-family: Barlow;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #333d4b;
        margin: 0px 28px;
        margin-top: 24px;
    }
    .questions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 730px;
    }

    /* esranın kodu */

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
        height: 154px;
        margin-left: 64px;
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

    /* section-order-summary-btn */
    .order-summary-btn {
        margin-left: 971px;
        margin-top: -16px;
    }

    /* section-footer */
    .section-footer {
        margin-top: -149px;
    }
</style>
