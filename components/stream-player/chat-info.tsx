import { useMemo } from 'react'
import { Hint } from '../hint'
import { Info } from 'lucide-react'

interface ChatFormProps {
    isChatDelayed: boolean
    isChatFollowersOnly: boolean
}

export const ChatInfo = ({ isChatDelayed, isChatFollowersOnly }: ChatFormProps) => {
    const hint = useMemo(() => {
        if (isChatFollowersOnly && !isChatDelayed) {
            return 'Only followers can chat!'
        }

        if (isChatDelayed && !isChatFollowersOnly) {
            return 'Messages are delayed by 3 seconds!'
        }

        if (isChatDelayed && isChatFollowersOnly) {
            return 'Only followers can chat. Messages are delayed by 3 seconds!'
        }

        return ''
    }, [isChatDelayed, isChatFollowersOnly])

    const label = useMemo(() => {
        if (isChatFollowersOnly && !isChatDelayed) {
            return 'Followers only'
        }

        if (isChatDelayed && !isChatFollowersOnly) {
            return 'Slow mode'
        }

        if (isChatDelayed && isChatFollowersOnly) {
            return 'Followers only and slow mode'
        }

        return ''
    }, [isChatDelayed, isChatFollowersOnly])

    if (!isChatDelayed && !isChatFollowersOnly) {
        return null
    }

    return (
        <div className="p-2 text-muted-foreground border border-white/10 w-full rounded-t-md flex items-center gap-x-2">
            <Hint label={hint}>
                <Info className="h-4 w-4" />
            </Hint>
            <p className="text-xs font-semibold">{label}</p>
        </div>
    )
}
