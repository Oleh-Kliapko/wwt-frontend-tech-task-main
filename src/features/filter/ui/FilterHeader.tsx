import { useTranslation } from 'react-i18next'

import { CloseButton } from '@/features/ui'

import { useFilterStore } from '../store/useFilterStore'

export const FilterHeader = () => {
	const { t } = useTranslation('filter')
	const { closeFilterModal } = useFilterStore()

	return (
		<div className="flex items-center justify-center px-8 pt-6 pb-4 relative shrink-0">
			<h1 className="text-base font-semibold">{t('title')}</h1>
			<CloseButton
				onClick={closeFilterModal}
				className="absolute top-6 right-6"
				ariaLabel={t('title')}
			/>
		</div>
	)
}
