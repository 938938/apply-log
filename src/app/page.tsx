'use client';

import EditModal from '@/components/EditModal';
import LogTable from '@/components/LogTable';
import { Application, ApplicationStatus } from '@/model/type';
import { loadData } from '@/utils/actions/storages';
import { setData } from '@/utils/redux/applicationSlice';
import { useAppDispatch } from '@/utils/redux/hooks';
import { RootState } from '@/utils/redux/store';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

const mockApplications: Application[] = [
  {
    id: '1',
    companyName: '네오소프트',
    position: '프론트엔드 개발자',
    status: '지원',
    jobPostUrl: 'https://example.com/job/neo-frontend',
    appliedAt: '2026-01-10',
    memo: 'Next.js 경험 우대라고 되어 있음',
  },
  {
    id: '2',
    companyName: '브릿지랩',
    position: '웹 프론트엔드 주니어',
    status: '과제',
    jobPostUrl: 'https://example.com/job/bridge-frontend',
    appliedAt: '2026-01-08',
    memo: '과제 마감: 1/25, CRUD 구현',
  },
  {
    id: '3',
    companyName: '플로우테크',
    position: '프론트엔드 엔지니어',
    status: '면접',
    jobPostUrl: 'https://example.com/job/flowtech',
    appliedAt: '2026-01-05',
    memo: '1차 면접 완료, 상태관리 질문 많았음',
  },
  {
    id: '4',
    companyName: '모노랩',
    position: 'React 개발자',
    status: '탈락',
    jobPostUrl: 'https://example.com/job/monolab',
    appliedAt: '2025-12-28',
  },
  {
    id: '5',
    companyName: '커넥트원',
    position: '프론트엔드 주니어',
    status: '합격',
    jobPostUrl: 'https://example.com/job/connectone',
    appliedAt: '2025-12-20',
    memo: '연봉 협의 중',
  },
];

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const storage = loadData();
    dispatch(setData(storage));
  }, [dispatch]);
  const data = useSelector((state: RootState) => state.application);

  const [open, setOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<ApplicationStatus>('전부');

  const filteredData = useMemo(() => {
    if (filter === '전부') return data;
    return data.filter((item) => item.status === filter);
  }, [data, filter]);

  const StatusList: ApplicationStatus[] = [
    '전부',
    '지원',
    '과제',
    '면접',
    '합격',
    '탈락',
  ];

  return (
    <div className='w-3/5 min-w-96 bg-white rounded-lg mt-0 sm:mt-5 p-5'>
      <div className='flex justify-between'>
        <h1>Apply Log</h1>
        <button onClick={() => setOpen(true)}>추가</button>
      </div>
      <div className='flex'>
        <div>
          <h3>총 지원</h3>
          <p>{data.length}</p>
        </div>
        <div>
          <h3>진행 중</h3>
          <p>
            {
              data.filter(
                (ele) => ele.status !== '합격' && ele.status !== '탈락',
              ).length
            }
          </p>
        </div>
        <div>
          <h3>합격</h3>
          <p>{data.filter((ele) => ele.status === '합격').length}</p>
        </div>
        <div>
          <h3>탈락</h3>
          <p>{data.filter((ele) => ele.status === '탈락').length}</p>
        </div>
      </div>
      <div>
        {StatusList.map((status) => (
          <button key={status} onClick={() => setFilter(status)}>
            {status}
          </button>
        ))}
      </div>
      <div>
        <LogTable data={filteredData} />
      </div>
      {open && <EditModal setOpen={setOpen} type='생성' />}
    </div>
  );
}
