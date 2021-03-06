import Actions     from '../actions';
import TweetTab    from '../components/tweet-tab';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  let selectedTab = state.selectedTabByUserId[props.account.id_str] || 'home';
  return {
    active: selectedTab === props.tab,
    unread: 0,
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onTabClicked: () => {
      dispatch(Actions.selectTab(props.tab, props.account));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetTab);
