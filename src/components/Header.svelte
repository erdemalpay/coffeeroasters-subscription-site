<script>
    let srcLogo = "./images/images-header/logo-header.svg";
</script>

<main>
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
</main>

<style>
    main {
        width: 1440px;
        height: 26px;
    }
    .srcLogo {
        margin: 43.56px 80.1px;
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
        margin: 50px 80px;
    }
    li {
        display: flex;
        flex-direction: column;
        padding-left: 32px;
    }
    a {
        color: #83888f;
        cursor: pointer;
    }
    a:hover {
        color: #333d4b;
    }
</style>
