<script lang="ts">
    let { selectedFonts, exampleText } = $props();
</script>

<ul class="list rounded-box shadow-md mt-10 mb-5">
    <!-- <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Selected Fonts
    </li> -->
    {#each selectedFonts as font}
        <li class="list-row p-4 bg-white">
            <div class="flex flex-col items-start">
                <div class="text-m uppercase font-semibold opacity-60">
                    {font}
                </div>
                <div class="text-4xl" style="font-family: '{font}'">
                    {exampleText}
                </div>
            </div>
        </li>
    {/each}
</ul>
