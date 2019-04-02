import { connect } from 'react-redux'
import * as pageActions from '../redux/actions/page'
import Page from '../components/page'

function mapStateToProps(state) {
  const { displayedPersonajes, isFetched, error } = state.page

  return {
    displayedPersonajes,
    isFetched,
    error
  }
}

const mapDispatchToProps = {
  getPersonajes: pageActions.getPersonajes,
  filterPersonajes: pageActions.filterPersonajes
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
