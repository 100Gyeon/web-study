/* 배열 렌더링하기 */

import React, { useContext } from 'react';
import { UserDispatch } from './App'; // App.js에서 UserDispatch를 불러오겠다.

const User = React.memo(function User({ user }) {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer'
        }}
        onClick={() => dispatch({
          type: 'TOGGLE_USER',
          id
        })}
      >
        {username}
      </b>
      <span>({email})</span>
      <button onClick={() => dispatch({
        type: 'REMOVE_USER',
        id
      })}>삭제</button>
      {/* 
      (주의) onClick={onRemove(id)}처럼 코드 작성하면 렌더링 된 순간 함수가 호출되므로 
      onClick에서는 함수를 호출하면 안 되고, onClick={() => onRemove(id)}처럼 함수 자체를 넣어줘야 한다.
      */}
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {
        users.map(
          (user) => (
            <User
              user={user}
              key={user.id}
            />
          )
          // (user, index) => (<User user={user} key={index} />)
        )
        // 각 요소들마다 고유한 값(key)을 가지고 있어야 함
        // id처럼 고유한 값이 없으면 key에 index를 넣어줄 수는 있지만 성능적으로 좋아지진 않음
        // key가 있어야 새로운 항목이 추가/제거될 때 효율적으로 업데이트
      }
    </div>
  );
}

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users
);