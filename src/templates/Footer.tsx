import { Background } from "../background/Background";
import { CenteredFooter } from "../footer/CenteredFooter";
import { Section } from "../layout/Section";
import Logo from "../../public/assets/images/app-face.png";
import Image from "next/image";

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Image src={Logo} width={64} height={64} alt="logo" />}
        iconList={<></>}
      ></CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
