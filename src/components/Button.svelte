<script>
    export let buttonName;
</script>

<main>
    <button class="btn">{buttonName}</button>
</main>

<style>
    .btn {
        background: #0e8784;
        border-radius: 6px;
        width: 217px;
        height: 56px;

        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        color: #fefcf7;
        cursor: pointer;
    }
    .btn:hover {
        background: #66d2cf;
    }
</style>
