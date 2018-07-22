import * as React from 'react'

export interface GadgetProps extends React.HTMLAttributes<HTMLDivElement> {
  top: number
  left: number
  width: number
  height: number
}

export const Gadget = ({
  top,
  left,
  width,
  height,
  ...props
}: GadgetProps) => {
  const style: React.CSSProperties = {
    ...props.style,
    position: 'absolute',
    top,
    backgroundColor: 'rgba(255,255,255,0.7)',
    left,
    height,
    width,
    border: '1px solid black',
    borderRadius: '4px',
  }
  return (
    <div {...props} style={style} >

    </div>
  );
}
