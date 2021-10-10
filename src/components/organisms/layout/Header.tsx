import { memo, useCallback, VFC } from "react";
import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/hooks";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molcules/MenuDrawer";
import { useHistory } from "react-router";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => history.push("/home"), []);
  const onClickUserManagement = useCallback(() => history.push("/home/user_management"), []);
  const onClickSetting = useCallback(() => history.push("/home/setting"), []);

  return (
    <>
      <Flex
        as="nav"
        bg="blue.600"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex as="a" align="center" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー管理</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
