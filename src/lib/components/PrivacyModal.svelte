<script lang="ts">
    import Privacy from "./Privacy.svelte";
</script>

<button
    class="btn btn-link"
    on:click={() => document.getElementById("privacy_modal").showModal()}
    >Privacy Policy</button
>
<dialog id="privacy_modal" class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
        <h3 class="text-lg font-bold">Privacy Policy</h3>
        <p class="py-4 text-start">
            <Privacy />
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
