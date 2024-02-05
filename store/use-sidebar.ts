import { create } from 'zustand'

interface SidebarProps {
    collapsed: boolean
    onExpand: () => void
    onCollapse: () => void
}

export const useSidebar = create<SidebarProps>((set) => ({
    collapsed: false,
    onExpand: () => set(() => ({ collapsed: false })),
    onCollapse: () => set(() => ({ collapsed: true })),
}))
