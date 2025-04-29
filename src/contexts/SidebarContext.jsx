import {createContext, useContext, useEffect, useState} from "react";

const SidebarContext = createContext(undefined);

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(prevState => !prevState);

    useEffect(() => {
        const lockScroll = () => {
            if (window.innerWidth < 1024 && isSidebarOpen) {
                document.body.classList.add('scroll-lock');
            } else {
                document.body.classList.remove('scroll-lock');
            }
        };

        lockScroll();
        window.addEventListener('resize', lockScroll);
        return () => {
            document.body.classList.remove('scroll-lock');
            window.removeEventListener('resize', lockScroll);
        };
    }, [isSidebarOpen]);

    return (
        <SidebarContext.Provider value={{isSidebarOpen, toggleSidebar}}>
            {children}
        </SidebarContext.Provider>
    );
}