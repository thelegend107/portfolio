export default function SupabaseError({
    error,
}: {
    error: { message?: string; details?: string }
}) {
    return (
        <div
            role="alert"
            className="rounded-xl border border-zinc-300 bg-white/70 p-4 dark:border-zinc-700 dark:bg-black/40"
        >
            <p className="text-lg font-semibold text-ink dark:text-paper">
                Couldn’t load this section right now.
            </p>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Check your connection and refresh the page. Showing local
                fallback content where available.
            </p>
            {error?.message ? (
                <p className="mt-2 text-sm text-zinc-500">{error.message}</p>
            ) : null}
        </div>
    )
}
