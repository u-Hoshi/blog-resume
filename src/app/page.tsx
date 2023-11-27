import Header from "@/components/Header";
import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  styled,
} from "@kuma-ui/core";
export const runtime = "edge";
import { SiGithub, SiQiita, SiTwitter, SiZenn } from "react-icons/si";

const links = [
  { href: "https://github.com/u-Hoshi", icon: <SiGithub />, label: "GitHub" },
  {
    href: "https://twitter.com/u_Hoshi7",
    icon: <SiTwitter />,
    label: "Twitter",
  },
  { href: "https://zenn.dev/toaruenginner", icon: <SiZenn />, label: "Zenn" },
  { href: "https://qiita.com/u_Hoshi", icon: <SiQiita />, label: "Qiita" },
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
      <Heading as="h3" color="#265073" fontSize="24px">
        Links
      </Heading>
      <Grid
        gridTemplateColumns="repeat(2, 1fr)"
        gap={6}
        width={"240px"}
        margin={"0 auto"}
      >
        {links.map(({ href, icon, label }) => (
          <Link
            key={href}
            href={href}
            aria-label={label}
            style={{ color: "#265073", fontSize: "40px" }}
          >
            {icon}
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
