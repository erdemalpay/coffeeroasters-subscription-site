<script>
    export let isOpen;
</script>

<div class="panel choices" class:open-panel={isOpen}>
    <slot />
</div>

<style>
    .panel {
        background-color: white;
        display: block;
        height: 0px;
        overflow: hidden;
        width: 730px;
    }
    .open-panel {
        height: 306px;
    }
    .choices {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 88px;
    }
</style>
