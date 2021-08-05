<script>
    import Header from "./components/Header.svelte";
    import Button from "./components/Button.svelte";
    import Footer from "./components/Footer.svelte";

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
    <Header />
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
                expertly curated artisan coffees from our best roasters <br /> delivered
                directly to your door, at your schedule.
            </p>
        </div>
        <Button />
    </div>

    <!-- section-our-collection -->
    <div class="section-our-collection">
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
                will be featured in our range. This means working closely with
                the best coffee growers to give you a more impactful experience
                on every level.
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
                    <p class="box-content-text-3">
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
            <Button />
        </div>
    </div>
    <Footer />
</main>

<style>
    /* section-coffeepresso */
    .section-coffeepresso {
        width: 1280px;
        height: 600px;
        margin-left: 78px;
        margin-top: 39px;
    }
    .srcHeroCoffeepress-photo {
        background: #a2a2a2;
        border-radius: 10px;
        z-index: -1;
    }
    .coffeepresso-content {
        width: 493px;
        height: 255px;
        margin-left: 85px;
        margin-top: -546px;
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

    /* section-our-collection */
    .section-our-collection {
        width: 1111px;
        height: 525px;
        margin-left: 165px;
        margin-top: 222px;
    }
    .our-collection-title {
        font-family: "Fraunces", serif;
        font-style: normal;
        font-weight: 900;
        font-size: 150px;
        line-height: 72px;
        text-align: center;
        color: #83888f;

        background-color: linear-gradient(180deg, #83888f 0.01% #fefcf7 100%);
        /* -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */
        background-size: 100%;
        background-size: 1111px 196px;
    }
    .coffees-content {
        display: grid;
        grid-template-columns: 255px 255px 255px 255px;
        grid-gap: 30px 30px;

        font-style: normal;
        text-align: center;
        color: #333d4b;
    }
    .coffee-title {
        font-family: "Fraunces", serif;
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;
        margin-top: 67px;
        margin-left: -3px;
    }
    .coffee-text {
        font-family: "Barlow", sans-serif;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        margin-left: -3px;
    }
    .coffee-photos {
        margin-top: -17px;
    }
    .gran-espresso-photo {
        width: 255px;
        height: 180px;
        margin-left: 4px;
    }
    .planalto-photo {
        width: 256px;
        height: 180px;
        margin-left: 27px;
    }
    .piccollo-photo {
        width: 256px;
        height: 180px;
        margin-left: 24px;
    }
    .danche-photo {
        height: 180px;
        width: 234.8px;
        margin-left: 35px;
    }

    /* section-why-choose-us */
    .section-why-choose-us {
        width: 1280px;
        height: 728px;
        margin-left: 80px;
        margin-top: 113px;
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
        margin-left: 370px;
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
        line-height: 26px;
        text-align: center;
        color: #fefcf7;
        mix-blend-mode: normal;
        opacity: 0.8;
        margin-top: -20px;
    }
    /* boxes */
    .why-choose-us-boxes {
        display: grid;
        grid-template-columns: 350px 350px 350px;
        grid-gap: 30px 30px;
        margin-left: 85px;
    }
    .box-1,
    .box-2,
    .box-3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 87px;
        background: #0e8784;
        border-radius: 8px;
        width: 350px;
        height: 382px;
    }
    .box-content {
        width: 255px;
        height: 134px;
        margin-top: 33px;
        font-style: normal;
        text-align: center;
        color: #fefcf7;
    }
    .box-content-title {
        font-family: "Fraunces", serif;
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;
        margin-left: -5px;
    }
    .box-content-title-3 {
        font-family: "Fraunces", serif;
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;
        margin-left: -5px;
        margin-top: 36px;
    }
    .box-content-text {
        font-family: "Barlow", sans-serif;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        margin-left: -5px;
    }
    .box-content-text-3 {
        font-family: "Barlow", sans-serif;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        margin-left: -5px;
        margin-top: 15px;
    }
    .coffee-bean {
        width: 72px;
        height: 72px;
        margin-top: 72px;
    }
    .gift {
        width: 72px;
        height: 72px;
        margin-top: 72px;
        margin-left: -10px;
    }
    .truck {
        width: 72px;
        height: 50px;
        margin-top: 82px;
        margin-left: -10px;
    }

    /* section-how-it-works */
    .section-how-it-works {
        width: 1045px;
        height: 565px;
        margin-left: 164px;
        margin-top: 203px;
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
        width: 1045px;
        height: 453px;
    }
    ul {
        display: flex;
        float: left;
    }
    li {
        display: flex;
        flex-direction: column;
        margin-left: 0px;
        height: 27px;
        width: 27px;
        border: 2px solid #0e8784;
        border-radius: 50%;
        background: #fefcf7;
    }
    .how-it-works-timeline {
        margin-top: 203px;
    }
    .how-it-works-oval-1 {
        margin-left: -40px;
        margin-top: -30px;
    }
    .how-it-works-oval-2 {
        margin-left: 349px;
        margin-top: -30px;
    }
    .how-it-works-oval-3 {
        margin-left: 349px;
        margin-top: -30px;
    }
    .how-it-works-line {
        height: 2px;
        width: 760px;
        margin-left: 15.5px;
        margin-top: -110px;
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
    .how-it-works-part-1 {
        height: 355px;
    }
    .how-it-works-part-2 {
        height: 355px;
    }
    .how-it-works-part-3 {
        height: 355px;
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
        line-height: 36px;
        color: #333d4b;
        margin-top: 39px;
    }
    .part-1-text {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #333d4b;
        margin-top: 42px;
    }
    .how-it-works-btn {
        margin-left: -50px;
        margin-top: -6px;
    }
</style>
