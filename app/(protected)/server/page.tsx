import UserInfoPage from "@/components/user-info";
import { currentUser } from "@/lib/auth";

const ServerPage = async () => {
    const user = await currentUser();

    return (
        <UserInfoPage
            label="💻 Server Component"
            user={user}
        />
    );
};

export default ServerPage;