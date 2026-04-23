import { useTranslation } from 'react-i18next'

import { useFilterData } from '../hooks/useFilterData'
import { useFilterStore } from '../store/useFilterStore'
import { ConfirmationDialog } from './ConfirmationDialog'
import { FilterFooter } from './FilterFooter'
import { FilterGroup } from './FilterGroup'
import { FilterHeader } from './FilterHeader'

export const FilterModal = () => {
	const { t } = useTranslation('filter')
	const { closeFilterModal, isConfirmationOpen } = useFilterStore()
	const { data: filters, isLoading } = useFilterData()

	return (
		<>
			<div
				className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-10 lg:p-20"
				onClick={closeFilterModal}
			>
				<div
					className="relative bg-white rounded-2xl w-full max-h-[90vh] flex flex-col"
					onClick={e => e.stopPropagation()}
				>
					<FilterHeader />

					<div className="overflow-y-auto flex-1">
						{isLoading ? (
							<p className="py-10 px-8 text-center text-sm text-gray-400">
								{t('loading')}
							</p>
						) : (
							<div className="divide-y divide-gray-200 px-8">
								{filters?.map((item, idx) => (
									<div
										key={item.id}
										className={`py-6  border-gray-200 ${idx === 0 ? 'border-t border-b' : 'border-b'}`}
									>
										<FilterGroup item={item} />
									</div>
								))}
							</div>
						)}
					</div>

					<FilterFooter />
				</div>
			</div>

			{isConfirmationOpen && <ConfirmationDialog />}
		</>
	)
}
