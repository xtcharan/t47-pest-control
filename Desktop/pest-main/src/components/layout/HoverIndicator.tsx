import { CSSProperties } from 'react';
import styles from './Header.module.css';

interface HoverIndicatorProps {
  isVisible: boolean;
  left: number;
  width: number;
}

export default function HoverIndicator({ isVisible, left, width }: HoverIndicatorProps) {
  // Create a CSS variable to handle the transform origin based on active menu item
  const indicatorStyle = {
    '--indicator-origin': `${left + (width / 2)}px`
  } as CSSProperties;

  return (
    <div
      className={`${styles.hoverIndicator} ${isVisible ? styles.hoverIndicatorVisible : styles.hoverIndicatorHidden}`}
      style={indicatorStyle}
    />
  );
}
