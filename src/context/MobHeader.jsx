import React, { createContext, useContext, useState } from "react";
const mobHeaderContext = createContext();


export function MobHeaderProvider({ children }) {
    const [isMobModalOpen, setIsMobModalOpen] = useState(false);

    const openMobModal = () => {
        setIsMobModalOpen(true);
        // setModalContent(content);
        // document.body.style.overflow = 'hidden';
    };

    const closeMobModal = () => {
        setIsMobModalOpen(false);
        // if (!isModalOpen) {
        //     document.body.style.overflow = 'auto';
        // }
        // else if (isMobileMenuOpen && isModalOpen) {
        //     document.body.style.overflow = 'hidden';
        // }
        // else {
        //     document.body.style.overflow = 'auto';
        // }
        // setModalContent(null);
    };
    return (
        <mobHeaderContext.Provider value={{ isMobModalOpen, openMobModal, closeMobModal }}>
            {children}
        </mobHeaderContext.Provider>
    )
}

export function useMobHeaderContext() {
    return useContext(mobHeaderContext);
}