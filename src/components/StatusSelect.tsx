import React from 'react';

const StatusSelect = ({
  onChangeHandler,
  defaultValue,
}: {
  onChangeHandler: (
    e: React.ChangeEvent<HTMLSelectElement>,
    id?: string,
  ) => void;
  defaultValue: string;
}) => {
  return (
    <select
      defaultValue={defaultValue}
      name='status'
      onChange={onChangeHandler}
      className='bg-transparent'
    >
      <option value='지원'>지원</option>
      <option value='과제'>과제</option>
      <option value='면접'>면접</option>
      <option value='합격'>합격</option>
      <option value='탈락'>탈락</option>
    </select>
  );
};

export default StatusSelect;
