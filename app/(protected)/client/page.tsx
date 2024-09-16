"use client";

import UserInfoPage from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
    const user = useCurrentUser();

    return (
        <UserInfoPage
            label="📱 Client Component"
            user={user}
        />
    );
};

export default ClientPage;