import { useQuery } from '@tanstack/react-query'

import type { FilterItem } from '@/shared/api/types/Filter'
import filterData from '@/shared/temp/filterData.json'

const fetchFilters = async (): Promise<FilterItem[]> => {
	await new Promise(resolve => setTimeout(resolve, 300))
	return filterData.filterItems as FilterItem[]
}

export const useFilterData = () =>
	useQuery({
		queryKey: ['filters'],
		queryFn: fetchFilters
	})
