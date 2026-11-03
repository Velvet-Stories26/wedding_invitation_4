<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All invitation text (names, dates, venues, schedule, events) lives in `src/components/invite/invite-data.ts`; components read from it so content edits never touch layout.
- Every photo slot (bride, groom, together, families, venue, events, closing) is defined in `src/components/invite/photos.ts`; swapping a picture means changing only that file. Photos render through `PhotoFrame` (square gold-cornered frame) or `SwipeGallery`, so frame style changes in one place.
- The invite is a single mobile-width column (max 480px) on `/`; keep new sections inside that column so it reads like a phone invitation on every screen.
- Tailwind-merge treats any `text-*` class as a color, so custom text effects use non-`text-` utility names (e.g. `glow-text`).
