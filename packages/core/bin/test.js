
function sleep(d) {
    for (var t = Date.now(); Date.now() - t <= d;);
}
const works = [
    () => {
        console.log("第1个任务开始");
        sleep(20); //sleep(20);
        console.log("第1个任务结束");
    },
    () => {
        console.log("第2个任务开始");
        sleep(20); //sleep(20);
        console.log("第2个任务结束");
    },
    () => {
        console.log("第3个任务开始");
        sleep(20); //sleep(20);
        console.log("第3个任务结束");
    },
];

requestIdleCallback(workLoop);

function workLoop(deadline) {
    console.log("本帧剩余时间", parseInt(deadline.timeRemaining()));
    while (deadline.timeRemaining() > 1 && works.length > 0) {
        performUnitOfWork();
    }
    if (works.length > 0) {
        console.log(
            `只剩下${parseInt(
 deadline.timeRemaining()
            )}ms,时间片到了等待下次空闲时间的调度`
        );
        requestIdleCallback(workLoop);
    }
}

function performUnitOfWork() {
    works.shift()();
}