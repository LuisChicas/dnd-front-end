"use client";

import { useTalentsContext } from "@/context/Talents";
import styles from "./page.module.scss";
import TalentPath from "@/components/TalentPath";

export default function Home() {
  const { pathOne, pathTwo } = useTalentsContext();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </div>
      <div className={styles.tree}>        
        <div className={styles.paths}>
          <TalentPath 
            name="TALENT PATH 1" 
            icons={["chevrons", "silverware", "cake", "crown"]}
            runes={pathOne.runes}
            onAdd={pathOne.add}
            onSubstract={pathOne.substract}
          />
          <TalentPath 
            name="TALENT PATH 2" 
            icons={["ship", "snorkel", "thunder", "skull"]}
            runes={pathTwo.runes}
            onAdd={pathTwo.add}
            onSubstract={pathTwo.substract}
          />
        </div>
        <div className={styles.points}>
          <span>{pathOne.runes + pathTwo.runes} / 6</span>
          <span>Points Spent</span>
        </div>
      </div>
    </div>
  );
}
