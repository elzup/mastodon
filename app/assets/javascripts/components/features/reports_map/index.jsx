import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Column from '../ui/components/column';
import { defineMessages, injectIntl } from 'react-intl';

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
        <div>
          <span>this is map space</span>
        </div>
      </Column>
    );
  }

}

ReportsMap.propTypes = {
  intl: PropTypes.object.isRequired,
  hasUnread: PropTypes.bool
};

export default connect(mapStateToProps)(injectIntl(ReportsMap));
