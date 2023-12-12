import React from "react"

type ContentContainerProps = {
	children: React.ReactNode
}

export default function ContentContainer({ children }: ContentContainerProps) {
	return <section className="container mx-auto px-4 py-2 relative">{children}</section>
}
