<script>
    /* import AboutUsPage from "../pages/AboutUsPage.svelte"; */

    let srcLogo = "./images/images-header/logo-header.svg";
</script>

<main>
    <img src={srcLogo} class="srcLogo" alt="Cofferoasters Logo" />
    <navbar>
        <ul>
            <li><a class="home" href="#home">HOME</a></li>
            <li>
                <a class="about-us" target="_blank" href="#about-us">ABOUT US</a
                >
            </li>
            <li>
                <a class="create-your-plan" href="#create-your-plan"
                    >CREATE YOUR PLAN</a
                >
            </li>
        </ul>
    </navbar>
</main>

<style>
    .srcLogo {
        margin-left: 80.1px;
        margin-top: 43.56px;
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
        margin-top: 50px;
        margin-right: 81px;
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
        color: #333d4b;
    }
</style>
