import React from 'react'

import { Header } from './components/header'
import { Sidebar } from './components/sidebar'

export type RootLayoutProps = {
  children: React.ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <section className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 bg-zinc-100">{children}</main>
      </section>
    </div>
  )
}
