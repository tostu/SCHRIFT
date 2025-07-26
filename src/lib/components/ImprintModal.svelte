<script lang="ts">
    import Imprint from "./Imprint.svelte";
</script>

<button
    class="btn btn-link"
    on:click={() => {
        const modal = document.getElementById("imprint_modal");
        if (modal) {
            modal.showModal();
        }
    }}
    >Imprint</button
>
<dialog id="imprint_modal" class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
        <h3 class="text-lg font-bold">Imprint</h3>
        <p class="py-4 text-start">
            <Imprint />
        </p>
        <div class="modal-action">
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button
                    class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >✕</button
                >
                <button class="btn">Close</button>
            </form>
        </div>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>
