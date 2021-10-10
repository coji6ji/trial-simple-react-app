import { memo, VFC, useEffect, useCallback } from "react";
import { Wrap, WrapItem, Spinner, Center } from "@chakra-ui/react";
import { useUserAll } from "../../hooks/useUserAll";
import { useDisclosure } from "@chakra-ui/hooks";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { UserCard } from "../organisms/user/UserCard";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUserAll, users, loading } = useUserAll();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();

  const onClickUser = useCallback(
    (userId: number) => {
      onSelectUser({ userId, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );

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
                userId={user.id}
                imageUrl="https://source.unsplash.com/ramdom"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
