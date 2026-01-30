'use client';

import { Application } from '@/model/type';
import { useState } from 'react';
import StatusSelect from './StatusSelect';

const AddModal = ({
  setOpen,
  setData,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<Application[]>>;
}) => {
  const [form, setForm] = useState<Omit<Application, 'id'>>({
    companyName: '',
    position: '',
    jobPostUrl: '',
    status: '지원',
    appliedAt: '',
    memo: '',
  });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newApplication: Application = {
      id: crypto.randomUUID(),
      ...form,
    };

    setData((prev) => [...prev, newApplication]);
    setOpen(false);
  };
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div
        className='absolute inset-0 bg-black/50'
        onClick={() => setOpen(false)}
      />
      <div className='relative z-10 w-[90%] max-w-md rounded-lg bg-white p-6 shadow-lg'>
        <h2 className='text-lg font-semibold mb-4'>지원내역 추가</h2>

        <form>
          <div>
            <label>회사명</label>
            <input name='companyName' required onChange={onChangeHandler} />
          </div>

          <div>
            <label>직무</label>
            <input name='position' onChange={onChangeHandler} />
          </div>

          <div>
            <label>공고 링크</label>
            <input name='jobPostUrl' onChange={onChangeHandler} />
          </div>

          <div>
            <label>지원상태</label>
            <StatusSelect
              onChangeHandler={onChangeHandler}
              defaultValue='지원'
            />
          </div>

          <div>
            <label>지원날짜</label>
            <input type='date' name='appliedAt' onChange={onChangeHandler} />
          </div>

          <div>
            <label>메모</label>
            <input name='memo' onChange={onChangeHandler} />
          </div>

          <div className='flex justify-end gap-2'>
            <button
              type='button'
              onClick={() => setOpen(false)}
              className='px-4 py-2 rounded bg-gray-200 hover:bg-gray-300'
            >
              취소
            </button>

            <button
              className='px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700'
              onClick={onClickHandler}
            >
              확인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
