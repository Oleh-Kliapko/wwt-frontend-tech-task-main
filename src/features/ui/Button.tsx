import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	variant?: ButtonVariant
}

const variantStyles: Record<ButtonVariant, string> = {
	primary:
		'bg-primary hover:bg-primary-hover text-white rounded-2xl px-18 py-6 text-base font-semibold transition-colors cursor-pointer leading-none',
	secondary:
		'border border-gray-300 rounded-2xl px-18 py-6 text-base font-semibold hover:bg-gray-50 transition-colors cursor-pointer leading-none',
	link: 'text-blue-500 hover:text-blue-700 text-base font-medium transition-colors cursor-pointer leading-none'
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
