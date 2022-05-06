import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Buttons from './Components/Buttons';
import CardRender from './Components/CardRender';
import Scroll from './Components/Scroll';
import { requestUsers, requestUser } from './actions';

const mapStateToProps = state => {
  return {
    users: state.requestUsers.users,
    isFetched: state.requestUsers.isFetched,
    user: state.requestUser.user,
    showUserCard: state.requestUser.showUserCard
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestUsers: () => dispatch(requestUsers()),
    onRequestUser: (id) => dispatch(requestUser(id)),
  }
};

function App(props) {

  const {
    users,
    onRequestUsers,
    isFetched,
    user,
    onRequestUser,
    showUserCard
  } = props;

  useEffect(() => {
    onRequestUsers();
  }, [onRequestUsers])

  const displayCard = (id) => {
    onRequestUser(id);
  }

  return !isFetched ?
    <div className="f2 tc">Loading.. please wait!!</div> :
    <div className="tc">
      <div className="f3 fw30 ma2 pa2 black b pv2 ph3 hover-mid-gray">⤜ Click any number and get the User profile ⤛</div>
      <div className="dib ma0 pa3">
        <Scroll className="tc">
          <Buttons users={users} onButtonClick={displayCard} />
        </Scroll>
      </div>
      <CardRender showUserCard={showUserCard} user={user.data} />
    </div>
};

export default connect(mapStateToProps, mapDispatchToProps)(App);