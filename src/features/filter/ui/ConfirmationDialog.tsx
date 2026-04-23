import { useTranslation } from 'react-i18next'

import { Button, CloseButton } from '@/features/ui'

import { useFilterStore } from '../store/useFilterStore'

export const ConfirmationDialog = () => {
	const { t } = useTranslation('filter')
	const { applyFilters, discardChanges, closeConfirmation } = useFilterStore()

	return (
		<div
			className="fixed inset-0 z-60 flex items-center justify-center bg-black/30"
			onClick={closeConfirmation}
		>
			<div
				className="relative bg-white rounded-2xl w-full max-w-md mx-4"
				onClick={e => e.stopPropagation()}
			>
				<div className="flex items-center justify-center px-8 pt-6 pb-6 relative shrink-0">
					<p className="text-base font-medium">{t('confirmation.title')}</p>
					<CloseButton
						onClick={closeConfirmation}
						className="absolute top-6 right-6"
						ariaLabel={t('confirmation.title')}
					/>
				</div>

				<div className="flex gap-4 justify-center px-8 pb-8 pt-6">
					<Button
						onClick={discardChanges}
						className="flex-1 max-w-[160px]"
						variant="secondary"
					>
						{t('confirmation.useOld')}
					</Button>
					<Button
						onClick={applyFilters}
						className="flex-1 max-w-[160px]"
					>
						{t('confirmation.applyNew')}
					</Button>
				</div>
			</div>
		</div>
	)
}
