import { create } from 'zustand'

export enum ChatVariant {
    CHAT = 'CHAT',
    COMMUNITY = 'COMMUNITY',
}

interface ChatSidebarProps {
    collapsed: boolean
    onExpand: () => void
    onCollapse: () => void
    variant: ChatVariant
    onChangeVariant: (variant: ChatVariant) => void
}

export const useChatSidebar = create<ChatSidebarProps>((set) => ({
    collapsed: false,
    variant: ChatVariant.CHAT,
    onExpand: () => set(() => ({ collapsed: false })),
    onCollapse: () => set(() => ({ collapsed: true })),
    onChangeVariant: (variant: ChatVariant) => set({ variant }),
}))
