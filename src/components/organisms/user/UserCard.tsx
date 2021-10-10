import { memo, VFC } from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

type Props = {
  userId: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (userId: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { userId, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box
      w="280px"
      h="280px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(userId)}
    >
      <Stack textAlign="center">
        <Image m="auto" boxSize="140px" borderRadius="full" src={imageUrl} alt={userName}></Image>
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
