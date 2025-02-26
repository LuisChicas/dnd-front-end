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
  const [playDarkenAnimation, setPlayDarkenAnimation] = useState<boolean>(false);    
  const { getRunes, addRune, removeRune, setRuneLimitAnimation } = useTalentsContext();
  const runes = getRunes(pathNumber);

  const active = runes >= itemNumber;
  const isNextToActivate = (runes + 1) === itemNumber && getRunes() < MAX_RUNES;
  const isNextToDeactivate = runes === itemNumber;
  const shouldBeHighlighted = hover && isNextToActivate;

  const iconClass = icon + (active || shouldBeHighlighted ? "-highlighted" : "");
  const borderClass = `border-${active ? "active" : "inactive"}`
  const animationClass = playDarkenAnimation ? "darken-animation" : "";

  const onClick = () => {
    if (isNextToActivate) {
      addRune(pathNumber);
    } else if (!active) {
      setPlayDarkenAnimation(true);

      if (getRunes() === MAX_RUNES)
        setRuneLimitAnimation(true);
    }
  }

  const onRightClick = () => {
    if (isNextToDeactivate) {
      removeRune(pathNumber);
    } else if (active) {
      setPlayDarkenAnimation(true);
    }
  }

  return (
    <div 
      className={`${styles[iconClass]} ${styles[borderClass]} ${styles[animationClass]}`} 
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        onRightClick();
      }}
      onMouseEnter={() => setHover(true)}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onAnimationEnd={() => setPlayDarkenAnimation(false)}
    >
    </div>
  );
};

export default TalentPathItem;