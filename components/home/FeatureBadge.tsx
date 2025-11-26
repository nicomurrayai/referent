export default function FeatureBadge({ text }: { text: string }) {
    return (
        <div className="flex items-center justify-center mb-12">
            <span className="text-sm md:text-base text-center w-fit py-2 px-4 bg-white/10 rounded-xl border border-white/10  text-white/70">
                {text}
            </span>
        </div>
    )
}