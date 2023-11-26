import WrapBox from "@/components/Box";
import theme from "../../kuma.config";
export const runtime = "edge";

export default function Home() {
  return (
    <main>
      <WrapBox bg={theme.colors["colors.red.100"]} color="white">
        Hello world
      </WrapBox>
    </main>
  );
}
