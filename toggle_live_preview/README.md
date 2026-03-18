# Toggle Live Preview Button — SD Reforge Extension

Adds a **Live Preview toggle button** directly on the txt2img generation page, placed immediately before the "Open images output directory" button.

## What it does

- Shows a button labeled **🟢 Live Preview: ON** or **🔴 Live Preview: OFF** reflecting the current state
- Clicking it toggles the **"Show live previews of the created image"** setting in real time
- The setting is saved immediately (equivalent to changing it in Settings and clicking Apply)

## Installation

1. In SD Reforge, go to **Extensions → Install from URL**
2. Paste the URL of this repo, or manually copy the folder into:
   ```
   stable-diffusion-webui-reforge/extensions/toggle_live_preview/
   ```
3. Restart the UI

## File structure

```
toggle_live_preview/
├── scripts/
│   └── toggle_live_preview.py   # Main Python extension logic
├── javascript/
│   └── toggle_live_preview.js   # Button repositioning logic
├── install.py                   # Extension installer (no deps)
└── README.md
```

## Notes

- The button only appears on the **txt2img** tab
- State reflects whatever is currently saved in `config.json`
- Toggling is instant — no need to visit Settings
