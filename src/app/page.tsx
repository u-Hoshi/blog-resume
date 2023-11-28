import { Box, Grid, Heading, Image, Link, Text, styled } from "@kuma-ui/core";
export const runtime = "edge";
import {
  SiGithub,
  SiQiita,
  SiStorybook,
  SiTwitter,
  SiZenn,
} from "react-icons/si";
import { FaBook } from "react-icons/fa";

const StyledButton = styled.button`
  border-radius: 4px;
  position: relative;
  display: inline-block;
  width: 64px;
  height: 56px;
  font-size: 30px;
  color: #265073;
  transition: 0.5s;
  text-decoration: none;
  box-shadow: 0 1px 2px #265073;
  background: #ecf4d6;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;
  box-shadow: 0 1px 2px #265073;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px #2d9596;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px #2d9596;
  }
`;

const links = [
  { href: "https://github.com/u-Hoshi", icon: <SiGithub />, label: "GitHub" },
  {
    href: "https://twitter.com/u_Hoshi7",
    icon: <SiTwitter />,
    label: "Twitter",
  },
  { href: "https://zenn.dev/toaruenginner", icon: <SiZenn />, label: "Zenn" },
  { href: "https://qiita.com/u_Hoshi", icon: <SiQiita />, label: "Qiita" },
  {
    href: "https://booklog.jp/users/7ef1accb65c94bb7",
    icon: <FaBook />,
    label: "Book",
  },
];
export default function Home() {
  return (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      <Box display="flex" justify="center">
        <Image
          src="uhoshi-icon.webp"
          alt="uHoshi icon"
          style={{ width: "300px", height: "300px" }}
        />
      </Box>
      <Text color="#265073" fontSize="32px" fontWeight="bold">
        u-Hoshi
      </Text>
      <Text color="#265073" fontSize="16px">
        Web Developer
      </Text>
      <SiStorybook />
      <Heading as="h3" color="#265073" fontSize="24px">
        Links
      </Heading>
      <Grid
        gridTemplateColumns="repeat(2, 1fr)"
        gap={16}
        width={"240px"}
        margin={"0 auto"}
        paddingBottom={64}
        placeItems={"center"}
      >
        {links.map(({ href, icon, label }) => (
          <Link
            key={href}
            href={href}
            aria-label={label}
            style={{ color: "#265073", fontSize: "40px" }}
            target="_blank"
          >
            <StyledButton>{icon}</StyledButton>
          </Link>
        ))}
      </Grid>
      <a href="https://www.buymeacoffee.com/uHoshi" target="_blank">
        <Image
          src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png"
          alt="Buy Me A Coffee"
          style={{ height: "50px", width: "180px" }}
        />
      </a>
    </div>
  );
}
