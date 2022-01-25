interface User {
  name: string;
}

interface Action {
  do(): void;
}

// 타입에 직접 이름을 부여할 수 있다.
type UserAction = User & Action;
function setUserAction(): UserAction {
  return {
    do() {},
    name: "",
  };
}

// 원시형과 제네릭에서도 사용 가능
type StringOrNumber = string | number;
type Arr<T> = T[];
type P<T> = Promise<T>;

// 단순히 이름만 부여하는 것이 아니라 특정 타입을 정의할 수도 있다.
type User2 = {
  name: string;
  login(): boolean;
};

class UserImpl implements User2 {
  name: string;
  login(): boolean {
    throw new Error("Method not implemented.");
  }
}

// 문자열 리터럴 타입과 함께 활용할 수도 있다.
type UserState = "PENDING" | "APPROVED" | "REJECTED";

function checkUser(user: User2): UserState {
  if (user.login()) {
    return "APPROVED";
  } else {
    return "REJECTED";
  }
}
