<script>
    import Button from "../components/Button.svelte";

    import OrderSummaryPopUp from "../components/OrderSummaryPopUp.svelte";

    import OrderSummaryContent from "../components/OrderSummaryContent.svelte";
    let showOrderSummaryPopUp = false;

    let srcHeroBlackCup = "./images/images-subscribe/image-hero-blackcup.jpg";

    let srcBgSteps = "./images/images-subscribe/bg-steps.png";

    let srcBgOrderSummary = "./images/images-subscribe/bg-order-summary.png";

    import Choices from "./Choices.svelte";
    import Choice from "./Choice.svelte";
    import Questions from "./Questions.svelte";

    let isOpenPreferences = false;
    let isOpenBeanType = false;
    let isOpenQuantity = false;
    let isOpenGrindOption = false;
    let isOpenDeliveries = false;
    let valuePreferences = "_____";
    let valueBeanType = "_____";
    let valueQuantity = "_____";
    let valueGrindOption = "_____";
    let valueDeliveries = "_____";
    let priceEveryWeek = "";
    let priceEvery2Weeks = "";
    let priceEveryMonth = "";

    const PREFERENCES = {
        CAPSULE: "Capsule",
        FILTER: "Filter",
        ESPRESSO: "Espresso",
    };

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

    export const togglePopUp = () => {
        showOrderSummaryPopUp = !showOrderSummaryPopUp;
    };
</script>

<main>
    <OrderSummaryPopUp
        {showOrderSummaryPopUp}
        on:click={togglePopUp}
        bind:valuePreferences
        bind:valueBeanType
        bind:valueQuantity
        bind:valueGrindOption
        bind:valueDeliveries
    />

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

    <!-- section-titles__accordion-menu -->
    <div class="section-titles__accordion-menu">
        <!-- section-titles -->
        <div class="section-titles">
            <div class="section-titles-part">
                <div class="section-titles-content">
                    <h2 class="section-titles-number">01</h2>
                    <h3 class="section-titles-header">Preferences</h3>
                </div>
                <div class="section-titles-line" />
            </div>

            <div class="section-titles-part">
                <div class="section-titles-content">
                    <h2 class="section-titles-number">02</h2>
                    <h3 class="section-titles-header">Bean Type</h3>
                </div>
                <div class="section-titles-line" />
            </div>

            <div class="section-titles-part">
                <div class="section-titles-content">
                    <h2 class="section-titles-number">03</h2>
                    <h3 class="section-titles-header">Quantity</h3>
                </div>
                <div class="section-titles-line" />
            </div>

            <div class="section-titles-part">
                <div class="section-titles-content">
                    <h2 class="section-titles-number">04</h2>
                    <h3 class="section-titles-header">Grind Option</h3>
                </div>
                <div class="section-titles-line" />
            </div>

            <div class="section-titles-part">
                <div class="section-titles-content">
                    <h2 class="section-titles-number">05</h2>
                    <h3 class="section-titles-header">Deliveries</h3>
                </div>
            </div>
        </div>

        <!-- section-accordion-menu -->
        <div class="section-accordion-menu">
            <div class="accordion-menu">
                <Questions
                    bind:isOpen={isOpenPreferences}
                    buttonText="How do you drink your coffee?"
                />
                <Choices bind:isOpen={isOpenPreferences}>
                    <Choice
                        bind:value={valuePreferences}
                        choiceValue="Capsule"
                        subText="Compatible with Nespresso systems and similar brewers"
                        clickHandler={() => {
                            valueGrindOption = "";
                            isOpenGrindOption = false;
                        }}
                    />
                    <Choice
                        bind:value={valuePreferences}
                        choiceValue="Filter"
                        subText="For pour over or drip methods like Aeropress, Chemex, and V60"
                    />
                    <Choice
                        bind:value={valuePreferences}
                        choiceValue="Espresso"
                        subText="Dense and finely ground beans for an intense, flavorful experience"
                    />
                </Choices>
                <Questions
                    bind:isOpen={isOpenBeanType}
                    buttonText="What type of coffee?"
                />
                <Choices bind:isOpen={isOpenBeanType}>
                    <Choice
                        bind:value={valueBeanType}
                        choiceValue="Single Origin"
                        subText="Distinct, high quality coffee from a specific family-owned farm"
                    />
                    <Choice
                        bind:value={valueBeanType}
                        choiceValue="Decaf"
                        subText="Just like regular coffee, except the caffeine has been removed"
                    />
                    <Choice
                        bind:value={valueBeanType}
                        choiceValue="Blended"
                        subText="Combination of two or three dark roasted beans of organic coffees"
                    />
                </Choices>

                <Questions
                    bind:isOpen={isOpenQuantity}
                    buttonText="How much would you like?"
                />
                <Choices bind:isOpen={isOpenQuantity}>
                    <Choice
                        bind:value={valueQuantity}
                        choiceValue="250g"
                        subText="Perfect for the solo drinker. Yields about 12 delicious cups."
                    />
                    <Choice
                        bind:value={valueQuantity}
                        choiceValue="500g"
                        subText="Perfect option for a couple. Yields about 40 delectable cups."
                    />
                    <Choice
                        bind:value={valueQuantity}
                        choiceValue="1000g"
                        subText="Perfect for offices and events. Yields about 90 delightful cups."
                    />
                </Choices>

                <Questions
                    bind:isOpen={isOpenGrindOption}
                    buttonText="Want us to grind them?"
                    openable={valuePreferences != PREFERENCES.CAPSULE}
                />
                <Choices bind:isOpen={isOpenGrindOption}>
                    <Choice
                        bind:value={valueGrindOption}
                        choiceValue="Wholebean"
                        subText="Best choice if you cherish the full sensory experience"
                    />
                    <Choice
                        bind:value={valueGrindOption}
                        choiceValue="Filter"
                        subText="For drip or pour-over coffee methods such as V60 or Aeropress."
                    />
                    <Choice
                        bind:value={valueGrindOption}
                        choiceValue="Cafetiére"
                        subText="Course ground beans specially suited for french press coffee"
                    />
                </Choices>

                <Questions
                    bind:isOpen={isOpenDeliveries}
                    buttonText="How often should we deliver?"
                />
                <Choices bind:isOpen={isOpenDeliveries}>
                    <Choice
                        bind:value={valueDeliveries}
                        choiceValue="Every week"
                        subText="${priceEveryWeek} per shipment. Includes free first-class shipping."
                    />
                    <Choice
                        bind:value={valueDeliveries}
                        choiceValue="Every 2 weeks"
                        subText="${priceEvery2Weeks} per shipment. Includes free priority shipping."
                    />
                    <Choice
                        bind:value={valueDeliveries}
                        choiceValue="Every month"
                        subText="${priceEveryMonth} per shipment. Includes free priority shipping."
                    />
                </Choices>
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
                    <OrderSummaryContent
                        bind:valuePreferences
                        bind:valueBeanType
                        bind:valueQuantity
                        bind:valueGrindOption
                        bind:valueDeliveries
                    />
                </div>
            </div>

            <!-- section-order-summary-btn -->
            <div class="order-summary-btn" on:click={togglePopUp}>
                <Button buttonName="Create my plan!" />
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

    /* section-create-plan */
    .section-create-plan {
        width: 1280px;
    }
    .srcHeroBlackCup-photo {
        border-radius: 10px;
    }
    .create-plan-content {
        width: 445px;
        height: 182px;
        font-style: normal;
        color: #fefcf7;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 80px;
        margin-top: -380px;
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
        width: 1280px;
        height: 653px;
        margin-top: 362px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .srcBgSteps-photo {
        width: 1280px;
        height: 653px;
        border-radius: 10px;
        z-index: -1;
    }
    .how-it-works-content {
        width: 1045px;
        height: 453px;
        display: flex;
        flex-direction: column;
        margin-top: -540px;
        margin-left: -65px;
    }
    .how-it-works-timeline {
        width: 790px;
        height: 31px;
        margin-top: -29px;
    }
    .how-it-works-line {
        height: 2px;
        width: 760px;
        background: #fdd6ba;
        z-index: -1;
        margin-left: 15.5px;
        margin-top: -33px;
    }
    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: -40px;
    }
    li {
        display: flex;
        flex-direction: column;
        height: 27px;
        width: 27px;
        border: 2px solid #0e8784;
        border-radius: 50%;
        z-index: 1;
    }
    .how-it-works-parts {
        display: grid;
        grid-template-columns: 285px 285px 285px;
        grid-gap: 95px 95px;
        height: 355px;
        margin-top: 83px;
    }
    .how-it-works-part-1,
    .how-it-works-part-2,
    .how-it-works-part-3 {
        height: 355px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
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
        margin-top: 40px;
    }
    .part-1-text {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #fefcf7;
        margin-top: 9px;
    }

    /* section-titles__accordion-menu */
    .section-titles__accordion-menu {
        height: 3218px;
        width: 1110px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 169px;
    }
    
    /* section-titles */
    .section-titles {
        width: 255px;
        height: 356px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .section-titles-part {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .section-titles-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 32px;
    }
    .section-titles-number {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;
        color: #83888f;
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
        cursor: pointer;
        margin-left: 25px;
    }
    .section-titles-header:hover {
        color: #333d4b;
    }
    .section-titles-line {
        width: 255px;
        height: 1px;
        background: #83888f;
        mix-blend-mode: normal;
        opacity: 0.25;
        margin-top: 23px;
    }

    /* section-accordion-menu */
    .section-accordion-menu {
        margin-top: -19px;
    }

    /* section-order-summary */
    .section-order-summary {
        width: 730px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .srcBgOrderSummary-photo {
        border-radius: 10px;
    }
    .section-order-summary-content {
        width: 602px;
        height: 154px;
        display: flex;
        flex-direction: column;
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
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: 67px;
    }
</style>
