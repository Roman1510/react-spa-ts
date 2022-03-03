import React, { FC } from 'react'
import classes from './Card.module.css'
export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProps {
  width?: string
  height?: string
  variant?: CardVariant
  children?: React.ReactChild | React.ReactNode
}

const Card: FC<CardProps> = ({ width, height, variant, children }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : '',
      }}
    >
      <div className={classes.card}>{children}</div>
    </div>
  )
}

export default Card
