<script lang="ts">
    import { selectedFonts } from "../state.svelte";

    let fontFile: File | null = null;

    function handleFontUpload(event: Event) {
        const input = event.target as HTMLInputElement;
        fontFile = input.files?.[0] ?? null;

        if (!fontFile) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            const fontDataUrl = e.target?.result as string;

            const fontName =
                fontFile.name.split(".").slice(0, -1).join(" ") || "UserFont";

            const style = document.createElement("style");
            style.textContent = `
                    @font-face {
                        font-family: '${fontName}';
                        src: url('${fontDataUrl}');
                    }
                `;
            document.head.appendChild(style);

            if (!selectedFonts.includes(fontName)) {
                selectedFonts.push(fontName);
            }

            // Register font in a CSS variable
            document.documentElement.style.setProperty(
                `--font-${fontName}`,
                fontName,
            );

            // Optionally: use the font somewhere
            console.log("Uploaded font registered and CSS variable set");
        };
        reader.readAsDataURL(fontFile);
    }
</script>

<input
    type="file"
    class="file-input file-input-lg w-full bg-neutral-50"
    accept=".woff,.woff2,.ttf,.otf"
    on:change={handleFontUpload}
/>
