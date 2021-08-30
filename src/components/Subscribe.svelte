<script>
    import choiceStore from "../Stores/choiceStore.js";
    import Button from "../components/Button.svelte";
    import OrderSummaryPopUp from "../components/OrderSummaryPopUp.svelte";
    import OrderSummaryContent from "../components/OrderSummaryContent.svelte";
    import Choices from "./Choices.svelte";
    import Choice from "./Choice.svelte";
    import Questions from "./Questions.svelte";

    let showOrderSummaryPopUp = false;
    let srcHeroBlackCup = "./images/images-subscribe/image-hero-blackcup.jpg";
    let srcBgSteps = "./images/images-subscribe/bg-steps.png";
    let srcBgOrderSummary = "./images/images-subscribe/bg-order-summary.png";

    $: isOpenBeanType = $choiceStore.isOpenBeanType;
    $: isOpenDeliveries = $choiceStore.isOpenDeliveries;
    $: isOpenGrindOption = $choiceStore.isOpenGrindOption;
    $: isOpenPreferences = $choiceStore.isOpenPreferences;
    $: isOpenQuantity = $choiceStore.isOpenQuantity;
    $: valuePreferences = $choiceStore.valuePreferences;
    $: valueBeanType = $choiceStore.valueBeanType;
    $: valueQuantity = $choiceStore.valueQuantity;
    $: valueGrindOption = $choiceStore.valueGrindOption;
    $: valueDeliveries = $choiceStore.valueDeliveries;
    $: priceEveryWeek = $choiceStore.priceEveryWeek;
    $: priceEvery2Weeks = $choiceStore.priceEvery2Weeks;
    $: priceEveryMonth = $choiceStore.priceEveryMonth;

    const toggleIsOpenPreferences = () => {
        choiceStore.update((currentObject) => {
            return {
                ...currentObject,
                isOpenPreferences: !currentObject.isOpenPreferences,
            };
        });
    };
    const toggleIsOpenBeanType = () => {
        choiceStore.update((currentObject) => {
            return {
                ...currentObject,
                isOpenBeanType: !currentObject.isOpenBeanType,
            };
        });
    };
    const toggleIsOpenGrindOption = () => {
        choiceStore.update((currentObject) => {
            return {
                ...currentObject,
                isOpenGrindOption: !currentObject.isOpenGrindOption,
            };
        });
    };
    const closeIsOpenGrindOption = () => {
        choiceStore.update((currentObject) => {
            return {
                ...currentObject,
                isOpenGrindOption: false,
            };
        });
    };
    const toggleIsOpenDeliveries = () => {
        choiceStore.update((currentObject) => {
            return {
                ...currentObject,
                isOpenDeliveries: !currentObject.isOpenDeliveries,
            };
        });
    };
    const toggleIsOpenQuantity = () => {
        choiceStore.update((currentObject) => {
            return {
                ...currentObject,
                isOpenQuantity: !currentObject.isOpenQuantity,
            };
        });
    };

    const setValuePreferences = (newChoiceValue) => {
        choiceStore.update((currentObject) => {
            return {
                ...currentObject,
                valuePreferences: newChoiceValue,
            };
        });
    };
    const setValueQuantity = (newChoiceValue) => {
        let newPriceEveryWeek;
        let newPriceEvery2Weeks;
        let newPriceEveryMonth;
        if (newChoiceValue == "250g") {
            newPriceEveryWeek = "7.20";
            newPriceEvery2Weeks = "9.60";
            newPriceEveryMonth = "12.00";
        } else if (newChoiceValue == "500g") {
            newPriceEveryWeek = "13.000";
            newPriceEvery2Weeks = "17.50";
            newPriceEveryMonth = "22.00";
        } else if (newChoiceValue == "1000g") {
            newPriceEveryWeek = "22.00";
            newPriceEvery2Weeks = "32.00";
            newPriceEveryMonth = "42.00";
        }

        choiceStore.update((currentObject) => {
            return {
                ...currentObject,
                valueQuantity: newChoiceValue,
                priceEveryWeek: newPriceEveryWeek,
                priceEvery2Weeks: newPriceEvery2Weeks,
                priceEveryMonth: newPriceEveryMonth,
            };
        });
    };
    const setValueBeanType = (newChoiceValue) => {
        choiceStore.update((currentObject) => {
            return {
                ...currentObject,
                valueBeanType: newChoiceValue,
            };
        });
    };
    const setValueGrindOption = (newChoiceValue) => {
        choiceStore.update((currentObject) => {
            return {
                ...currentObject,
                valueGrindOption: newChoiceValue,
            };
        });
    };
    const setValueDeliveries = (newChoiceValue) => {
        choiceStore.update((currentObject) => {
            return {
                ...currentObject,
                valueDeliveries: newChoiceValue,
            };
        });
    };

    const PREFERENCES = {
        CAPSULE: "Capsule",
        FILTER: "Filter",
        ESPRESSO: "Espresso",
    };

    export const togglePopUp = () => {
        showOrderSummaryPopUp = !showOrderSummaryPopUp;
    };
</script>

<main>
    <OrderSummaryPopUp {showOrderSummaryPopUp} on:click={togglePopUp} />

    <!-- section-create-plan -->
    <div
        class="section-create-plan"
        style={`background-image: url(${srcHeroBlackCup});`}
    >
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
    <div
        class="section-how-it-works"
        style={`background-image: url(${srcBgSteps});`}
    >
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
                    <h1 class="part-number">01</h1>
                    <h3 class="part-header">Pick your <br />coffee</h3>
                    <p class="part-text">
                        Select from our evolving range of artisan coffees. Our
                        beans are ethically sourced and we pay fair prices for
                        them. There are new coffees in all profiles every month
                        for you to try out.
                    </p>
                </div>
                <div class="how-it-works-part-2">
                    <h1 class="part-number">02</h1>
                    <h3 class="part-header">Choose the frequency</h3>
                    <p class="part-text">
                        Customize your order frequency, quantity, even your
                        roast style and grind type. Pause, skip or cancel your
                        subscription with no commitment through our online
                        portal.
                    </p>
                </div>
                <div class="how-it-works-part-3">
                    <h1 class="part-number">03</h1>
                    <h3 class="part-header">Receive and enjoy!</h3>
                    <p class="part-text">
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
    </div>

    <!-- section-accordion-menu -->
    <div class="section-accordion-menu">
        <div class="accordion-menu">
            <Questions
                bind:isOpen={isOpenPreferences}
                toggleIsOpen={toggleIsOpenPreferences}
                buttonText="How do you drink your coffee?"
            />
            <Choices bind:isOpen={isOpenPreferences}>
                <Choice
                    bind:value={valuePreferences}
                    setValue={setValuePreferences}
                    choiceValue="Capsule"
                    subText="Compatible with Nespresso systems and similar brewers"
                    clickHandler={() => {
                        setValueGrindOption("");
                        closeIsOpenGrindOption();
                    }}
                />
                <Choice
                    bind:value={valuePreferences}
                    setValue={setValuePreferences}
                    choiceValue="Filter"
                    subText="For pour over or drip methods like Aeropress, Chemex, and V60"
                />
                <Choice
                    bind:value={valuePreferences}
                    setValue={setValuePreferences}
                    choiceValue="Espresso"
                    subText="Dense and finely ground beans for an intense, flavorful experience"
                />
            </Choices>
            <Questions
                bind:isOpen={isOpenBeanType}
                toggleIsOpen={toggleIsOpenBeanType}
                buttonText="What type of coffee?"
            />
            <Choices bind:isOpen={isOpenBeanType}>
                <Choice
                    bind:value={valueBeanType}
                    setValue={setValueBeanType}
                    choiceValue="Single Origin"
                    subText="Distinct, high quality coffee from a specific family-owned farm"
                />
                <Choice
                    bind:value={valueBeanType}
                    setValue={setValueBeanType}
                    choiceValue="Decaf"
                    subText="Just like regular coffee, except the caffeine has been removed"
                />
                <Choice
                    bind:value={valueBeanType}
                    setValue={setValueBeanType}
                    choiceValue="Blended"
                    subText="Combination of two or three dark roasted beans of organic coffees"
                />
            </Choices>

            <Questions
                bind:isOpen={isOpenQuantity}
                toggleIsOpen={toggleIsOpenQuantity}
                buttonText="How much would you like?"
            />
            <Choices bind:isOpen={isOpenQuantity}>
                <Choice
                    bind:value={valueQuantity}
                    setValue={setValueQuantity}
                    choiceValue="250g"
                    subText="Perfect for the solo drinker. Yields about 12 delicious cups."
                />
                <Choice
                    bind:value={valueQuantity}
                    setValue={setValueQuantity}
                    choiceValue="500g"
                    subText="Perfect option for a couple. Yields about 40 delectable cups."
                />
                <Choice
                    bind:value={valueQuantity}
                    setValue={setValueQuantity}
                    choiceValue="1000g"
                    subText="Perfect for offices and events. Yields about 90 delightful cups."
                />
            </Choices>

            <Questions
                bind:isOpen={isOpenGrindOption}
                toggleIsOpen={toggleIsOpenGrindOption}
                buttonText="Want us to grind them?"
                openable={valuePreferences != PREFERENCES.CAPSULE}
            />
            <Choices bind:isOpen={isOpenGrindOption}>
                <Choice
                    bind:value={valueGrindOption}
                    setValue={setValueGrindOption}
                    choiceValue="Wholebean"
                    subText="Best choice if you cherish the full sensory experience"
                />
                <Choice
                    bind:value={valueGrindOption}
                    setValue={setValueGrindOption}
                    choiceValue="Filter"
                    subText="For drip or pour-over coffee methods such as V60 or Aeropress."
                />
                <Choice
                    bind:value={valueGrindOption}
                    setValue={setValueGrindOption}
                    choiceValue="Cafetiére"
                    subText="Course ground beans specially suited for french press coffee"
                />
            </Choices>

            <Questions
                bind:isOpen={isOpenDeliveries}
                toggleIsOpen={toggleIsOpenDeliveries}
                buttonText="How often should we deliver?"
            />
            <Choices bind:isOpen={isOpenDeliveries}>
                <Choice
                    bind:value={valueDeliveries}
                    setValue={setValueDeliveries}
                    choiceValue="Every week"
                    subText="${priceEveryWeek} per shipment. Includes free first-class shipping."
                />
                <Choice
                    bind:value={valueDeliveries}
                    setValue={setValueDeliveries}
                    choiceValue="Every 2 weeks"
                    subText="${priceEvery2Weeks} per shipment. Includes free priority shipping."
                />
                <Choice
                    bind:value={valueDeliveries}
                    setValue={setValueDeliveries}
                    choiceValue="Every month"
                    subText="${priceEveryMonth} per shipment. Includes free priority shipping."
                />
            </Choices>
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
            <OrderSummaryContent />
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
        height: 450px;
        border-radius: 10px;
    }
    .create-plan-content {
        width: 445px;
        font-style: normal;
        color: #fefcf7;
        display: flex;
        flex-direction: column;
        margin-left: 85px;
        margin-top: 74px;
    }
    .create-plan-title {
        font-family: "Fraunces", serif;
        font-weight: 900;
        font-size: 72px;
        line-height: 73px;
        margin-bottom: 15px;
    }
    .create-plan-text {
        font-family: "Barlow", sans-serif;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
    }

    /* section-how-it-works */
    .section-how-it-works {
        width: 1280px;
        height: 653px;
        margin-top: 168px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 10px;
    }
    .how-it-works-content {
        width: 1045px;
        height: 453px;
        display: flex;
        flex-direction: column;
        margin-top: 84px;
        margin-left: 85px;
    }
    .how-it-works-timeline {
        width: 790px;
    }
    .how-it-works-line {
        height: 2px;
        width: 760px;
        background: #fdd6ba;
        z-index: -1;
        margin-left: 15.5px;
    }
    ul {
        display: flex;
        justify-content: space-between;
        position: relative;
        top: 16px;
    }
    li {
        display: flex;
        height: 27px;
        width: 27px;
        border: 2px solid #0e8784;
        border-radius: 50%;
    }
    .how-it-works-parts {
        display: grid;
        grid-template-columns: 285px 285px 285px;
        grid-gap: 95px 95px;
        margin-top: 81px;
    }
    .how-it-works-part-1,
    .how-it-works-part-2,
    .how-it-works-part-3 {
        display: flex;
        flex-direction: column;
    }
    .part-number {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 72px;
        line-height: 72px;
        color: #fdd6ba;
    }
    .part-header {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 36px;
        color: #fefcf7;
        margin-top: 40px;
    }
    .part-text {
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
        width: 1110px;
        display: flex;
        justify-content: space-between;
        margin-top: 150px;
        margin-bottom: 168px;
    }

    /* section-titles */
    .section-titles {
        height: 356px;
        display: flex;
        margin-top: 19px;
        flex-direction: column;
        justify-content: space-between;
    }
    .section-titles-part {
        display: flex;
        flex-direction: column;
    }
    .section-titles-content {
        display: flex;
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
        background: rgba(131, 136, 143, 0.25);
        margin-top: 23px;
    }

    /* section-accordion-menu */
    .section-accordion-menu {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    /* section-order-summary */
    .section-order-summary {
        height: 208px;
        width: 730px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        position: relative;
        bottom: 18px;
    }
    .section-order-summary-content {
        width: 602px;
        height: 154px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .section-order-summary-header {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: rgba(255, 255, 255, 0.5);
        margin-top: 47px;
        margin-bottom: 9px;
    }

    /* section-order-summary-btn */
    .order-summary-btn {
        margin-top: 22px;
    }
</style>
