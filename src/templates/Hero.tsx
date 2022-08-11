import { Background } from "../background/Background";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import Logo from "../../public/assets/images/app-face.png";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const Hero = () => {
  const [mail, setMail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const subscribe = () => {
    console.log(mail);
    setLoading(true);
    axios
      .post("api/subscribe", {
        email: mail,
      })
      .then((result) => {
        if (result.status === 200) {
          setLoading(false);
          setResult(result.data.message);
          setMail("");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setResult("OOPS! Something went wrong!");
      });
  };

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns
          logo={<Image src={Logo} width={64} height={64} alt="logo" />}
        />
      </Section>

      <Section yPadding="pt-2 pb-24 flex flex-row justify-around">
        <HeroOneButton
          title={<>{"REAL Dating\n"}</>}
          description="Subscribe to our newsletter and get the latest updates about our mobile app release in late 2022."
          button={
            <form
              onSubmit={(e) => {
                e.preventDefault();
                subscribe();
              }}
            >
              <input
                type="email"
                placeholder="Email"
                className="p-4 w-1/2 border border-gray-300 rounded-lg"
                required={true}
                autoComplete="email"
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
              <a>
                <button
                  type="submit"
                  onSubmit={subscribe}
                  className="bg-[#F9BC60] text-white p-4 rounded-lg"
                >
                  {loading ? <span>loading...</span> : "Subscribe"}
                </button>
                {result ? (
                  <>
                    <br />
                    <br />
                    <span>{result}</span>{" "}
                  </>
                ) : null}
              </a>
            </form>
          }
        ></HeroOneButton>
      </Section>
    </Background>
  );
};

export { Hero };
