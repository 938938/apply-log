'use client';

import { Application, ApplicationStatus } from '@/model/type';
import StatusSelect from './StatusSelect';
import EditModal from './EditModal';
import { useState } from 'react';

const LogTable = ({
  data,
  setData,
}: {
  data: Application[];
  setData: React.Dispatch<React.SetStateAction<Application[]>>;
}) => {
  const [editingItem, setEditingItem] = useState<Application | null>(null);
  const onStatusChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>,
    id?: string,
  ) => {
    if (!id) return;

    const nextStatus = e.target.value as Application['status'];

    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: nextStatus } : item,
      ),
    );
  };

  const onDeleteHandler = (id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const statusBgMap: Record<ApplicationStatus, string> = {
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
                onChangeHandler={(e) => onStatusChangeHandler(e, ele.id)}
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
          setData={setData}
          prevData={editingItem}
          type='수정'
        />
      )}
    </table>
  );
};

export default LogTable;
