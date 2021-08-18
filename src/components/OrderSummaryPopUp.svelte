<script>
    import Button from "./Button.svelte";

    import OrderSummaryContent from "../components/OrderSummaryContent.svelte";

    let valuePreferences = "";
    let valueBeanType = "";
    let valueQuantity = "";
    let valueGrindOption = "";
    let valueDeliveries = "";
    let valueDefault = "_____";

    export let showOrderSummaryPopUp;
    export let closeOrderSummaryPopUp;

    /* const valueOrder = (value) => {
        if (!value) {
            return valueDefault;
        } else {
            return value;
        }
    };

    const valueGrindOptionOrder = (valueGrindOption, valuePreferences) => {
        if (valuePreferences == "Capsule") {
            return "";
        }
        if (!valueGrindOption) {
            return valueDefault;
        } else {
            return valueGrindOption;
        }
    };

    const wordChangeOrder = (valuePreferences) => {
        if (valuePreferences == "Capsule") {
            return "using";
        } else {
            return "as";
        }
    };

    const removeGrindPartOrder = (valuePreferences) => {
        if (
            valuePreferences == "Filter" ||
            valuePreferences == "Espresso" ||
            valuePreferences == ""
        ) {
            return "ground ala";
        } else if (valuePreferences == "Capsule") {
            return "";
        }
    }; */
</script>

{#if showOrderSummaryPopUp}
    <div
        class="order-summary-background"
        class:closeOrderSummaryPopUp
        on:click|self
    />
    <main>
        <div class="order-summary-header">
            <h2 class="order-summary-title">Order Summary</h2>
        </div>

        <OrderSummaryContent />

        <p class="order-summary-remind">
            Is this correct? You can proceed to checkout or go back to<br />
            plan selection if something is off. Subscription discount<br />
            codes can also be redeemed at the checkout.
        </p>

        <div class="order-summary-payment">
            <div class="order-summary-total">$14.00/ mo</div>
            <div class="order-summary-btn">
                <Button buttonName="Checkout" />
            </div>
        </div>
    </main>
{/if}

<style>
    .order-summary-background {
        position: absolute;
        background-color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
        z-index: 2;
        height: 4136px;
        width: 1440px;
        margin: 0px;
    }
    main {
        width: 540px;
        height: 597px;
        margin-left: 450px;
        margin-top: 214px;
        background: #fefcf7;
        border-radius: 8px;
        position: fixed;
        z-index: 3;
    }
    .order-summary-header {
        background: #333d4b;
        border-radius: 8px 8px 0px 0px;
        width: 540px;
        height: 136px;
        margin-top: -33px;
    }
    .order-summary-title {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 48px;
        color: #ffffff;
        padding-top: 48px;
        padding-left: 57px;
    }
    /* .section-order-summary-content {
        height: 160px;
        width: 428px;
        margin-left: 56px;
        margin-top: 65px;
    }
    .section-order-summary-text {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 40px;
        color: #83888f;
        margin-top: -7px;
    }
    .order-summary-green-text {
        display: inline;
        color: #0e8784;
    } */
    .order-summary-remind {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #333d4b;
        mix-blend-mode: normal;
        opacity: 0.8;
        margin-left: 56px;
        margin-top: 6px;
    }
    .order-summary-payment {
        margin-left: 56px;
        margin-top: 58px;
        display: flex;
        flex-direction: row;
    }
    .order-summary-total {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 36px;
        color: #333d4b;
    }
    .order-summary-btn {
        margin-left: -66px;
        margin-top: -66px;
    }
</style>
