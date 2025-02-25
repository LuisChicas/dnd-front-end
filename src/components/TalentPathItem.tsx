import React from "react";
import styles from "./TalentPathItem.module.scss";

export type RuneIcon = "chevrons" | "silverware" | "cake" | "crown" | "ship" | "snorkel" | "thunder" | "skull";

type TalentPathItemProps = {
  icon: RuneIcon;
  active: boolean;
  onClick: () => void;
  onRightClick: () => void;
}

const TalentPathItem: React.FC<TalentPathItemProps> = ({
  icon,
  active,
  onClick,
  onRightClick,
}) => {
  const className = icon + (active ? "-active" : "-inactive");

  return (
    <div 
      className={styles[className]} 
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        onRightClick();
      }}
    >
    </div>
  );
};

export default TalentPathItem;