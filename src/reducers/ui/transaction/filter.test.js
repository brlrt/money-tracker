import reducer from './filter'
import {
  changeFilterDate,
  toggleFilterCalendar
} from '../../../actions/ui/transaction/filter'
import DateRange from '../../../entities/Transaction/FilterDateRange'

it('returns initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    dateStart: DateRange.defaultStart,
    dateEnd: DateRange.defaultEnd,
    isCalendarOpen: false,
    isFilterModalOpen: false
  })
})

it('changes filter date range', () => {
  expect(
    reducer(
      { dateStart: 123, dateEnd: 456 },
      changeFilterDate({ dateStart: 789, dateEnd: 987 })
    )
  ).toEqual({ dateStart: 789, dateEnd: 987 })
})

it('toggles calendar visibility', () => {
  expect(reducer({ isCalendarOpen: false }, toggleFilterCalendar())).toEqual({
    isCalendarOpen: true
  })
  expect(reducer({ isCalendarOpen: true }, toggleFilterCalendar())).toEqual({
    isCalendarOpen: false
  })
})
