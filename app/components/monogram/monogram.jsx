import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      //className={classes(styles.monogram, className)}
      opacity={.4}
      width="140"
      height="100"
      viewBox="-1.92 -1.92 27.84 27.84"
      transform="rotate(55)matrix(1, 0, 0, 1, 0, 0)"
      ref={ref}
      
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
        <path d="M16 4L18.5 20L21 4H16ZM16 4L12 4M16 4L14 11L12 4M12 4L8 4M12 4L10 14L8 4M8 4L3 4L5.5 11L8 4Z" ></path>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (


        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
