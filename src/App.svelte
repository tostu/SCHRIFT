<script lang="ts">
    import Typewriter from "typewriter-effect/dist/core";
    import WebFont from "webfontloader";
    import fonts from "./lib/fonts.json";
    import { onMount } from "svelte";

    import { selectedFonts } from "./lib/state.svelte";

    import Footer from "./lib/components/Footer.svelte";
    import FontList from "./lib/components/FontList.svelte";
    import FontSearch from "./lib/components/FontSearch.svelte";

    let fontFamilies: string[] = [];
    let exampleText = "The quick brown fox jumps over the lazy dog.";

    let heroTitle;

    onMount(() => {
        fontFamilies = fonts.familyMetadataList.map((font) => font.family);
        console.log(fontFamilies);

        let typewriter = new Typewriter(heroTitle, { delay: "natural" });
        typewriter.typeString("SCHRIFT").callFunction(hideCursor).start();
    });

    function hideCursor() {
        document.getElementsByClassName(
            "Typewriter__cursor",
        )[0].style.visibility = "hidden";
    }
</script>

<main>
    <div class="px-5 container min-h-screen mx-auto">
        <div
            class="flex flex-col items-center justify-center pt-[10svh] md:pt-[20svh] pb-12"
        >
            <h1
                bind:this={heroTitle}
                class="text-7xl md:text-9xl font-bitter leading-24"
            ></h1>
            <p class="text-xl text-gray-700 text-center">
                Explore and apply custom Google fonts to your text.
            </p>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-7 w-full">
            <FontSearch {fontFamilies} {selectedFonts} />

            <input
                type="text"
                class="input input-lg bg-white input-bordered w-full"
                placeholder="Change example text..."
                bind:value={exampleText}
            />
        </div>

        <FontList {selectedFonts} {exampleText} />
    </div>
</main>
<Footer></Footer>
