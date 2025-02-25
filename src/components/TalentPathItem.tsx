import React, { useState } from "react";
import styles from "./TalentPathItem.module.scss";
import { useTalentsContext } from "@/context/Talents";
import { MAX_RUNES } from "@/utilities/constants";

export type RuneIcon = "chevrons" | "silverware" | "cake" | "crown" | "ship" | "snorkel" | "thunder" | "skull";

type TalentPathItemProps = {
  icon: RuneIcon;
  pathNumber: number;
  itemNumber: number;
}

const TalentPathItem: React.FC<TalentPathItemProps> = ({
  icon,
  pathNumber,
  itemNumber,
}) => {
  const [hover, setHover] = useState<boolean>(false);    
  const { getRunes, addRune, removeRune } = useTalentsContext();
  const runes = getRunes(pathNumber);

  const active = runes >= itemNumber;
  const isNextToActivate = (runes + 1) === itemNumber && getRunes() < MAX_RUNES;
  const isNextToDeactivate = runes === itemNumber;
  const shouldBeHighlighted = hover && isNextToActivate;

  const iconClass = icon + (active || shouldBeHighlighted ? "-highlighted" : "");
  const borderClass = `border-${active ? "active" : "inactive"}`

  return (
    <div 
      className={`${styles[iconClass]} ${styles[borderClass]}`} 
      onClick={(e) => {
        e.preventDefault();
        if (isNextToActivate) {
          addRune(pathNumber);
        }
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        if (isNextToDeactivate) {
          removeRune(pathNumber);
        }
      }}
      onMouseEnter={() => setHover(true)}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
    </div>
  );
};

export default TalentPathItem;