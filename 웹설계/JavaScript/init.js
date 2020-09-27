function print(name, count) {
    if(count === undefined) {
        // count가 undefined일 때만 1로 초기화
        // 0이나 null은 해당되지 않음
        count = 1;
    }
    console.log(name, count);
}

print('사과'); // 사과 1
print('사과', 0); // 사과 0
print('사과', null); // 사과 null