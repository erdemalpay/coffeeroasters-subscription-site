<script>
    let srcLogo = "./images/images-header/logo-header.svg";
</script>

<main>
    <div class="header">
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
</main>

<style>
    main {
        width: 1440px;
        height: 113px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    .srcLogo {
        width: 236px;
        height: 26px;
    }
    .header {
        width: 1280px;
        height: 26px;
        display: flex;
        justify-content: space-between;
    }
    navbar {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.92px;
        display: flex;
        align-items: flex-start;
        text-align: center;
    }
    ul {
        display: flex;
        justify-content: space-between;
    }
    li {
        margin-top: -5px;
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
