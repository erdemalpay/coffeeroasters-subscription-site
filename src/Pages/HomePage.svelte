<script>
    import Button from "../components/Button.svelte";

    let srcHeroCoffeepress = "./images/images-home/image-hero-coffeepress.jpg";
    let srcGranEspresso = "./images/images-home/image-gran-espresso.png";
    let srcPlanalto = "./images/images-home/image-planalto.png";
    let srcPiccollo = "./images/images-home/image-piccollo.png";
    let srcDanche = "./images/images-home/image-danche.png";

    let srcCoffeeBean = "./images/images-home/icon-coffee-bean.svg";
    let srcGift = "./images/images-home/icon-gift.svg";
    let srcTruck = "./images/images-home/icon-truck.svg";
</script>

<main>
    <!-- section-coffeepresso -->
    <div class="section-coffeepresso">
        <img
            src={srcHeroCoffeepress}
            class="srcHeroCoffeepress-photo"
            alt="Hero Coffeepresso"
        />
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
    <div class="section-why-choose-us">
        <div class="why-choose-us-background" />

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
                    <h3 class="box-content-title-3">Free shipping</h3>
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
                    <h1 class="part-1-number">01</h1>
                    <h3 class="part-1-header">Pick your <br />coffee</h3>
                    <p class="part-1-text">
                        Select from our evolving range of artisan coffees. Our
                        beans are ethically sourced and we pay fair prices for
                        them. There are new coffees in all profiles every month
                        for you to try out.
                    </p>
                </div>
                <div class="how-it-works-part-2">
                    <h1 class="part-1-number">02</h1>
                    <h3 class="part-1-header">Choose the frequency</h3>
                    <p class="part-1-text">
                        Customize your order frequency, quantity, even your
                        roast style and grind type. Pause, skip or cancel your
                        subscription with no commitment through our online
                        portal.
                    </p>
                </div>
                <div class="how-it-works-part-3">
                    <h1 class="part-1-number">03</h1>
                    <h3 class="part-1-header">Receive and enjoy!</h3>
                    <p class="part-1-text">
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
        width: 1440px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* section-coffeepresso */
    .section-coffeepresso {
        height: 600px;
        margin-top: -43px;
    }
    .srcHeroCoffeepress-photo {
        background: #a2a2a2;
        border-radius: 10px;
        z-index: -1;
    }
    .coffeepresso-content {
        width: 493px;
        height: 367px;
        margin-left: 80px;
        margin-top: -546px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-content: space-between;
    }
    .coffeepresso-title {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 72px;
        line-height: 72px;
        color: #fefcf7;
    }
    .coffeepresso-text {
        margin-top: -28px;
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #fefcf7;
        mix-blend-mode: normal;
        opacity: 0.8;
    }
    .coffeepresso-btn {
        margin-top: 40px;
    }

    /* section-our-collection */
    .section-our-collection {
        height: 525px;
        margin-top: 222px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .our-collection-title-gradient {
        position: absolute;
        background: linear-gradient(
            180deg,
            rgba(254, 252, 247, 0.0001) 0%,
            #fefcf7 100%
        );
        height: 196px;
        width: 1111px;
        margin-top: -90px;
        z-index: 0;
    }
    .our-collection-title {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 150px;
        line-height: 72px;
        text-align: center;
        color: #83888f;
    }
    .coffees-content {
        display: grid;
        grid-template-columns: 255px 255px 255px 255px;
        grid-gap: 30px 30px;

        font-style: normal;
        text-align: center;
        color: #333d4b;
        width: 1110px;
        margin-top: 213px;
        z-index: 1;
    }
    .coffee-1,
    .coffee-2,
    .coffee-3,
    .coffee-4 {
        display: flex;
        flex-direction: column;
        align-content: space-between;
    }
    .coffee-title {
        font-family: "Fraunces", serif;
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;
    }
    .coffee-text {
        font-family: "Barlow", sans-serif;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        margin-top: -2px;
    }
    .coffee-photos {
        position: absolute;
        margin-top: 55px;
        margin-left: 10px;
        z-index: 1;

        display: grid;
        grid-template-columns: 255px 256px 256px 235px;
        grid-gap: 30px 30px;
    }
    .gran-espresso-photo,
    .planalto-photo,
    .piccollo-photo {
        height: 180px;
    }
    .danche-photo {
        height: 177px;
    }

    /* section-why-choose-us */
    .section-why-choose-us {
        height: 728px;
        margin-top: 117px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .why-choose-us-background {
        background: #2c343e;
        border-radius: 10px;
        width: 1280px;
        height: 577px;
        z-index: -1;
    }
    .content-top {
        width: 540px;
        height: 160px;
        display: flex;
        flex-direction: column;
        margin-top: -530px;
    }
    .content-top-title {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 48px;
        text-align: center;
        color: #fefcf7;
    }
    .content-top-text {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 27px;
        text-align: center;
        color: #fefcf7;
        mix-blend-mode: normal;
        opacity: 0.8;
        margin-top: -22px;
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
        width: 350px;
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
    .box-content-title,
    .box-content-title-3 {
        font-family: "Fraunces", serif;
        font-weight: 900;
        font-size: 24px;
        line-height: 31px;
    }
    .box-content-title-3 {
        margin-top: 36px;
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
    }
    .truck {
        margin-top: 82px;
    }

    /* section-how-it-works */
    .section-how-it-works {
        height: 565px;
        margin-top: 177px;
        margin-left: -65px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
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
        height: 453px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        margin-top: -36px;
    }
    .how-it-works-timeline {
        margin-top: 167px;
        width: 790px;
    }
    ul {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-left: -40px;
    }
    li {
        display: flex;
        flex-direction: column;
        height: 27px;
        width: 27px;
        border: 2px solid #0e8784;
        border-radius: 50%;
        background: #fefcf7;
    }
    .how-it-works-line {
        height: 2px;
        margin-top: -33px;
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
        justify-content: space-evenly;
        align-items: flex-start;
    }
    .part-1-number {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 72px;
        line-height: 72px;
        color: #fdd6ba;
    }
    .part-1-header {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 37px;
        color: #333d4b;
        margin-top: 38px;
    }
    .part-1-text {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #333d4b;
        margin-top: 9px;
    }
    .how-it-works-btn {
        margin-top: 147px;
    }
</style>
