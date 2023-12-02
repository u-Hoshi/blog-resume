import { Flex, Link, styled } from "@kuma-ui/core";
import { FunctionComponent } from "react";
import { FaBook, FaHome } from "react-icons/fa";
import { ImAddressBook } from "react-icons/im";

export const runtime = "edge";

type LinkItem = {
  href: string;
  text: string;
  Icon: FunctionComponent;
};

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

// TODO 除外ルールを外す
const links: LinkItem[] = [
  { href: "/", text: "home", Icon: FaHome }, // eslint-disable-line
  { href: "/resume", text: "resume", Icon: ImAddressBook }, // eslint-disable-line
  { href: "/blog", text: "blog", Icon: FaBook }, // eslint-disable-line
];

const Header = () => (
  <Flex justifyContent="center">
    <HeaderList>
      {links.map(({ href, text }) => (
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

export default Header;
