<script>
    import choiceStore from "../Stores/choiceStore.js";
    let valuePreferences;
    let valueBeanType;
    let valueQuantity;
    let valueGrindOption;
    let valueDeliveries;
    let valueDefault;

    export let textGrey;

    export const valueOrder = (value) => {
        if (!value) {
            return valueDefault;
        } else {
            return value;
        }
    };

    export const valueGrindOptionOrder = (valueGrindOption, valuePreferences) => {
        if (valuePreferences == "Capsule") {
            return "";
        }
        if (!valueGrindOption) {
            return valueDefault;
        } else {
            return valueGrindOption;
        }
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
    choiceStore.subscribe((data) => {
        valuePreferences = data.valuePreferences;
        valueBeanType = data.valueBeanType;
        valueQuantity = data.valueQuantity;
        valueGrindOption = data.valueGrindOption;
        valueDeliveries = data.valueDeliveries;
    });
</script>

<div class="text-white" class:text-grey={textGrey}>
    “I drink my coffee {wordChangeOrder(valuePreferences)}
    <div class="order-summary-green-text">
        {valueOrder(valuePreferences)}
    </div>
    , with a
    <div class="order-summary-green-text">
        {valueOrder(valueBeanType)}
    </div>
    type of bean.
    <div class="order-summary-green-text">
        {valueOrder(valueQuantity)}
    </div>
    {removeGrindPartOrder(valuePreferences)}
    <div class="order-summary-green-text">
        {valueGrindOptionOrder(valueGrindOption, valuePreferences)}
    </div>
    , sent to me
    <div class="order-summary-green-text">
        {valueOrder(valueDeliveries)}
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
