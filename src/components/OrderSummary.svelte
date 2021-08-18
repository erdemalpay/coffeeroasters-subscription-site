<script>
    import Modal from "./Modal.svelte";
</script>

<main>
    <textarea />
    <button>Show Modal</button>
    <Modal>
        <h2>Modal title</h2>
        <p>Modal content</p>
    </Modal>
</main>

<style>
    textarea {
        width: 100%;
        height: 90vh;
        background-color: pink;
    }
</style>
