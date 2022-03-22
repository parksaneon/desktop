import React, { useState } from 'react';

import { StyledForm } from './SearchForm.style';
import PersoInput from './Input/PersoInput';
import QueryInput from './Input/QueryInput';
import EndDatPicker from './Input/EndDatPicker';
import StartDatePicker from './Input/StartDatePicker';
import Button from './Button/Button';
import { getSearchHotelsByQuery } from 'src/utils/requests';

const SearchForm = () => {
  const [destinationId, setDestinationId] = useState<number>(759818);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [person, setPerson] = useState(1);

  const changeDateFormat = (date: Date) => new Date(date).toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const checkIn = changeDateFormat(startDate);
    const checkOut = changeDateFormat(endDate);
    console.log(await getSearchHotelsByQuery({ destinationId, checkIn, checkOut, person }));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <QueryInput setDestinationId={setDestinationId} />
      <StartDatePicker startDate={startDate} setStartDate={setStartDate} />
      <EndDatPicker startDate={startDate} endDate={endDate} setEndDate={setEndDate} />
      <PersoInput setPerson={setPerson} />
      <Button />
    </StyledForm>
  );
};

export default SearchForm;
