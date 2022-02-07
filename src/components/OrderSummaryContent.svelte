<script>
    import choiceStore from "../Stores/choiceStore.js";

    $: valuePreferences = $choiceStore.valuePreferences;
    $: valueBeanType = $choiceStore.valueBeanType;
    $: valueQuantity = $choiceStore.valueQuantity;
    $: valueGrindOption = $choiceStore.valueGrindOption;
    $: valueDeliveries = $choiceStore.valueDeliveries;

    export let textGrey;

    export const valueGrindOptionOrder = (
        valueGrindOption,
        valuePreferences
    ) => {
        if (valuePreferences == "Capsule") {
            return "";
        }
        return valueGrindOption;
    };

    export const wordChangeOrder = (valuePreferences) => {
        if (valuePreferences == "Capsule") {
            return "using";
        } else {
            return "as";
        }
    };

    export const removeGrindPartOrder = (valuePreferences) => {
        if (valuePreferences == "Capsule") {
            return "";
        } else {
            return "ground ala";
        }
    };
</script>

<div class="text-white" class:text-grey={textGrey}>
    “I drink my coffee {wordChangeOrder(valuePreferences)}
    <div class="order-summary-green-text">
        {valuePreferences}
    </div>
    , with a
    <div class="order-summary-green-text">
        {valueBeanType}
    </div>
    type of bean.
    <div class="order-summary-green-text">
        {valueQuantity}
    </div>
    {removeGrindPartOrder(valuePreferences)}
    <div class="order-summary-green-text">
        {valueGrindOptionOrder(valueGrindOption, valuePreferences)}
    </div>
    , sent to me
    <div class="order-summary-green-text">
        {valueDeliveries}
    </div>
    .”
</div>

<style>
    .text-white {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 40px;
        color: #ffffff;
    }
    .text-grey {
        color: #83888f;
    }
    .order-summary-green-text {
        display: inline;
        color: #0e8784;
    }
</style>
