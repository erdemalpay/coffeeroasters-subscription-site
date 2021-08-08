<script>
    import Header from "../components/Header.svelte";

    let srcHeroBlackCup = "./images/images-subscribe/image-hero-blackcup.jpg";
</script>

<main>
    <Header />

    <!-- section-create-plan -->
    <div class="section-create-plan">
        <img
            src={srcHeroBlackCup}
            class="srcHeroBlackCup-photo"
            alt="Hero Black Cup"
        />
        <div class="create-plan-content">
            <h2 class="create-plan-title">Create plan</h2>
            <p class="create-plan-text">
                Coffee the way you wanted it to be. For coffee delivered <br />
                tomorrow, or next week. For whatever brew method you use. For <br />
                choice, for convenience, for quality.
            </p>
        </div>
    </div>
    <div class="choose">
        <button class="accordion">Section 1</button>
        <div class="panel">
            <p>Lorem ipsum...</p>
        </div>
        <button class="accordion">Section 2</button>
        <div class="panel">
            <p>Lorem ipsum...</p>
        </div>
        <button class="accordion">Section 3</button>
        <div class="panel">
            <p>Lorem ipsum...</p>
        </div>
    </div>
</main>

<style>
    main {
        width: 1440px;
        height: 3218px;
    }

    /* section-create-plan */
    .section-create-plan {
        width: 1280px;
        height: 450px;
        margin-left: 78px;
        margin-top: 39px;
    }
    .srcHeroBlackCup-photo {
        background: #a2a2a2;
        border-radius: 10px;
    }
    .create-plan-content {
        width: 445px;
        height: 182px;
        margin-left: 85px;
        margin-top: -379px;
        font-style: normal;
        color: #fefcf7;
    }
    .create-plan-title {
        font-family: "Fraunces", serif;
        font-weight: 900;
        font-size: 72px;
        line-height: 72px;
    }
    .create-plan-text {
        font-family: "Barlow", sans-serif;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        margin-top: -28px;
    }
</style>
