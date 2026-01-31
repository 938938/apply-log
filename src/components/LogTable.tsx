import { Application } from '@/model/type';
import StatusSelect from './StatusSelect';

const LogTable = ({
  data,
  setData,
}: {
  data: Application[];
  setData: React.Dispatch<React.SetStateAction<Application[]>>;
}) => {
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
          <tr key={ele.id}>
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
              <button>수정</button>
              <button onClick={() => onDeleteHandler(ele.id)}>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LogTable;
