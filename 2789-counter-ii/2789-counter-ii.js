function createCounter(init){
        let temp = init
    const increment = function increment(){
         init++;
        return init;
    }
    const reset = function reset(){
        init=temp
        return init;
    }
    const decrement = function decrement(){
        init--;
        return init;
    }

    return {increment,reset,decrement}
}

createCounter(5)