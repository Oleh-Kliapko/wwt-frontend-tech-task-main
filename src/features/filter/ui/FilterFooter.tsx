import { useTranslation } from 'react-i18next'

import { Button } from '@/features/ui'

import { useFilterStore } from '../store/useFilterStore'

export const FilterFooter = () => {
	const { t } = useTranslation('filter')
	const { openConfirmation, clearAllFilters } = useFilterStore()
	return (
		<div className="relative flex items-center justify-center px-8 py-4 shrink-0">
			<Button
				onClick={openConfirmation}
				className="px-12"
			>
				{t('apply')}
			</Button>
			<Button
				onClick={clearAllFilters}
				className="absolute right-8"
				variant="link"
			>
				{t('clearAll')}
			</Button>
		</div>
	)
}
