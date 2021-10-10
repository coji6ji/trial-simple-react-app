import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/button";

type Props = {
  onClick: () => void;
  children: ReactNode;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { onClick, children } = props;
  return (
    <Button bg="blue.500" color="white" _hover={{ opacity: 0.8 }} onClick={onClick}>
      {children}
    </Button>
  );
});
