import gradio as gr
from modules import script_callbacks, shared


def on_after_component(component, **kwargs):
    elem_id = kwargs.get("elem_id", "")
    if elem_id == "txt2img_open_folder":

        def toggle():
            current = bool(getattr(shared.opts, "live_previews_enable", True))
            shared.opts.live_previews_enable = not current
            shared.opts.save(shared.config_filename)
            new_val = shared.opts.live_previews_enable
            print(f"[ToggleLivePreview] live_previews_enable = {new_val}")
            return "🟢" if new_val else "🔴"

        initial = "🟢" if bool(getattr(shared.opts, "live_previews_enable", True)) else "🔴"
        btn = gr.Button(
            value=initial,
            elem_id="toggle_live_preview_btn",
            variant="secondary",
            size="sm",
            min_width=0,
            scale=0,
        )
        btn.click(fn=toggle, inputs=[], outputs=[btn])


script_callbacks.on_after_component(on_after_component)
