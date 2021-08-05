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
                    <li><a class="home" href="#home">HOME</a></li>
                    <li><a class="about-us" href="#about-us">ABOUT US</a></li>
                    <li>
                        <a class="create-your-plan" href="#create-your-plan"
                            >CREATE YOUR PLAN</a
                        >
                    </li>
                </ul>
            </navbar>
        </div>
        <div class="footer-icons">
            <img src={srcFacebook} class="srcFacebook" alt="Facebook Logo" />
            <img src={srcTwitter} class="srcTwitter" alt="Twitter Logo" />
            <img src={srcInstagram} class="srcInstagram" alt="Instagram Logo" />
        </div>
    </div>
</main>

<style>
    .section-footer {
        width: 1280px;
        height: 120px;
        margin-left: 78px;
        margin-top: 200px;
        background: #2c343e;
    }
    .footer-left {
        width: 622px;
        height: 26px;
        left: 165px;
        top: 3434px;
    }
    .srcLogo {
        margin-left: 85px;
        margin-top: 47px;
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
        float: right;
        margin-top: 54px;
        margin-right: -85px;
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
        margin-left: 1076px;
        margin-top: 21px;
        display: grid;
        grid-template-columns: 24px 24px 24px;
        grid-gap: 24px 24px;
        cursor: pointer;
    }
    .srcFacebook:hover {
        filter: invert(0.35) sepia(0.8) brightness(110%) hue-rotate(340deg);
    }
    .srcTwitter:hover {
        filter: invert(0.35) sepia(0.8) brightness(110%) hue-rotate(340deg);
    }
    .srcInstagram:hover {
        filter: invert(0.35) sepia(0.8) brightness(110%) hue-rotate(340deg);
    }
</style>
