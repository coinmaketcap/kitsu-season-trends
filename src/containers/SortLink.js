import { connect } from 'react-redux'
import { setSortOrder } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps)
  return {
    active: ownProps.sort === state.sortOrder
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setSortOrder(ownProps.sort))
    }
  }
}

const SortLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default SortLink
