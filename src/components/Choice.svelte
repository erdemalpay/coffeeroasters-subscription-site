<script>
    export let subText;
    export let value;
    export let choiceValue;
    export let clickHandler = null;
    export let setValue;
</script>

<div
    class="choice-box"
    class:selected={value == choiceValue}
    on:click={() => {
        setValue(choiceValue);
        if (clickHandler) {
            clickHandler();
        }
    }}
>
    <h2 class="sub-heading">{choiceValue}</h2>
    <p class="sub-text">{subText}</p>
</div>

<style>
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
</style>
