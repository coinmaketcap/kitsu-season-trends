import { connect } from 'react-redux'
import TrendGrid from '../components/TrendGrid'

const getSortedTrends = (trends, sort) => {
  console.log('getSortedTrends')
  console.log(trends)
  switch (sort) {
    case 'SORT_SCORE':
      return trends
    case 'SORT_POPULARITY':
      return trends
    default:
      return trends
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps')
  console.log(state)
  return {
    trends: getSortedTrends(state.trends, state.sortOrder)
  }
}

const SortedTrendGrid = connect(
  mapStateToProps
)(TrendGrid)

export default SortedTrendGrid
