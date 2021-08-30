<script>
    import Button from "../components/Button.svelte";

    let srcHeroCoffeepress = "./images/images-home/image-hero-coffeepress.jpg";
    let srcGranEspresso = "./images/images-home/image-gran-espresso.png";
    let srcPlanalto = "./images/images-home/image-planalto.png";
    let srcPiccollo = "./images/images-home/image-piccollo.png";
    let srcDanche = "./images/images-home/image-danche.png";

    let srcBgSteps = "./images/images-home/bg-steps.png";

    let srcCoffeeBean = "./images/images-home/icon-coffee-bean.svg";
    let srcGift = "./images/images-home/icon-gift.svg";
    let srcTruck = "./images/images-home/icon-truck.svg";
</script>

<main>
    <!-- section-coffeepresso -->
    <div
        class="section-coffeepresso"
        style={`background-image: url(${srcHeroCoffeepress});`}
    >
        <div class="coffeepresso-content">
            <h2 class="coffeepresso-title">Great coffee made simple.</h2>
            <p class="coffeepresso-text">
                Start your mornings with the world’s best coffees. Try our <br
                />
                expertly curated artisan coffees from our best roasters
                <br /> delivered directly to your door, at your schedule.
            </p>
            <div class="coffeepresso-btn">
                <Button buttonName="Create your plan" />
            </div>
        </div>
    </div>

    <!-- section-our-collection -->
    <div class="section-our-collection">
        <div class="our-collection-title-gradient" />
        <h1 class="our-collection-title">our collection</h1>
        <div class="coffee-photos">
            <img
                src={srcGranEspresso}
                class="gran-espresso-photo"
                alt="Gran Espresso"
            />
            <img src={srcPlanalto} class="planalto-photo" alt="Planalto" />
            <img src={srcPiccollo} class="piccollo-photo" alt="Piccollo" />
            <img src={srcDanche} class="danche-photo" alt="Danche" />
        </div>

        <div class="coffees-content">
            <div class="coffee-1">
                <h3 class="coffee-title">Gran Espresso</h3>
                <p class="coffee-text">
                    Light and flavorful blend with cocoa and black pepper for an
                    intense experience
                </p>
            </div>
            <div class="coffee-2">
                <h3 class="coffee-title">Planalto</h3>
                <p class="coffee-text">
                    Brazilian dark roast with rich and velvety body, and hints
                    of fruits and nuts
                </p>
            </div>
            <div class="coffee-3">
                <h3 class="coffee-title">Piccollo</h3>
                <p class="coffee-text">
                    Mild and smooth blend featuring notes of toasted almond and
                    dried cherry
                </p>
            </div>
            <div class="coffee-4">
                <h3 class="coffee-title">Danche</h3>
                <p class="coffee-text">
                    Ethiopian hand-harvested blend densely packed with vibrant
                    fruit notes
                </p>
            </div>
        </div>
    </div>

    <!-- section-why-choose-us -->
    <div
        class="section-why-choose-us"
        style={`background-image: url(${srcBgSteps});`}
    >
        <div class="content-top">
            <h4 class="content-top-title">Why choose us?</h4>
            <p class="content-top-text">
                A large part of our role is choosing which particular coffees
                will be featured<br /> in our range. This means working closely
                with the best coffee growers to give <br />you a more impactful
                experience on every level.
            </p>
        </div>

        <div class="why-choose-us-boxes">
            <div class="box-1">
                <img
                    src={srcCoffeeBean}
                    class="coffee-bean"
                    alt="Coffee Bean"
                />
                <div class="box-content">
                    <h3 class="box-content-title">Best quality</h3>
                    <p class="box-content-text">
                        Discover an endless variety of the world’s best artisan
                        coffee from each of our roasters.
                    </p>
                </div>
            </div>
            <div class="box-2">
                <img src={srcGift} class="gift" alt="Gift" />
                <div class="box-content">
                    <h3 class="box-content-title">Exclusive benefits</h3>
                    <p class="box-content-text">
                        Special offers and swag when you subscribe, including
                        30% off your first shipment.
                    </p>
                </div>
            </div>
            <div class="box-3">
                <img src={srcTruck} class="truck" alt="Truck" />
                <div class="box-content">
                    <h3 class="box-content-title">Free shipping</h3>
                    <p class="box-content-text">
                        We cover the cost and coffee is delivered fast. Peak
                        freshness: guaranteed.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- section-how-it-works -->
    <div class="section-how-it-works">
        <h3 class="how-it-works-header">How it works</h3>

        <div class="how-it-works-content">
            <div class="how-it-works-timeline">
                <ul>
                    <li class="how-it-works-oval-1" />
                    <li class="how-it-works-oval-2" />
                    <li class="how-it-works-oval-3" />
                </ul>
                <div class="how-it-works-line" />
            </div>
            <div class="how-it-works-parts">
                <div class="how-it-works-part-1">
                    <h1 class="part-number">01</h1>
                    <h3 class="part-header">Pick your <br />coffee</h3>
                    <p class="part-text">
                        Select from our evolving range of artisan coffees. Our
                        beans are ethically sourced and we pay fair prices for
                        them. There are new coffees in all profiles every month
                        for you to try out.
                    </p>
                </div>
                <div class="how-it-works-part-2">
                    <h1 class="part-number">02</h1>
                    <h3 class="part-header">Choose the frequency</h3>
                    <p class="part-text">
                        Customize your order frequency, quantity, even your
                        roast style and grind type. Pause, skip or cancel your
                        subscription with no commitment through our online
                        portal.
                    </p>
                </div>
                <div class="how-it-works-part-3">
                    <h1 class="part-number">03</h1>
                    <h3 class="part-header">Receive and enjoy!</h3>
                    <p class="part-text">
                        We ship your package within 48 hours, freshly roasted.
                        Sit back and enjoy award-winning world-class coffees
                        curated to provide a distinct tasting experience.
                    </p>
                </div>
            </div>
        </div>

        <div class="how-it-works-btn">
            <Button buttonName="Create your plan" />
        </div>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* section-coffeepresso */
    .section-coffeepresso {
        height: 600px;
        width: 1280px;
        border-radius: 10px;
    }
    .coffeepresso-content {
        width: 493px;
        margin-left: 85px;
        margin-top: 57px;
        display: flex;
        flex-direction: column;
    }
    .coffeepresso-title {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 72px;
        line-height: 73px;
        color: #fefcf7;
        margin-bottom: 15px;
    }
    .coffeepresso-text {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: rgba(254, 252, 247, 0.8);
    }
    .coffeepresso-btn {
        margin-top: 40px;
    }

    /* section-our-collection */
    .section-our-collection {
        height: 525px;
        margin-top: 151px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .our-collection-title-gradient {
        position: relative;
        background: linear-gradient(
            180deg,
            rgba(254, 252, 247, 0.0001) 0%,
            #fefcf7 100%
        );
        height: 196px;
        width: 1111px;
        z-index: 1;
        top: 110px;
    }
    .our-collection-title {
        position: relative;
        top: 18px;
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 150px;
        line-height: 72px;
        text-align: center;
        color: rgba(131, 136, 143, 0.3);
    }
    .coffees-content {
        display: grid;
        grid-template-columns: 255px 255px 255px 255px;
        grid-gap: 30px 30px;
        font-style: normal;
        text-align: center;
        color: #333d4b;
        margin-top: 49px;
    }
    .coffee-1,
    .coffee-2,
    .coffee-3,
    .coffee-4 {
        display: flex;
        flex-direction: column;
    }
    .coffee-title {
        font-family: "Fraunces", serif;
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 7px;
    }
    .coffee-text {
        font-family: "Barlow", sans-serif;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
    }
    .coffee-photos {
        margin-left: 30px;
        z-index: 2;
        display: grid;
        grid-template-columns: 255px 256px 256px 235px;
        grid-gap: 30px 30px;
    }
    .gran-espresso-photo,
    .planalto-photo,
    .piccollo-photo,
    .danche-photo {
        height: 178px;
    }

    /* section-why-choose-us */
    .section-why-choose-us {
        width: 1280px;
        height: 577px;
        border-radius: 10px;
        margin-top: 185px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .content-top {
        height: 160px;
        display: flex;
        flex-direction: column;
        margin-top: 47px;
    }
    .content-top-title {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 48px;
        text-align: center;
        color: #fefcf7;
        margin-bottom: 15px;
    }
    .content-top-text {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 27px;
        text-align: center;
        color: rgba(254, 252, 247, 0.8);
    }
    /* boxes */
    .why-choose-us-boxes {
        display: grid;
        grid-template-columns: 350px 350px 350px;
        grid-gap: 30px 30px;
        margin-top: 139px;
    }
    .box-1,
    .box-2,
    .box-3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #0e8784;
        border-radius: 8px;
        height: 382px;
    }
    .box-content {
        width: 255px;
        height: 134px;
        font-style: normal;
        text-align: center;
        color: #fefcf7;
        margin-top: 33px;
    }
    .box-content-title {
        font-family: "Fraunces", serif;
        font-weight: 900;
        font-size: 24px;
        line-height: 31px;
    }
    .box-content-text {
        font-family: "Barlow", sans-serif;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
    }
    .coffee-bean,
    .gift {
        margin-top: 72px;
        margin-right: 10px;
    }
    .truck {
        margin-top: 83px;
        margin-bottom: 11px;
    }

    /* section-how-it-works */
    .section-how-it-works {
        width: 1280px;
        margin: 328px auto 200px 165px;
        display: flex;
        flex-direction: column;
    }
    .how-it-works-header {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;
        color: #83888f;
    }
    .how-it-works-content {
        display: flex;
        flex-direction: column;
        margin-top: 39px;
    }
    .how-it-works-timeline {
        width: 790px;
    }
    ul {
        display: flex;
        justify-content: space-between;
        position: relative;
        top: 16px;
    }
    li {
        display: flex;
        height: 27px;
        width: 27px;
        border: 2px solid #0e8784;
        border-radius: 50%;
        background: #fefcf7;
    }
    .how-it-works-line {
        height: 2px;
        border: 0px solid #fdd6ba;
        background: #fdd6ba;
        z-index: -1;
    }
    .how-it-works-parts {
        display: grid;
        grid-template-columns: 285px 285px 285px;
        grid-gap: 95px 95px;
        margin-top: 81px;
    }
    .how-it-works-part-1,
    .how-it-works-part-2,
    .how-it-works-part-3 {
        height: 355px;
        display: flex;
        flex-direction: column;
    }
    .part-number {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 72px;
        line-height: 72px;
        color: #fdd6ba;
    }
    .part-header {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 37px;
        color: #333d4b;
        margin-top: 38px;
    }
    .part-text {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #333d4b;
        margin-top: 9px;
    }
    .how-it-works-btn {
        margin-top: 64px;
    }
</style>
