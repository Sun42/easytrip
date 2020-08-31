import React, { useState } from 'react';
import PropTypes from 'prop-types';

// semantic-ui
import {
  Button, Header, Modal, Form, Icon,
} from 'semantic-ui-react';

// Calendar
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

const ModalTripAdd = ({
  handleAddDestination, handleAddTrip, handleAddStartDate,
  handleAddEndDate, destination,
}) => {
  // modal state modifier
  const [open, setOpen] = useState(false);

  // calendar handler and state modifier
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [focus, setFocus] = useState(null);
  const { startDate, endDate } = dateRange;
  const handleOnDateChange = (startDate, endDate) => setDateRange(startDate, endDate);

  // momentObject converter
  const formatedStartDate = moment(startDate).format('DD/MM/YYYY');
  const formatedEndDate = moment(endDate).format('DD/MM/YYYY');

  return (

    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={<Button>Nouveau voyage</Button>}
    >
      <Header icon>
        <Icon name="map outline" />
        Créer un nouveau carnet de voyage
      </Header>
      <Modal.Content>
        <Form
          onSubmit={(evt) => {
            evt.preventDefault();
            handleAddStartDate(formatedStartDate);
            handleAddEndDate(formatedEndDate);
            handleAddTrip();
            setOpen(false);
          }}
        >
          <Form.Field>
            <label>Destination</label>
            <input
              value={destination}
              placeholder="Destination..."
              onChange={(evt) => {
                const text = evt.target.value;
                handleAddDestination(text);
              }}
            />
          </Form.Field>
          <Form.Field>
            <DateRangePicker
              startDatePlaceholderText="Départ"
              startDate={startDate}
              onDatesChange={handleOnDateChange}
              endDatePlaceholderText="Retour"
              endDate={endDate}
              numberOfMonths={1}
              displayFormat="DD/MM/YYYY"
              showClearDates
              focusedInput={focus}
              onFocusChange={(focus) => setFocus(focus)}
              startDateId="startDateMookh"
              endDateId="endDateMookh"
              minimumNights={0}
              showDefaultInputIcon
            />
          </Form.Field>
          <Form.Field>
            <Modal.Actions>
              <Button basic color="red" inverted onClick={() => setOpen(false)}>
                <Icon name="remove" /> Annuler
              </Button>
              <Button type="submit" color="green" inverted>
                <Icon name="checkmark" /> Créer
              </Button>
            </Modal.Actions>
          </Form.Field>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

ModalTripAdd.propTypes = {
  handleAddDestination: PropTypes.func.isRequired,
  handleAddTrip: PropTypes.func.isRequired,
  handleAddStartDate: PropTypes.func.isRequired,
  handleAddEndDate: PropTypes.func.isRequired,
  destination: PropTypes.string.isRequired,
};

export default ModalTripAdd;
