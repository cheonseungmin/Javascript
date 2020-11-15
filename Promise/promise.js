let p = new Promise((resolve, reject) => { // 1초 뒤에 1을 출력하고 resolve를 호출함
    setTimeout(() => {
        console.log(1);
        resolve(1);
    }, 1000);
});


// p에 대한 then을 실행하고, resolve가 호출된 때는 1초가 지났으므로 
// 추가적으로 1초 후에 resolve를 호출하는 새로운 Promise를 return 한다.
p.then((n) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(n + 1);
                resolve(n + 1);
            }, 1000);
        })
    })
    // 이번에 호출되는 then은 두번째에서 return 된 Promise에 대한 then이다.
    .then((n) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(n + 1);
            }, 1000);
        })
    });

// 실행 결과
// 1초 뒤 1
// 2초 뒤 2
// 3초 뒤 3