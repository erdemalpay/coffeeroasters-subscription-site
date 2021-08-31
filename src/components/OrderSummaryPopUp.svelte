<script>
    import Button from "./Button.svelte";
    import choiceStore from "../Stores/choiceStore.js";

    import OrderSummaryContent from "../components/OrderSummaryContent.svelte";

    let textGrey = true;

    $: valueQuantity = $choiceStore.valueQuantity;
    $: valueDeliveries = $choiceStore.valueDeliveries;
    $: priceEveryWeek = $choiceStore.priceEveryWeek;
    $: priceEvery2Weeks = $choiceStore.priceEvery2Weeks;
    $: priceEveryMonth = $choiceStore.priceEveryMonth;

    export let showOrderSummaryPopUp;
    export let closeOrderSummaryPopUp;

    $: totalPrice = total(valueQuantity, valueDeliveries);

    const total = (valueQuantity, valueDeliveries) => {
        if (valueQuantity == "250g") {
            if (valueDeliveries == "Every week") {
                return priceEveryWeek;
            } else if (valueDeliveries == "Every 2 weeks") {
                return priceEvery2Weeks;
            } else if (valueDeliveries == "Every month") {
                return priceEveryMonth;
            }
        } else if (valueQuantity == "500g") {
            if (valueDeliveries == "Every week") {
                return priceEveryWeek;
            } else if (valueDeliveries == "Every 2 weeks") {
                return priceEvery2Weeks;
            } else if (valueDeliveries == "Every month") {
                return priceEveryMonth;
            }
        } else if (valueQuantity == "1000g") {
            if (valueDeliveries == "Every week") {
                return priceEveryWeek;
            } else if (valueDeliveries == "Every 2 weeks") {
                return priceEvery2Weeks;
            } else if (valueDeliveries == "Every month") {
                return priceEveryMonth;
            }
        }
    };
</script>

{#if showOrderSummaryPopUp}
    <main class:closeOrderSummaryPopUp>
        <div class="order-summary-background" on:click|self />
        <div class="order-summary-display">
            <div class="order-summary-header">
                <h2 class="order-summary-title">Order Summary</h2>
            </div>

            <div class="order-summary-chapter">
                <div class="order-summary-content">
                    <OrderSummaryContent {textGrey} />
                </div>

                <p class="order-summary-remind">
                    Is this correct? You can proceed to checkout or go back to<br
                    />
                    plan selection if something is off. Subscription discount<br
                    />
                    codes can also be redeemed at the checkout.
                </p>

                <div class="order-summary-payment">
                    <div class="order-summary-total">
                        <div>
                            ${totalPrice} /
                        </div>
                        <div>{valueDeliveries}</div>
                    </div>
                    <div class="order-summary-btn">
                        <Button buttonName="Checkout" />
                    </div>
                </div>
            </div>
        </div>
    </main>
{/if}

<style>
    main {
        position: fixed;
        height: 100%;
        width: 1440px;
        margin: -113px;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 2;
    }
    .order-summary-background {
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .order-summary-display {
        background: #fefcf7;
        border-radius: 8px;
        width: 540px;
        position: fixed;
        display: flex;
        flex-direction: column;
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
    }
    .order-summary-remind {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: rgba(51, 61, 75, 0.8);
        width: 428px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 6px;
    }
    .order-summary-payment {
        width: 428px;
        display: flex;
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
        display: flex;
        flex-direction: column;
        width: 198px;
    }
</style>
