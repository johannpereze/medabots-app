import MedabotSprite from "../../components/medabotSprite/MedabotSprite";
import { metabee } from "../../dataBase/medaParts";

export default function Home() {
  return <MedabotSprite scale={4} animated medaparts={metabee} />;
}
