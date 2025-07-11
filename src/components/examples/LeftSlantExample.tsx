"use client";

import React from 'react';
import styles from './LeftSlantExample.module.css';

export default function LeftSlantExample() {
  return (
    <div className={styles.tutorialContainer}>
      <h2 className={styles.tutorialTitle}>Left-Side Slanting Cut Tutorial</h2>
      
      <div className={styles.example}>
        <h3>Example: Left-Side Slanting Cut</h3>
        <div className={styles.demoContainer}>
          <div className={styles.topBar}>
            {/* Slanting cut */}
            <div className={styles.slantingCut}></div>
            
            {/* Left content */}
            <div className={styles.leftContent}>
              <span>Phone: 1300 123 456</span>
              <span className="ml-4">Email: info@example.com</span>
            </div>
            
            {/* Right content */}
            <div className={styles.rightContent}>
              <span className={styles.socialIcon}>FB</span>
              <span className={styles.socialIcon}>IG</span>
              <span className={styles.socialIcon}>LI</span>
            </div>
          </div>
        </div>
        
        <div className={styles.codeExplanation}>
          <h4>How It Works:</h4>
          <p>This left-side slanting cut is created using a combination of <code>transform: skewX()</code> and positioning:</p>
          
          <h5>1. The Container:</h5>
          <pre className={styles.code}>
{`.topBar {
  position: relative;
  background-color: #d81921; /* Red color */
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  overflow: hidden;
}`}
          </pre>
          
          <h5>2. The Slanting Cut Element:</h5>
          <pre className={styles.code}>
{`.slantingCut {
  position: absolute;
  top: 0;
  left: 0; /* Positioned on the left side */
  height: 100%;
  width: 20%; /* Width of the cut area */
  background-color: white;
  transform: skewX(20deg); /* Creates the slant effect (positive angle) */
  transform-origin: top left; /* Pivot point for the transform */
  z-index: 1;
}`}
          </pre>
          
          <h5>3. The Content Elements:</h5>
          <pre className={styles.code}>
{`.leftContent, .rightContent {
  position: relative;
  z-index: 10; /* Above the slanting cut */
}`}
          </pre>
          
          <h4>Key Points:</h4>
          <ul className={styles.keyPoints}>
            <li>The <code>skewX(20deg)</code> creates the slanting effect (positive angle for left side)</li>
            <li>The white slanting element is positioned absolutely on the left side</li>
            <li>Content needs a higher z-index to appear above the slanting cut</li>
            <li>The container needs <code>overflow: hidden</code> to prevent the skewed element from extending outside</li>
            <li>Adjust the width and skew angle to control the appearance of the slant</li>
          </ul>
          
          <h4>Difference Between Left and Right Slant:</h4>
          <ul className={styles.keyPoints}>
            <li>For left side: <code>left: 0</code> and <code>skewX(positive angle)</code></li>
            <li>For right side: <code>right: 0</code> and <code>skewX(negative angle)</code></li>
            <li>Transform origin should match the side (left or right)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
