<script>
    let srcLogo = "./images/logo.svg";
</script>

<main>
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
        margin-right: 80px;
    }
    li {
        display: flex;
        flex-direction: column;
        padding-left: 33px;
    }
    a {
        color: #83888f;
    }
    a:hover {
        color: #333d4b;
        cursor: pointer;
    }
</style>
