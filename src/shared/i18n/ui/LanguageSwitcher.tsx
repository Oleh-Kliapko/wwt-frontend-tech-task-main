import { useTranslation } from 'react-i18next'

const LANGUAGES = [
	{ code: 'en', label: 'EN' },
	{ code: 'uk', label: 'UK' }
] as const

export const LanguageSwitcher = () => {
	const { i18n } = useTranslation()

	return (
		<div className="flex gap-1">
			{LANGUAGES.map(lang => (
				<button
					key={lang.code}
					onClick={() => i18n.changeLanguage(lang.code)}
					className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
						i18n.language === lang.code
							? 'bg-primary text-white'
							: 'text-gray-500 hover:text-gray-800'
					}`}
				>
					{lang.label}
				</button>
			))}
		</div>
	)
}
