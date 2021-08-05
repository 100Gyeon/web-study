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
        )
        // 각 요소들마다 고유한 값(key)을 가지고 있어야 함
        // 새로운 항목이 추가/제거될 때 효율적으로 업데이트
      }
    </div>
  );
}

export default UserList;