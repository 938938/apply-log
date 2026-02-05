'use client';

import { Application, ApplicationStatus } from '@/model/type';
import StatusSelect from './StatusSelect';
import EditModal from './EditModal';
import { useState } from 'react';
import { useAppDispatch } from '@/utils/redux/hooks';
import {
  deleteApplication,
  updateApplication,
} from '@/utils/redux/applicationSlice';

const LogTable = ({ data }: { data: Application[] }) => {
  const dispatch = useAppDispatch();
  const [editingItem, setEditingItem] = useState<Application | null>(null);
  const onStatusChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>,
    data: Application,
  ) => {
    const nextStatus = e.target.value as Application['status'];
    const updated = { ...data, status: nextStatus };

    dispatch(updateApplication(updated));
  };

  const onDeleteHandler = (id: string) => {
    dispatch(deleteApplication(id));
  };

  const statusBgMap: Record<ApplicationStatus, string> = {
    전부: '',
    지원: 'bg-blue-50',
    과제: 'bg-yellow-50',
    면접: 'bg-purple-50',
    합격: 'bg-green-50',
    탈락: 'bg-red-50',
  };

  return (
    <table>
      <thead>
        <tr>
          <th>회사명</th>
          <th>포지션</th>
          <th>지원현황</th>
          <th>지원일</th>
          <th>채용공고</th>
          <th>메모</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((ele) => (
          <tr key={ele.id} className={statusBgMap[ele.status]}>
            <td>{ele.companyName}</td>
            <td>{ele.position}</td>
            <td>
              <StatusSelect
                onChangeHandler={(e) => onStatusChangeHandler(e, ele)}
                defaultValue={ele.status}
              />
            </td>
            <td>{ele.appliedAt}</td>
            <td>
              <a href={ele.jobPostUrl} target='_blank'>
                🔗
              </a>
            </td>
            <td>{ele.memo}</td>
            <td>
              <button onClick={() => setEditingItem(ele)}>수정</button>
              <button onClick={() => onDeleteHandler(ele.id)}>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
      {editingItem && (
        <EditModal
          setOpen={() => setEditingItem(null)}
          prevData={editingItem}
          type='수정'
        />
      )}
    </table>
  );
};

export default LogTable;
