import { ReactNode } from 'react'

export const Title = ({ children }: { children: ReactNode }) => {
	return (
		<h2 className="flex-1 text-center text-[40px] font-semibold">{children}</h2>
	)
}
