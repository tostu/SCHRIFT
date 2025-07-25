<script lang="ts">
    import WebFont from "webfontloader";
    import { selectedFonts } from "../state.svelte";

    let { fontFamilies } = $props();

    let fontInput = $state("");

    function addFontToSelected() {
        const capitalizedInput =
            fontInput.charAt(0).toUpperCase() + fontInput.slice(1);
        if (
            fontFamilies.some(
                (font: string) =>
                    font.toLowerCase() === fontInput.toLowerCase(),
            ) &&
            !selectedFonts.includes(capitalizedInput)
        ) {
            const consent =
                localStorage.getItem("silktideCookieChoice_google-fonts") ===
                "true";
            if (consent === true) {
                loadFont(capitalizedInput);
            }

            selectedFonts.push(capitalizedInput); // Modify the array instead
        }
        fontInput = "";
    }

    function loadFont(font: string) {
        WebFont.load({
            google: {
                families: [font],
            },
            active: () => {
                document.documentElement.style.setProperty(
                    `--font-${font}`,
                    font,
                );
            },
        });
    }
</script>

<form class="w-full lg:w-1/2" on:submit|preventDefault={addFontToSelected}>
    <div class="flex gap-2 items-center">
        <input
            type="text"
            list="fonts-list"
            autocomplete="off"
            class="input input-lg bg-neutral-50 input-bordered w-full"
            placeholder="Search fonts..."
            bind:value={fontInput}
        />
        <button class="btn btn-lg btn-primary" type="submit">Add Font</button>
    </div>

    <datalist id="fonts-list">
        {#each fontFamilies as font}
            <option value={font}></option>
        {/each}
    </datalist>
</form>
