import React from 'react'

export type TableGenericChildren = {
  children: React.ReactNode
}

export function Root({ children }: TableGenericChildren) {
  return (
    <div className="relative w-full overflow-hidden">
      <table className="w-full text-sm">{children}</table>
    </div>
  )
}

export function Header({ children }: TableGenericChildren) {
  return (
    <thead>
      <tr className="border-b-2 border-zinc-200">{children}</tr>
    </thead>
  )
}

export function Head({ children }: TableGenericChildren) {
  return (
    <th className="h-12 px-4 text-left align-middle font-medium text-zinc-500">
      {children}
    </th>
  )
}

export function Body({ children }: TableGenericChildren) {
  return <tbody className="[&_tr:last-child]:border-0">{children}</tbody>
}

export function Row({ children }: TableGenericChildren) {
  return <tr className="border-b transition-colors">{children}</tr>
}

export function Cell({ children }: TableGenericChildren) {
  return <td className="p-4 align-middle">{children}</td>
}
