import { useTranslation } from 'react-i18next'

import { useFilterStore } from '../store/useFilterStore'

const CloseIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="w-5 h-5"
		viewBox="0 0 20 20"
		fill="currentColor"
		aria-hidden="true"
	>
		<path
			fillRule="evenodd"
			d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
			clipRule="evenodd"
		/>
	</svg>
)

export const ConfirmationDialog = () => {
	const { t } = useTranslation('filter')
	const { applyFilters, discardChanges, closeConfirmation } = useFilterStore()

	return (
		<div
			className="fixed inset-0 z-60 flex items-center justify-center bg-black/30"
			onClick={closeConfirmation}
		>
			<div
				className="relative bg-white rounded-2xl w-full max-w-md mx-4 px-10 py-10"
				onClick={e => e.stopPropagation()}
			>
				<button
					onClick={closeConfirmation}
					className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
					aria-label={t('confirmation.title')}
				>
					<CloseIcon />
				</button>

				<p className="text-center text-base font-medium mb-10">
					{t('confirmation.title')}
				</p>

				<div className="flex gap-4 justify-center">
					<button
						onClick={discardChanges}
						className="flex-1 max-w-[160px] border border-gray-300 rounded px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
					>
						{t('confirmation.useOld')}
					</button>
					<button
						onClick={applyFilters}
						className="flex-1 max-w-[160px] bg-primary hover:bg-primary-hover text-white rounded px-4 py-2.5 text-sm font-medium transition-colors"
					>
						{t('confirmation.applyNew')}
					</button>
				</div>
			</div>
		</div>
	)
}
