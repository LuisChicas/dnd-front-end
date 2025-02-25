import React from "react";
import styles from "./TalentPath.module.scss";
import TalentPathItem, { RuneIcon } from "./TalentPathItem";

type TalentPathProps = {
  name: string;
  icons: RuneIcon[];
  pathNumber: number;
}

const TalentPath: React.FC<TalentPathProps> = ({
  name,
  icons,
  pathNumber
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <div className={styles.path}>
        <TalentPathItem 
          icon={icons[0] as RuneIcon} 
          pathNumber={pathNumber}
          itemNumber={1}
        />
        <div className={styles["path-joint"]}></div>
        <TalentPathItem 
          icon={icons[1] as RuneIcon} 
          pathNumber={pathNumber}
          itemNumber={2}
        />
        <div className={styles["path-joint"]}></div>
        <TalentPathItem 
          icon={icons[2] as RuneIcon} 
          pathNumber={pathNumber}
          itemNumber={3}
        />
        <div className={styles["path-joint"]}></div>
        <TalentPathItem 
          icon={icons[3] as RuneIcon}  
          pathNumber={pathNumber}
          itemNumber={4}
        />
      </div>
    </div>
  );
};

export default TalentPath;