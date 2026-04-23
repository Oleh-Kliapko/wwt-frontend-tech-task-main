import { useTranslation } from 'react-i18next'

import { FilterModal, useFilterStore } from '@/features/filter'

export const App = () => {
	const { t } = useTranslation('filter')
	const { appliedFilters, isFilterModalOpen, openFilterModal } =
		useFilterStore()

	return (
		<main className="min-h-dvh flex flex-col items-center justify-center gap-8 p-8">
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<h1 className="text-4xl font-semibold text-gray-700">WinWinTravel</h1>

			<button
				onClick={openFilterModal}
				className="bg-primary hover:bg-primary-hover text-white rounded px-8 py-3 font-medium transition-colors"
			>
				{t('openFilter')}
			</button>

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
