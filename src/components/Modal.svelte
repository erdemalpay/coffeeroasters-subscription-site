<script>
    let shown = false;
    function show() {
        shown = true;
    }
    function hide() {
        shown = false;
    }
</script>

{#if shown}
    <slot />
{/if}
