"use client";

import React from 'react';
import styles from './SlantingCutExample.module.css';

export default function SlantingCutExample() {
  return (
    <div className={styles.tutorialContainer}>
      <h2 className={styles.tutorialTitle}>Slanting Cut Tutorial</h2>
      
      {/* Example 1: Basic Slanting Cut */}
      <div className={styles.example}>
        <h3>Example 1: Basic Slanting Cut</h3>
        <div className={styles.demoContainer}>
          <div className={styles.basicSlantingCut}></div>
        </div>
        <pre className={styles.code}>
          {`.basicSlantingCut {
  clip-path: polygon(0 0, 100% 0, 50% 100%, 0 100%);
  background-color: #4CAF50;
  height: 100px;
  width: 100%;
}`}
        </pre>
      </div>
      
      {/* Example 2: Adjusting the Slant Angle */}
      <div className={styles.example}>
        <h3>Example 2: Adjusting the Slant Angle</h3>
        <div className={styles.demoContainer}>
          <div className={styles.slantAngle30}></div>
        </div>
        <pre className={styles.code}>
          {`.slantAngle30 {
  clip-path: polygon(0 0, 100% 0, 30% 100%, 0 100%);
  background-color: #4CAF50;
  height: 100px;
  width: 100%;
}`}
        </pre>
      </div>
      
      {/* Example 3: Reverse Slanting Cut */}
      <div className={styles.example}>
        <h3>Example 3: Reverse Slanting Cut</h3>
        <div className={styles.demoContainer}>
          <div className={styles.reverseSlant}></div>
        </div>
        <pre className={styles.code}>
          {`.reverseSlant {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%);
  background-color: #4CAF50;
  height: 100px;
  width: 100%;
}`}
        </pre>
      </div>
      
      {/* Example 4: Double Slanting Cut */}
      <div className={styles.example}>
        <h3>Example 4: Double Slanting Cut</h3>
        <div className={styles.demoContainer}>
          <div className={styles.doubleSlant}></div>
        </div>
        <pre className={styles.code}>
          {`.doubleSlant {
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  background-color: #4CAF50;
  height: 100px;
  width: 100%;
}`}
        </pre>
      </div>
      
      {/* Example 5: Practical Application */}
      <div className={styles.example}>
        <h3>Example 5: Practical Application (TopBar)</h3>
        <div className={styles.demoContainer}>
          <div className={styles.practicalExample}>
            <div className={styles.slantingCutOverlay}></div>
            <div className={styles.content}>
              <div className="flex-1"></div>
              <div className="flex space-x-4">
                <span className={styles.socialIcon}>FB</span>
                <span className={styles.socialIcon}>IG</span>
                <span className={styles.socialIcon}>LI</span>
              </div>
            </div>
          </div>
        </div>
        <pre className={styles.code}>
          {`/* Container */
.practicalExample {
  position: relative;
  background-color: #4CAF50;
  height: 40px;
  width: 100%;
  overflow: hidden;
}

/* White slanting cut overlay */
.slantingCutOverlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background-color: white;
  clip-path: polygon(0 0, 100% 0, 30% 100%, 0 100%);
}

/* Content positioned above the cut */
.content {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;
}`}
        </pre>
      </div>
    </div>
  );
}
