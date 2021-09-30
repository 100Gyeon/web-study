import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();
  const { name, nickname } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target; // e.target.name과 e.target.value 대신 name과 value로 사용하기 위한 비구조화 할당

    /* 리액트에서 객체를 업데이트 할 때는
      1) spread 문법 사용해서 기존 객체를 복사하고
      2) 특정 값을 덮어씌운다. */
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value로 설정
    });
  };
  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };
  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name} ({nickname})
      </div>
    </div>
  )
}

export default InputSample;