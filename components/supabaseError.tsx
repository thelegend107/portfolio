import { PostgrestError } from "@supabase/supabase-js"

export default function ({ error }: { error: PostgrestError }) {
    return (
        <>
            <p className="font-semibold text-2xl">
                Please make sure you're connected to the internet and then
                refresh
            </p>
            <p>{error.message}</p>
            <p>{error.details}</p>
        </>
    )
}
