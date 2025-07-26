<script lang="ts">
    import ImprintModal from "./ImprintModal.svelte";
    import PrivacyModal from "./PrivacyModal.svelte";
</script>

<footer
    class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4"
>
    <aside>
        <div class="flex items-center">
            <p>
                Copyright © {new Date().getFullYear()} - All right reserved by ACME
                Industries Ltd
            </p>
            <PrivacyModal />
            <ImprintModal />
        </div>
    </aside>
</footer>
