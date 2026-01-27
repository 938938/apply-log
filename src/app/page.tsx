export default function Home() {
  return (
    <div>
      <div className='flex justify-around'>
        <h1>Apply Log</h1>
        <button>추가</button>
      </div>
      <div>
        <button>전체</button>
        <button>지원</button>
        <button>과제</button>
        <button>면접</button>
        <button>합격</button>
        <button>탈락</button>
      </div>
      <div className='flex'>
        <div>
          <h3>총 지원</h3>
          <p>12</p>
        </div>
        <div>
          <h3>진행 중</h3>
          <p>8</p>
        </div>
        <div>
          <h3>합격</h3>
          <p>3</p>
        </div>
        <div>
          <h3>탈락</h3>
          <p>1</p>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <h4>회사명</h4>
            <p>진행 상황</p>
            <p>프론트 엔드</p>
            <p>채용 공고</p>
            <p>이력서</p>
            <p>지원일 : 2026 / 01 / 27</p>
            <p>메모</p>
            <button>수정</button>
            <button>삭제</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
