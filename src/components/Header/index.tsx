import { Flex, Link, styled } from "@kuma-ui/core";

export const runtime = "edge";

type LinkItem = {
  href: string;
  text: string;
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
  { href: "/", text: "home" },
  // { href: "/resume", text: "resume", },
  { href: "/blog", text: "blog" },
];

const Header = () => (
  <Flex justifyContent="center">
    <HeaderList>
      {links.map(({ href, text }) => (
        <ListItem key={href}>
          <Link style={linkStyles} href={href}>
            {text}
          </Link>
        </ListItem>
      ))}
    </HeaderList>
  </Flex>
);

export default Header;
