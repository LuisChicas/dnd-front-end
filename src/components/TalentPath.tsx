import React from "react";
import styles from "./TalentPath.module.scss";
import TalentPathItem, { RuneIcon } from "./TalentPathItem";

type TalentPathProps = {
  name: string;
  icons: RuneIcon[];
  runes: number;
  onAdd: () => void;
  onSubstract: () => void;
}

const TalentPath: React.FC<TalentPathProps> = ({
  name,
  icons,
  runes,
  onAdd,
  onSubstract
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <div className={styles.path}>
        <TalentPathItem 
          icon={icons[0] as RuneIcon} 
          active={runes > 0}
          onClick={() => {
            if (runes === 0) {
              onAdd();
            }
          }}
          onRightClick={() => {
            if (runes === 1) {
              onSubstract();
            }
          }}
        />
        <div className={styles["path-joint"]}></div>
        <TalentPathItem 
          icon={icons[1] as RuneIcon} 
          active={runes > 1}
          onClick={() => {
            if (runes === 1) {
              onAdd();
            }
          }}
          onRightClick={() => {
            if (runes === 2) {
              onSubstract();
            }
          }}
        />
        <div className={styles["path-joint"]}></div>
        <TalentPathItem 
          icon={icons[2] as RuneIcon} 
          active={runes > 2}
          onClick={() => {
            if (runes === 2) {
              onAdd();
            }
          }}
          onRightClick={() => {
            if (runes === 3) {
              onSubstract();
            }
          }}
        />
        <div className={styles["path-joint"]}></div>
        <TalentPathItem 
          icon={icons[3] as RuneIcon}  
          active={runes > 3}
          onClick={() => {
            if (runes === 3) {
              onAdd();
            }
          }}
          onRightClick={() => {
            if (runes === 4) {
              onSubstract();
            }
          }}
        />
      </div>
    </div>
  );
};

export default TalentPath;