import { Background } from "../background/Background";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import Logo from "../../public/assets/images/app-face.png";
import Image from "next/image";
import { useRef, useState } from "react";
import { Form, useSubscribeToNewsletter } from "../hooks/useSubscribe";

const Hero = () => {
  const { form, subscribe, inputEl } = useSubscribeToNewsletter();

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns
          logo={<Image src={Logo} width={64} height={64} alt="logo" />}
        />
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {"REAL Dating\n"}
              <span className="text-[#F9BC60]">
                Real people. Real matches. Real dating.{" "}
              </span>
            </>
          }
          description="Subscribe to our newsletter and get the latest updates about our mobile app release in late 2022."
          button={
            <form onSubmit={subscribe}>
              <input
                type="email"
                placeholder="Email"
                className="p-4 w-1/2 border border-gray-300 rounded-lg"
                ref={inputEl}
                required={true}
                autoComplete="email"
              />
              <a>
                <button
                  type="submit"
                  className="bg-[#F9BC60] text-white p-4 rounded-lg"
                >
                  {form.state === Form.Loading ? (
                    <span>loading...</span>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </a>
            </form>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
