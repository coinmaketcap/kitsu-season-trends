import { connect } from 'react-redux'
import TrendGrid from '../components/TrendGrid'

const sortTrends = (array, key) => array.sort((a, b) => a.d[a.d.length - 1][key] > b.d[b.d.length - 1][key] ? -1 : 1)

const getSortedTrends = (trends, sort) => {
  const { data } = trends
  if (data.length > 0) {
    switch (sort) {
      case 'SORT_SCORE':
        console.log('SORT_SCORE')
        return sortTrends(data, 'm')
      case 'SORT_POPULARITY':
        console.log('SORT_POPULARITY')
        return sortTrends(data, 'u')
      case 'SORT_RATED':
        console.log('SORT_RATED')
        return sortTrends(data, 'r')
      case 'SORT_FAVOURITES':
        console.log('SORT_FAVOURITES')
        return sortTrends(data, 'f')
    }
  }
  return data
}

const mapStateToProps = state => {
  return {
    trends: getSortedTrends(state.trends, state.sortOrder)
  }
}

const SortedTrendGrid = connect(
  mapStateToProps
)(TrendGrid)

export default SortedTrendGrid
