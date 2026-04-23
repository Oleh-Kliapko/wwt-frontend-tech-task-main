import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	variant?: ButtonVariant
}

const variantStyles: Record<ButtonVariant, string> = {
	primary:
		'bg-primary hover:bg-primary-hover text-white rounded px-4 py-2.5 text-sm font-medium transition-colors',
	secondary:
		'border border-gray-300 rounded px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors',
	link: 'text-blue-500 hover:text-blue-700 text-sm transition-colors'
}

export const Button = ({
	variant = 'primary',
	className,
	...props
}: ButtonProps) => {
	const baseStyles = variantStyles[variant]

	return (
		<button
			{...props}
			className={className ? `${baseStyles} ${className}` : baseStyles}
		/>
	)
}
