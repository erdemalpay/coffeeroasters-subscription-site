<script>
    import Button from "./Button.svelte";

    import OrderSummaryContent from "../components/OrderSummaryContent.svelte";

    let textGrey = true;

    export let valuePreferences;
    export let valueBeanType;
    export let valueQuantity;
    export let valueGrindOption;
    export let valueDeliveries;

    export let showOrderSummaryPopUp;
    export let closeOrderSummaryPopUp;
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

        <div class="order-summary-chapter">
            <div class="order-summary-content">
                <OrderSummaryContent
                    {textGrey}
                    bind:valuePreferences
                    bind:valueBeanType
                    bind:valueQuantity
                    bind:valueGrindOption
                    bind:valueDeliveries
                />
            </div>

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
        margin: -113px;
    }
    main {
        width: 540px;
        background: #fefcf7;
        border-radius: 8px;
        position: fixed;
        z-index: 3;
        margin: -113px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .order-summary-header {
        background: #333d4b;
        border-radius: 8px 8px 0px 0px;
        width: 540px;
        height: 136px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .order-summary-title {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 48px;
        color: #ffffff;
        padding: 48px 148px 40px 56px;
    }
    .order-summary-chapter {
        width: 461px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 58px 0px 57px 0px;
    }
    .order-summary-content {
        width: 428px;
        color: #83888f;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .order-summary-remind {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #333d4b;
        mix-blend-mode: normal;
        opacity: 0.8;
        width: 428px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 6px;
    }
    .order-summary-payment {
        width: 428px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 31px;
    }
    .order-summary-total {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 36px;
        color: #333d4b;
    }
</style>
