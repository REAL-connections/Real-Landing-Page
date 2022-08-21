import { ReactNode } from "react";
import DeviceMockup from "./DeviceMockup";

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center overflow-x-hidden">
    <h1 className="text-5xl text-[#004643] font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="flex flex-col mt-10 align-middle md:flex-row justify-between">
      <div>
        <h2 className="text-[#F9BC60] text-5xl">
          Real people looking for genuine relationships.
        </h2>
        <div className="text-2xl mt-4 mb-16">{props.description}</div>

        {props.button}
      </div>
      <div className="w-full h-full md:ml-24 mt-12 md:mt-0 items-center">
        <DeviceMockup />
      </div>
    </div>
  </header>
);

export { HeroOneButton };
