import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  userId: number;
  users: User[];
  onOpen: () => void;
};

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const onSelectUser = useCallback((props: Props) => {
    const { userId, users, onOpen } = props;
    const user = users.find((user) => user.id === userId);
    setSelectedUser(user ?? null);
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
