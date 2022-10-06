import React from 'react'

export enum ActionStyleKinds { light, dark }
interface ActionProps extends React.PropsWithChildren {
  styleKind: ActionStyleKinds;
}
export default function Action(props: ActionProps) {
  return <>
    <button className={`text-xs rounded-sm h-12 ${props.styleKind === ActionStyleKinds.light ? "text-stone-800 bg-stone-200" : "text-stone-200 bg-stone-700"}`}>
      {props.children}
    </button>
  </>
}

