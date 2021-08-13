<script>
    let isOpenPreferences = false;
    let isOpenBeanType = false;
    let isOpenQuantity = false;
    let isOpenGrindOption = false;
    let isOpenDeliveries = false;
    let valuePreferences = "";
    let valueBeanType = "";
    let valueQuantity = "";
    let valueGrindOption = "";
    let valueDeliveries = "";
    //$: priceEveryweek = valueQuantity == "250g" ? "7.20" : valueQuantity == "500g" ? "13.00" : valueQuantity == "1000g" ? "22.00" : "0";
    let priceEveryweek = "";
    let priceEvery2weeks = "";
    let priceEverymonth = "";

    $: {
        if (valueQuantity == "250g") {
            priceEveryweek = "7.20";
            priceEvery2weeks = "9.60";
            priceEverymonth = "12.00";
        } else if (valueQuantity == "500g") {
            priceEveryweek = "13.00";
            priceEvery2weeks = "17.50";
            priceEverymonth = "22.00";
        } else if (valueQuantity == "1000g") {
            priceEveryweek = "22.00";
            priceEvery2weeks = "32.00";
            priceEverymonth = "42.00";
        }
    }
</script>

<main>
    <div class="accordion-menu">
        <div class="questions">
            <button class="accordion" on:click={() => (isOpenPreferences = !isOpenPreferences)}> How do you drink your coffee? </button>
            <div>
                {#if isOpenPreferences}
                    <img src="../images/iconArrow-up.svg" alt="arrow up" />
                {:else}
                    <img src="../images/iconArrow-down.svg" alt="arrow down" />
                {/if}
            </div>
        </div>
        <div class="panel choices" class:open-panel={isOpenPreferences}>
            <div
                class="choice-box"
                class:selected={valuePreferences == "Capsule"}
                on:click={() => {
                    valuePreferences = "Capsule";
                    valueGrindOption = "";
                    isOpenGrindOption = false;
                }}
            >
                <h2 class="sub-heading">Capsule</h2>
                <p class="sub-text">Compatible with Nespresso systems and similar brewers</p>
            </div>
            <div class="choice-box" class:selected={valuePreferences == "Filter"} on:click={() => (valuePreferences = "Filter")}>
                <h2 class="sub-heading">Filter</h2>
                <p class="sub-text">For pour over or drip methods like Aeropress, Chemex, and V60</p>
            </div>
            <div class="choice-box" class:selected={valuePreferences == "Espresso"} on:click={() => (valuePreferences = "Espresso")}>
                <h2 class="sub-heading">Espresso</h2>
                <p class="sub-text">Dense and finely ground beans for an intense, flavorful experience</p>
            </div>
        </div>
        <div class="questions" on:click={() => (isOpenBeanType = !isOpenBeanType)}>
            <button class="accordion"> What type of coffee? </button>
            <div>
                {#if isOpenBeanType}
                    <img src="../images/iconArrow-up.svg" alt="arrow up" />
                {:else}
                    <img src="../images/iconArrow-down.svg" alt="arrow down" />
                {/if}
            </div>
        </div>
        <div class="panel choices" class:open-panel={isOpenBeanType}>
            <div
                class="choice-box"
                class:selected={valueBeanType == "Single Origin"}
                on:click={() => {
                    valueBeanType = "Single Origin";
                }}
            >
                <h2 class="sub-heading">Single Origin</h2>
                <p class="sub-text">Distinct, high quality coffee from a specific family-owned farm</p>
            </div>
            <div class="choice-box" class:selected={valueBeanType == "Decaf"} on:click={() => (valueBeanType = "Decaf")}>
                <h2 class="sub-heading">Decaf</h2>
                <p class="sub-text">Just like regular coffee, except the caffeine has been removed</p>
            </div>
            <div class="choice-box" class:selected={valueBeanType == "Blended"} on:click={() => (valueBeanType = "Blended")}>
                <h2 class="sub-heading">Blended</h2>
                <p class="sub-text">Combination of two or three dark roasted beans of organic coffees</p>
            </div>
        </div>
        <div class="questions" on:click={() => (isOpenQuantity = !isOpenQuantity)}>
            <button class="accordion"> How much would you like? </button>
            <div>
                {#if isOpenQuantity}
                    <img src="../images/iconArrow-up.svg" alt="arrow up" />
                {:else}
                    <img src="../images/iconArrow-down.svg" alt="arrow down" />
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
                <p class="sub-text">Perfect for the solo drinker. Yields about 12 delicious cups.</p>
            </div>
            <div class="choice-box" class:selected={valueQuantity == "500g"} on:click={() => (valueQuantity = "500g")}>
                <h2 class="sub-heading">500g</h2>
                <p class="sub-text">Perfect option for a couple. Yields about 40 delectable cups.</p>
            </div>
            <div class="choice-box" class:selected={valueQuantity == "1000g"} on:click={() => (valueQuantity = "1000g")}>
                <h2 class="sub-heading">1000g</h2>
                <p class="sub-text">Perfect for offices and events. Yields about 90 delightful cups.</p>
            </div>
        </div>
        {#if valuePreferences != "Capsule"}
            <div class="questions" on:click={() => (isOpenGrindOption = !isOpenGrindOption)}>
                <button class="accordion"> Whant us to grind them? </button>
                <div>
                    {#if isOpenGrindOption}
                        <img src="../images/iconArrow-up.svg" alt="arrow up" />
                    {:else}
                        <img src="../images/iconArrow-down.svg" alt="arrow down" />
                    {/if}
                </div>
            </div>
        {/if}

        {#if valuePreferences == "Capsule"}
            <div class="questions">
                <button class="accordion"> Whant us to grind them? </button>
                <div>
                    <img src="../images/iconArrow-down.svg" alt="arrow down" />
                </div>
            </div>
        {/if}

        <div class="panel choices" class:open-panel={isOpenGrindOption && valuePreferences != "Capsule"}>
            <div class="choice-box" class:selected={valueGrindOption == "Wholebean"} on:click={() => (valueGrindOption = "Wholebean")}>
                <h2 class="sub-heading">Wholebean</h2>
                <p class="sub-text">Best choice if you cherish the full sensory experience</p>
            </div>
            <div class="choice-box" class:selected={valueGrindOption == "Filter"} on:click={() => (valueGrindOption = "Filter")}>
                <h2 class="sub-heading">Filter</h2>
                <p class="sub-text">For drip or pour-over coffee methods such as V60 or Aeropress.</p>
            </div>
            <div class="choice-box" class:selected={valueGrindOption == "Cafetiére"} on:click={() => (valueGrindOption = "Cafetiére")}>
                <h2 class="sub-heading">Cafetiére</h2>
                <p class="sub-text">Course ground beans specially suited for french press coffee</p>
            </div>
        </div>
        <div class="questions" on:click={() => (isOpenDeliveries = !isOpenDeliveries)}>
            <button class="accordion"> How often should we deliver? </button>
            <div>
                {#if isOpenDeliveries}
                    <img src="../images/iconArrow-up.svg" alt="arrow up" />
                {:else}
                    <img src="../images/iconArrow-down.svg" alt="arrow down" />
                {/if}
            </div>
        </div>
        <div class="panel choices" class:open-panel={isOpenDeliveries}>
            <div class="choice-box" class:selected={valueDeliveries == "Every week"} on:click={() => (valueDeliveries = "Every week")}>
                <h2 class="sub-heading">Every week</h2>
                <p class="sub-text">${priceEveryweek} per shipment. Includes free first-class shipping.</p>
            </div>
            <div class="choice-box" class:selected={valueDeliveries == "Every 2 weeks"} on:click={() => (valueDeliveries = "Every 2 weeks")}>
                <h2 class="sub-heading">Every 2 weeks</h2>
                <p class="sub-text">${priceEvery2weeks} per shipment. Includes free priority shipping.</p>
            </div>
            <div class="choice-box" class:selected={valueDeliveries == "Every month"} on:click={() => (valueDeliveries = "Every month")}>
                <h2 class="sub-heading">Every month</h2>
                <p class="sub-text">${priceEverymonth} per shipment. Includes free priority shipping.</p>
            </div>
        </div>
    </div>
</main>

<style>
    /* Style of the buttons that are used to open and close the accordion panel */
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
</style>
