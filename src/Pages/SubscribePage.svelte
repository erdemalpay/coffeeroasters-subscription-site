<script>
    import Header from "../components/Header.svelte";
</script>

<main>
    <Header />
    <div class="choose">
        <button class="accordion">Section 1</button>
        <div class="panel">
            <p>Lorem ipsum...</p>
        </div>
        <button class="accordion">Section 2</button>
        <div class="panel">
            <p>Lorem ipsum...</p>
        </div>
        <button class="accordion">Section 3</button>
        <div class="panel">
            <p>Lorem ipsum...</p>
        </div>
    </div>
</main>

<style>
    main {
        width: 1440px;
        height: 3218px;
    }
</style>
