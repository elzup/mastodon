import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Column from '../ui/components/column';
import { defineMessages, injectIntl } from 'react-intl';
import { ReportGoogleMap } from './components/report_google_map';

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

    const markers = [{
      position: {
        lat: 25.0112183,
        lng: 121.52067570000001,
      },
      key: `Taiwan`,
      defaultAnimation: 2,
    }];

    console.log(window.gmapKey);
    return (
      <Column icon='map' heading={intl.formatMessage(messages.title)}>
        <ReportGoogleMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${window.gmapKey}`}
          loadingElement={
            <div style={{ height: `100%` }}>
              <span>Loading...</span>
            </div>
          }
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={() => {}}
          onMapClick={() => {}}
          markers={markers}
          onMarkerRightClick={() => {}}
        />
      </Column>
    );
  }

}

ReportsMap.propTypes = {
  intl: PropTypes.object.isRequired,
  hasUnread: PropTypes.bool
};

export default connect(mapStateToProps)(injectIntl(ReportsMap));
