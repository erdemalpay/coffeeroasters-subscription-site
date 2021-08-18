<script>
    import Choices from "./Choices.svelte";
    import Choice from "./Choice.svelte";
    import Questions from "./Questions.svelte";

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
</script>

<main>
    <div class="accordion-menu">
        <Questions bind:isOpen={isOpenPreferences} buttonText="How do you drink your coffee?" />
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
            <Choice bind:value={valuePreferences} choiceValue="Filter" subText="For pour over or drip methods like Aeropress, Chemex, and V60" />
            <Choice bind:value={valuePreferences} choiceValue="Espresso" subText="Dense and finely ground beans for an intense, flavorful experience" />
        </Choices>
        <Questions bind:isOpen={isOpenBeanType} buttonText="What type of coffee?" />
        <Choices bind:isOpen={isOpenBeanType}>
            <Choice bind:value={valueBeanType} choiceValue="Single Origin" subText="Distinct, high quality coffee from a specific family-owned farm" />
            <Choice bind:value={valueBeanType} choiceValue="Decaf" subText="Just like regular coffee, except the caffeine has been removed" />
            <Choice bind:value={valueBeanType} choiceValue="Blended" subText="Combination of two or three dark roasted beans of organic coffees" />
        </Choices>

        <Questions bind:isOpen={isOpenQuantity} buttonText="How much would you like?" />
        <Choices bind:isOpen={isOpenQuantity}>
            <Choice bind:value={valueQuantity} choiceValue="250g" subText="Perfect for the solo drinker. Yields about 12 delicious cups." />
            <Choice bind:value={valueQuantity} choiceValue="500g" subText="Perfect option for a couple. Yields about 40 delectable cups." />
            <Choice bind:value={valueQuantity} choiceValue="1000g" subText="Perfect for offices and events. Yields about 90 delightful cups." />
        </Choices>

        <Questions bind:isOpen={isOpenGrindOption} buttonText="Want us to grind them?" openable={valuePreferences != PREFERENCES.CAPSULE} />
        <Choices bind:isOpen={isOpenGrindOption}>
            <Choice bind:value={valueGrindOption} choiceValue="Wholebean" subText="Best choice if you cherish the full sensory experience" />
            <Choice bind:value={valueGrindOption} choiceValue="Filter" subText="For drip or pour-over coffee methods such as V60 or Aeropress." />
            <Choice bind:value={valueGrindOption} choiceValue="Cafetiére" subText="Course ground beans specially suited for french press coffee" />
        </Choices>

        <Questions bind:isOpen={isOpenDeliveries} buttonText="How often should we deliver?" />
        <Choices bind:isOpen={isOpenDeliveries}>
            <Choice bind:value={valueDeliveries} choiceValue="Every week" subText="${priceEveryWeek} per shipment. Includes free first-class shipping." />
            <Choice bind:value={valueDeliveries} choiceValue="Every 2 weeks" subText="${priceEvery2Weeks} per shipment. Includes free priority shipping." />
            <Choice bind:value={valueDeliveries} choiceValue="Every month" subText="${priceEveryMonth} per shipment. Includes free priority shipping." />
        </Choices>
    </div>
</main>
