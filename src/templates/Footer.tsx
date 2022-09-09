import { Background } from "../background/Background";
import { CenteredFooter } from "../footer/CenteredFooter";
import { Section } from "../layout/Section";
import Logo from "../../public/assets/images/app-face.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Image src={Logo} width={64} height={64} alt="logo" />}
        iconList={<></>}
      >
        <Link href="/privacyPolicy">Privacy Policy</Link>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
