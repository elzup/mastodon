import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Column from '../ui/components/column';
import { defineMessages, injectIntl } from 'react-intl';
import ReportGoogleMap from './components/report_google_map';

import { makeMapStateToProps, mapDispatchToProps } from '../ui/containers/status_list_container';

const messages = defineMessages({
  title: { id: 'column.map', defaultMessage: 'Map' }
});

const mapStateToProps = state => ({
  hasUnread: state.getIn(['timelines', 'home', 'unread']) > 0
});

class ReportsMap extends React.PureComponent {

  render () {
    const { intl } = this.props;

    return (
      <Column icon='map' heading={intl.formatMessage(messages.title)}>
        <ReportGoogleMap
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={_.noop}
          onMapClick={_.noop}
          markers={markers}
          onMarkerRightClick={_.noop}
        />,
      </Column>
    );
  }

}

ReportsMap.propTypes = {
  intl: PropTypes.object.isRequired,
  hasUnread: PropTypes.bool
};

export default connect(mapStateToProps)(injectIntl(ReportsMap));
