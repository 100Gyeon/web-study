/* 배열 렌더링하기 */

import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b><span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {
        users.map(
          user => (<User user={user} key={user.id} />)
          // (user, index) => (<User user={user} key={index} />)
        )
        // 각 요소들마다 고유한 값(key)을 가지고 있어야 함
        // id처럼 고유한 값이 없으면 key에 index를 넣어줄 수는 있지만 성능적으로 좋아지진 않음
        // key가 있어야 새로운 항목이 추가/제거될 때 효율적으로 업데이트
      }
    </div>
  );
}

export default UserList;