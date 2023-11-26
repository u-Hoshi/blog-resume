import { Box } from "@kuma-ui/core";
export const runtime = "edge";

type WrapBoxProps = {
  bg: string;
  color: string;
  children: React.ReactNode;
};

const WrapBox = (props: WrapBoxProps) => {
  return (
    <Box p={8} bg={props.bg} color={props.color}>
      {props.children}
    </Box>
  );
};

export default WrapBox;
