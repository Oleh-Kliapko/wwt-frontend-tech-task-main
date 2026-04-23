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
				className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
				onClick={closeFilterModal}
			>
				<div
					className="relative bg-white rounded-2xl w-full max-w-[660px] max-h-[90vh] flex flex-col mx-4"
					onClick={e => e.stopPropagation()}
				>
					<FilterHeader />

					<hr className="border-gray-200 shrink-0" />

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

					<hr className="border-gray-200 shrink-0" />
					<FilterFooter />
				</div>
			</div>

			{isConfirmationOpen && <ConfirmationDialog />}
		</>
	)
}
