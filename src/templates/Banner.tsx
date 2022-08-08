import Link from "next/link";

import { Button } from "../button/Button";
import { CTABanner } from "../cta/CTABanner";
import { Section } from "../layout/Section";

const Banner = () => (
  <Section>
    <CTABanner
      title="Stay up to date regarding our release in late 2022."
      subtitle="Subscribe to our newsletter"
      button={
        <Link href="/">
          <a>
            <Button>Get Started</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
