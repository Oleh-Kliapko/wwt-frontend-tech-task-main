import { ButtonHTMLAttributes } from 'react'

import { CloseIcon } from '@/image'

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	ariaLabel: string
}

export const CloseButton = ({
	ariaLabel,
	className,
	...props
}: CloseButtonProps) => {
	return (
		<button
			{...props}
			className={`text-gray-400 hover:text-gray-600 transition-colors ${className || ''}`}
			aria-label={ariaLabel}
		>
			<CloseIcon />
		</button>
	)
}
