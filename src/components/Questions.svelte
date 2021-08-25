<script>
    export let isOpen = false;
    export let buttonText;
    export let openable = true;
</script>

{#if openable}
    <div class="questions">
        <button
            class="accordion"
            on:click={() => {
                isOpen = !isOpen;
            }}
        >
            {buttonText}
        </button>
        <div>
            {#if isOpen}
                <img src="../images/iconArrow-up.svg" alt="arrow up" />
            {:else}
                <img src="../images/iconArrow-down.svg" alt="arrow down" />
            {/if}
        </div>
    </div>
{/if}
{#if !openable}
    <div class="questions">
        <div class="accordion nocursor">{buttonText}</div>
        <div>
            <img src="../images/iconArrow-down.svg" alt="arrow down" />
        </div>
    </div>
{/if}

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
        margin-left: -18px;
    }
    .nocursor {
        cursor: default;
    }
    .questions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 730px;
    }
</style>
