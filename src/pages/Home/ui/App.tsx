import { useTranslation } from 'react-i18next'

import { FilterModal, useFilterStore } from '@/features/filter'
import { Button } from '@/features/ui'
import { LanguageSwitcher } from '@/shared/i18n'

export const App = () => {
	const { t } = useTranslation('filter')
	const { appliedFilters, isFilterModalOpen, openFilterModal } =
		useFilterStore()

	return (
		<main className="min-h-dvh flex flex-col items-center justify-center gap-8 p-8">
			<div className="absolute top-4 right-4">
				<LanguageSwitcher />
			</div>

			{/* eslint-disable-next-line i18next/no-literal-string */}
			<h1 className="text-4xl font-semibold text-gray-700">WinWinTravel</h1>

			<Button
				onClick={openFilterModal}
				className="px-8 py-3"
			>
				{t('openFilter')}
			</Button>

			<section className="w-full max-w-2xl">
				<h2 className="text-sm font-semibold text-gray-500 mb-2">
					{t('appliedFilters')}
				</h2>
				{appliedFilters.length === 0 ? (
					<p className="text-sm text-gray-400">{t('noFilters')}</p>
				) : (
					<pre className="bg-gray-100 rounded-lg p-4 text-xs overflow-x-auto">
						{JSON.stringify(appliedFilters, null, 2)}
					</pre>
				)}
			</section>

			{isFilterModalOpen && <FilterModal />}
		</main>
	)
}
