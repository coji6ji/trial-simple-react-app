import { memo, VFC, useEffect } from "react";
import { Wrap, WrapItem, Spinner, Center } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { useUserAll } from "../../hooks/useUserAll";

export const UserManagement: VFC = memo(() => {
  const { getUserAll, users, loading } = useUserAll();

  useEffect(() => getUserAll(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/ramdom"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
