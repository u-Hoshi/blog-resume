import { Box, Flex, styled } from "@kuma-ui/core";
import { Link } from "@kuma-ui/core";
import { ImAddressBook } from "react-icons/im";
import { FaBook } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

export const runtime = "edge";

const HeaderList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 80px 0 56px;
  width: 240px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  align-items: center;
  font-size: 16px;
`;

const linkStyles = {
  textDecoration: "none",
  display: "flex",
  color: "#265073",
  alignItems: "center",
};

const links = [
  { href: "/", text: "home", Icon: FaHome },
  { href: "/resume", text: "resume", Icon: ImAddressBook },
  { href: "/blog", text: "blog", Icon: FaBook },
];

const Header = () => {
  return (
    <Flex justifyContent="center">
      <HeaderList>
        {links.map(({ href, text, Icon }) => (
          <ListItem key={href}>
            <Link style={linkStyles} href={href}>
              {/* <Icon style={{ padding: "2px" }} /> */}
              {text}
            </Link>
          </ListItem>
        ))}
      </HeaderList>
    </Flex>
  );
};

export default Header;
