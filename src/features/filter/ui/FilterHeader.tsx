import { useTranslation } from 'react-i18next'

import { CloseButton, Title } from '@/features/ui'

import { useFilterStore } from '../store/useFilterStore'

export const FilterHeader = () => {
	const { t } = useTranslation('filter')
	const { closeFilterModal } = useFilterStore()

	return (
		<div className="flex items-center px-8 pt-10 pb-4 shrink-0">
			<Title>{t('title')}</Title>
			<CloseButton
				onClick={closeFilterModal}
				className="ml-auto"
				ariaLabel={t('title')}
			/>
		</div>
	)
}
