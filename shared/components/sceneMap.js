import React, {PropTypes, Component} from 'react';
import MapLayout from '../containers/mapLayout';

export default class SceneMap extends Component {
  render() {
    this.props.setRoute(this.props.route);
    this.props.setNavigator(this.props.navigator);
    return (
      <MapLayout
      />
    );
  }
}

SceneMap.propTypes = {
  route: PropTypes.any,
  navigator: PropTypes.any,
  setRoute: PropTypes.func,
  setNavigator: PropTypes.func
};