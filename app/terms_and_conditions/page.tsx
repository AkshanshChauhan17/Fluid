import BR from "@/Components/global/br";
import LegalHero from "@/Components/global/legal_hero";

export default function TermsAndConditions() {
  return (
    <div className="terms-and-conditions">
        <BR px="100px" />
        <LegalHero
        tab="TERMS OF USE"
        heading="These Terms and Conditions govern the use of Fluid Financial’s services and website"
        description1="By using our platform, clients and partners agree to comply with applicable financial regulations, payment network rules, and security requirements."
        description2="Fluid Financial provides payment infrastructure designed for healthcare businesses and maintains policies that ensure responsible and secure use of the platform."
        />
        <BR px="100px" />
    </div>
  );
}