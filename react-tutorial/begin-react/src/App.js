import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs; // inputs에서 username과 email을 미리 추출
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value // name이 email이면 email을 value로 바꾸고, name이 username이면 username을 value로 바꾼다.
    });
  }, [inputs]); // onChange 함수는 inputs가 바뀔 때만 함수가 새로 만들어지고, 그렇지 않다면 기존 함수를 재사용
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    }
  ]);

  const nextId = useRef(4); // useRef로 컴포넌트 안의 변수 만들기
  /*
    nextId를 useRef로 관리해주는 이유?
    값이 바뀐다고 해서 컴포넌트도 리렌더링 할 필요가 없기 때문
  */

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    }
    setUsers(users => [...users, user]); // setUsers(users.concat(user));
    setInputs({
      username: '',
      email: ''
    });
    console.log(nextId.current);
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setUsers(users => users.map(
      user => user.id === id
        ? { ...user, active: !user.active }
        : user
    ));
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate} 
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
