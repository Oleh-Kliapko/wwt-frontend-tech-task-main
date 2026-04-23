import { FilterItem } from '@/shared/api/types/Filter'

import { useFilterStore } from '../store/useFilterStore'

export const FilterGroup = ({ item }: { item: FilterItem }) => {
	const { pendingFilters, toggleOption } = useFilterStore()

	const selectedIds =
		pendingFilters.find(entry => entry.id === item.id)?.optionsIds ?? []

	return (
		<section>
			<h2 className="text-2xl mb-6">{item.name}</h2>
			<ul className="grid grid-cols-3 gap-x-6 gap-y-4">
				{item.options.map(option => (
					<li key={option.id}>
						<label className="flex items-center gap-4 cursor-pointer text-base">
							<input
								type="checkbox"
								className="w-6 h-6 shrink-0 accent-primary cursor-pointer"
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
