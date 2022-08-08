import Link from "next/link";

import { Background } from "../background/Background";
import { Button } from "../button/Button";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />} />
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {"REAL Dating\n"}
            <span className="text-primary-500">
              Real people. Real matches. Real dating.{" "}
            </span>
          </>
        }
        description="Subscribe to our newsletter and get the latest updates about our release in late 2022."
        button={
          <form>
            <input
              type="text"
              placeholder="Email"
              className="p-4 w-1/2 border border-gray-300 rounded-lg"
            />
            <a>
              <button
                type="submit"
                className="bg-blue-500 text-white p-4 rounded-lg"
              >
                Submit
              </button>
            </a>
          </form>
        }
      />
    </Section>
  </Background>
);

export { Hero };
