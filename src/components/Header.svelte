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
        height: 113px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .srcLogo {
        width: 236px;
        height: 27px;
        margin-left: 80.1px;
    }
    navbar {
        font-family: "Barlow", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.92px;
        text-align: center;
        display: flex;
        align-items: center;
        margin-right: 80px;
    }
    ul {
        display: flex;
        justify-content: space-between;
    }
    li {
        margin-top: 2px;
        padding-left: 33px;
    }
    a {
        color: #83888f;
        cursor: pointer;
    }
    a:hover {
        color: #333d4b;
    }
</style>
