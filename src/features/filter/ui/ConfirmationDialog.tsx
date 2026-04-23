import { useTranslation } from 'react-i18next'

import { Button, CloseButton, Title } from '@/features/ui'

import { useFilterStore } from '../store/useFilterStore'

export const ConfirmationDialog = () => {
	const { t } = useTranslation('filter')
	const { applyFilters, discardChanges, closeConfirmation } = useFilterStore()

	return (
		<div
			className="fixed inset-0 z-60 flex items-start justify-center bg-black/30 px-4 sm:px-10 lg:px-20 pt-4 sm:pt-10 lg:pt-[200px]"
			onClick={closeConfirmation}
		>
			<div
				className="relative bg-white rounded-2xl w-full p-8"
				onClick={e => e.stopPropagation()}
			>
				<div className="flex items-center pb-[120px] shrink-0 leading-none">
					<Title>{t('confirmation.title')}</Title>
					<CloseButton
						onClick={closeConfirmation}
						className="ml-auto"
						ariaLabel={t('confirmation.title')}
					/>
				</div>

				<div className="flex gap-4 justify-center">
					<Button
						onClick={discardChanges}
						className="flex-1 max-w-[280px]"
						variant="secondary"
					>
						{t('confirmation.useOld')}
					</Button>
					<Button
						onClick={applyFilters}
						className="flex-1 max-w-[280px]"
					>
						{t('confirmation.applyNew')}
					</Button>
				</div>
			</div>
		</div>
	)
}
