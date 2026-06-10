function runStack(arr){

    let stack = [];
    let trace = "";
    let step = 1;

    for(const num of arr){

        stack.push(num);

        trace +=
        "Step " + step + "\n" +
        "Operation: Push " + num + "\n" +
        "Current Stack: [" + stack.join(", ") + "]\n\n";

        step++;
    }

    while(stack.length){

        const removed = stack.pop();

        trace +=
        "Step " + step + "\n" +
        "Operation: Pop " + removed + "\n" +
        "Current Stack: [" + stack.join(", ") + "]\n\n";

        step++;
    }

    document.getElementById("stackTrace").textContent = trace;
}

function runQueue(arr){

    let queue = [];
    let trace = "";
    let step = 1;

    for(const num of arr){

        queue.push(num);

        trace +=
        "Step " + step + "\n" +
        "Operation: Enqueue " + num + "\n" +
        "Current Queue: [" + queue.join(", ") + "]\n\n";

        step++;
    }

    while(queue.length){

        const removed = queue.shift();

        trace +=
        "Step " + step + "\n" +
        "Operation: Dequeue " + removed + "\n" +
        "Current Queue: [" + queue.join(", ") + "]\n\n";

        step++;
    }

    document.getElementById("queueTrace").textContent = trace;
}

function analyze(){

    const input = document.getElementById("input").value.trim();

    if(!input){
        alert("Please enter numbers separated by commas (,)");
        return;
    }

    if(!input.includes(",")){
        alert("Use commas to separate numbers.\nExample: 10,20,30");
        return;
    }

    const numbers = input
        .split(",")
        .map(num => num.trim())
        .map(Number);

    if(numbers.some(isNaN)){
        alert("Only numbers are allowed");
        return;
    }

    const n = numbers.length;

    document.getElementById("stackOps").textContent = n;
    document.getElementById("queueOps").textContent = n;

    const s1 = performance.now();
    runStack(numbers);
    const s2 = performance.now();

    const q1 = performance.now();
    runQueue(numbers);
    const q2 = performance.now();

    const stackTime = (s2 - s1).toFixed(4);
    const queueTime = (q2 - q1).toFixed(4);

    document.getElementById("stackTime").textContent = stackTime + " ms";
    document.getElementById("queueTime").textContent = queueTime + " ms";

    if(Number(stackTime) < Number(queueTime)){

        document.getElementById("winner").textContent = "🏆 Stack is Faster";

        document.getElementById("reason").textContent =
        "Stack follows LIFO (Last In First Out). Push and Pop operations are O(1).";

    } else {

        document.getElementById("winner").textContent = "🏆 Queue Appears Faster";

        document.getElementById("reason").textContent =
        "Queue follows FIFO (First In First Out). Dequeue uses shift(), which is O(n).";
    }
}
