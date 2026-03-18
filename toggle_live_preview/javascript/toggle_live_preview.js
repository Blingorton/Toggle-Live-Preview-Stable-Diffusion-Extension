// Toggle Live Preview - place toggle btn and open folder btn next to the other image action buttons

onUiLoaded(function() {
    var attempts = 0;
    var interval = setInterval(function() {
        attempts++;

        var btn = document.getElementById('toggle_live_preview_btn');
        var openFolder = document.getElementById('txt2img_open_folder');

        // "Save to directory" button is #save_txt2img
        var saveBtn = document.getElementById('save_txt2img');

        if (btn && openFolder && saveBtn) {
            var parent = saveBtn.parentElement;

            // Insert toggle btn then open folder btn before the save button
            parent.insertBefore(openFolder, saveBtn);
            parent.insertBefore(btn, openFolder);

            // Match styling to siblings
            btn.className = saveBtn.className;
            btn.setAttribute('style', saveBtn.getAttribute('style') || '');
            openFolder.className = saveBtn.className;
            openFolder.setAttribute('style', saveBtn.getAttribute('style') || '');

            console.log('[ToggleLivePreview] buttons placed next to save button');
            clearInterval(interval);
        }

        if (attempts >= 30) clearInterval(interval);
    }, 500);
});
