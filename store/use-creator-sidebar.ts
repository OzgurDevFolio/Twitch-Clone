import { create } from 'zustand'

interface CreatorSidebarProps {
    collapsed: boolean
    onExpand: () => void
    onCollapse: () => void
}

export const useCreatorSidebar = create<CreatorSidebarProps>((set) => ({
    collapsed: false,
    onExpand: () => set(() => ({ collapsed: false })),
    onCollapse: () => set(() => ({ collapsed: true })),
}))
