// 함수 선언
function print(name, count) {
    count = count || 1; // 함수 매개 변수 초기화를 위해 or 사용
    console.log(name + "이/가 " + count + "개 있습니다.");
}

// 다 같은 결과
print("사과");
print("사과", 0);
print("사과", null);