import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const VerticalFeatures = () => (
  <Section
    title="Online Dating, Reimagined"
    description="Online dating without the FAKE. Real people. Real matches. Real dating."
  >
    <VerticalFeatureRow
      title="No catfishes/bot accounts"
      description="Did you know 1/4 accounts on Tinder are fake? Using unique features and algorithms, we ensure that there are no catfishes, and no bots. Every profile is a real person."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Active accounts"
      description="Additionally, using our unqiue features and algorithms, we ensure that every account is active. Active accounts means more real people in your area actively looking for a real connection."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Matching to message"
      description="Lastly, REAL dating will inherently promote users prioritzing messaging active matches over getting new matches. This will ensure that you get the best possibility of a real connection."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
