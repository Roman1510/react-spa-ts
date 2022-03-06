import React, { FC } from 'react'
import classes from './Card.module.css'
export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface ICardProps {
  width: string
  height?: string
  variant?: CardVariant
  children?: React.ReactChild | React.ReactNode
  onClick: () => void
}

const Card: FC<ICardProps> = ({
  width,
  height,
  variant,
  children,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: width,
        height: height,
        border:
          variant === CardVariant.outlined ? '1px solid gray' : '1px solid red',
        background: variant === CardVariant.primary ? 'lightgray' : '',
      }}
    >
      <div className={classes.card}>{children}</div>
    </div>
  )
}

export default Card
