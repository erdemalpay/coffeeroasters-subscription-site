<script>
    let srcLogo = "./images/images-footer/logo-footer.svg";

    let srcFacebook = "./images/images-footer/icon-facebook.svg";
    let srcInstagram = "./images/images-footer/icon-instagram.svg";
    let srcTwitter = "./images/images-footer/icon-twitter.svg";
</script>

<main>
    <div class="section-footer">
        <div class="footer-left">
            <img src={srcLogo} class="srcLogo" alt="Cofferoasters Logo" />
            <navbar>
                <ul>
                    <li><a class="home" href="#/">HOME</a></li>
                    <li>
                        <a class="about-us" href="#/about">ABOUT US</a>
                    </li>
                    <li>
                        <a class="create-your-plan" href="#/subscribe"
                            >CREATE YOUR PLAN</a
                        >
                    </li>
                </ul>
            </navbar>
        </div>
        <div class="footer-icons">
            <a target="_blank" href="https://www.facebook.com/">
                <img
                    src={srcFacebook}
                    class="srcFacebook"
                    alt="Facebook Logo"
                />
            </a>
            <a target="_blank" href="https://twitter.com/">
                <img src={srcTwitter} class="srcTwitter" alt="Twitter Logo" />
            </a>
            <a target="_blank" href="https://www.instagram.com/">
                <img
                    src={srcInstagram}
                    class="srcInstagram"
                    alt="Instagram Logo"
                />
            </a>
        </div>
    </div>
</main>

<style>
    main {
        width: 1440px;
        height: 208px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 335px;
    }
    .section-footer {
        width: 1280px;
        height: 120px;
        background: #2c343e;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .footer-left {
        width: 622px;
        height: 26px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 85px;
    }
    .srcLogo {
        width: 236px;
        height: 26px;
    }
    navbar {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.92px;
    }
    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    li {
        display: flex;
        flex-direction: column;
        padding-left: 33px;
    }
    a {
        color: #83888f;
        cursor: pointer;
    }
    a:hover {
        color: #fefcf7;
    }
    .footer-icons {
        width: 120px;
        height: 24px;
        display: grid;
        grid-template-columns: 24px 24px 24px;
        grid-gap: 24px 24px;
        cursor: pointer;
        padding-right: 85px;
    }
    .srcFacebook:hover,
    .srcTwitter:hover,
    .srcInstagram:hover {
        filter: invert(0.35) sepia(0.8) brightness(110%) hue-rotate(340deg);
    }
</style>
