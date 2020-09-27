function print(name, count) {
    // 함수 매개 변수 초기화
    if(!count) {
        // 조건문으로 매개 변수를 확인
        // count가 undefined일 때 1로 초기화
        // 0이나 null이 false로 처리되면 결과가 잘못될 수 있음
        count = 1;
    }
    console.log(name + "이/가 " + count + "개 있습니다.");
}

print("사과"); // 사과이/가 1개 있습니다.
print("사과", 0); // 사과이/가 1개 있습니다.