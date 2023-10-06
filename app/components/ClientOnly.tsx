'use client';

import React, { useEffect, useState } from 'react';

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        // 마운트 안되면 아무것도 반환 안함
        return null;
    }

    return <>{children}</>;
};

export default ClientOnly;
