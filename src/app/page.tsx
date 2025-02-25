"use client";

import { useTalentsContext } from "@/context/Talents";
import styles from "./page.module.scss";
import TalentPath from "@/components/TalentPath";
import { MAX_RUNES } from "../utilities/constants";

export default function Home() {
  const { getRunes } = useTalentsContext();
  return (
    <div className={styles["root-container"]}>
      <div className={styles.container}>
        <div className={styles.title}>
          TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
        </div>
        <div className={styles.tree}>        
          <div className={styles.paths}>
            <TalentPath 
              name="TALENT PATH 1" 
              icons={["chevrons", "silverware", "cake", "crown"]}
              pathNumber={1}
            />
            <TalentPath 
              name="TALENT PATH 2" 
              icons={["ship", "snorkel", "thunder", "skull"]}
              pathNumber={2}
            />
          </div>
          <div className={styles.points}>
            <span>{getRunes()} / {MAX_RUNES}</span>
            <span>Points Spent</span>
          </div>
        </div>
      </div>
    </div>
  );
}
