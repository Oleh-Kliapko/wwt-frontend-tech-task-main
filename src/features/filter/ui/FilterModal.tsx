import { useTranslation } from 'react-i18next'

import type { FilterItem } from '@/shared/api/types/Filter'

import { useFilterData } from '../hooks/useFilterData'
import { useFilterStore } from '../store/useFilterStore'
import { ConfirmationDialog } from './ConfirmationDialog'

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

const FilterGroup = ({ item }: { item: FilterItem }) => {
	const { pendingFilters, toggleOption } = useFilterStore()

	const selectedIds =
		pendingFilters.find(entry => entry.id === item.id)?.optionsIds ?? []

	return (
		<section>
			<h2 className="font-semibold text-sm mb-4">{item.name}</h2>
			<ul className="grid grid-cols-3 gap-x-6 gap-y-3">
				{item.options.map(option => (
					<li key={option.id}>
						<label className="flex items-center gap-2 cursor-pointer text-sm">
							<input
								type="checkbox"
								className="w-4 h-4 shrink-0 accent-primary cursor-pointer"
								checked={selectedIds.includes(option.id)}
								onChange={() => toggleOption(item.id, option.id)}
							/>
							{option.name}
						</label>
					</li>
				))}
			</ul>
		</section>
	)
}

export const FilterModal = () => {
	const { t } = useTranslation('filter')
	const {
		closeFilterModal,
		openConfirmation,
		clearAllFilters,
		isConfirmationOpen
	} = useFilterStore()
	const { data: filters, isLoading } = useFilterData()

	return (
		<>
			<div
				className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
				onClick={closeFilterModal}
			>
				<div
					className="relative bg-white rounded-2xl w-full max-w-[660px] max-h-[90vh] flex flex-col mx-4"
					onClick={e => e.stopPropagation()}
				>
					{/* Header */}
					<div className="flex items-center justify-center px-8 pt-6 pb-4 relative shrink-0">
						<h1 className="text-base font-semibold">{t('title')}</h1>
						<button
							onClick={closeFilterModal}
							className="absolute right-6 text-gray-400 hover:text-gray-600 transition-colors"
							aria-label={t('title')}
						>
							<CloseIcon />
						</button>
					</div>
					<hr className="border-gray-200 shrink-0" />

					{/* Body */}
					<div className="overflow-y-auto flex-1 px-8">
						{isLoading ? (
							<p className="py-10 text-center text-sm text-gray-400">
								{t('loading')}
							</p>
						) : (
							<div className="divide-y divide-gray-200">
								{filters?.map(item => (
									<div
										key={item.id}
										className="py-6"
									>
										<FilterGroup item={item} />
									</div>
								))}
							</div>
						)}
					</div>

					{/* Footer */}
					<hr className="border-gray-200 shrink-0" />
					<div className="relative flex items-center justify-center px-8 py-4 shrink-0">
						<button
							onClick={openConfirmation}
							className="bg-primary hover:bg-primary-hover text-white rounded px-12 py-2.5 text-sm font-medium transition-colors"
						>
							{t('apply')}
						</button>
						<button
							onClick={clearAllFilters}
							className="absolute right-8 text-blue-500 hover:text-blue-700 text-sm transition-colors"
						>
							{t('clearAll')}
						</button>
					</div>
				</div>
			</div>

			{isConfirmationOpen && <ConfirmationDialog />}
		</>
	)
}
