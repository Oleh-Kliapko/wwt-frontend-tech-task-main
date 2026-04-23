import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { FilterType } from '@/shared/api/types/Filter'
import type { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'

interface FilterState {
	appliedFilters: SearchRequestFilter
	pendingFilters: SearchRequestFilter
	isFilterModalOpen: boolean
	isConfirmationOpen: boolean
}

interface FilterActions {
	openFilterModal: () => void
	closeFilterModal: () => void
	toggleOption: (filterId: string, optionId: string) => void
	openConfirmation: () => void
	closeConfirmation: () => void
	applyFilters: () => void
	discardChanges: () => void
	clearAllFilters: () => void
}

type FilterStore = FilterState & FilterActions

export const useFilterStore = create<FilterStore>()(
	immer(set => ({
		appliedFilters: [],
		pendingFilters: [],
		isFilterModalOpen: false,
		isConfirmationOpen: false,

		openFilterModal: () =>
			set(state => {
				state.isFilterModalOpen = true
				state.pendingFilters = JSON.parse(JSON.stringify(state.appliedFilters))
			}),

		closeFilterModal: () =>
			set(state => {
				state.isFilterModalOpen = false
				state.isConfirmationOpen = false
			}),

		toggleOption: (filterId, optionId) =>
			set(state => {
				const idx = state.pendingFilters.findIndex(
					entry => entry.id === filterId
				)
				if (idx === -1) {
					state.pendingFilters.push({
						id: filterId,
						type: FilterType.OPTION,
						optionsIds: [optionId]
					})
				} else {
					const filter = state.pendingFilters[idx]
					const optIdx = filter.optionsIds.indexOf(optionId)
					if (optIdx === -1) {
						filter.optionsIds.push(optionId)
					} else {
						filter.optionsIds.splice(optIdx, 1)
						if (filter.optionsIds.length === 0) {
							state.pendingFilters.splice(idx, 1)
						}
					}
				}
			}),

		openConfirmation: () =>
			set(state => {
				state.isConfirmationOpen = true
			}),

		closeConfirmation: () =>
			set(state => {
				state.isConfirmationOpen = false
			}),

		applyFilters: () =>
			set(state => {
				state.appliedFilters = JSON.parse(JSON.stringify(state.pendingFilters))
				state.isFilterModalOpen = false
				state.isConfirmationOpen = false
			}),

		discardChanges: () =>
			set(state => {
				state.pendingFilters = JSON.parse(JSON.stringify(state.appliedFilters))
				state.isConfirmationOpen = false
			}),

		clearAllFilters: () =>
			set(state => {
				state.pendingFilters = []
			})
	}))
)
