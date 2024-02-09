const SumApi = async (numOne, numTwo) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/Sum/EnterTwoNumbers/${numOne}/${numTwo}`);
    const data = await promise.text();
    return data;
}

const GreaterOrLessApi = async (num1, num2) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/GreaterOrLessThan/EnterTwoNumbers/${num1}/${num2}`);
    const data = await promise.text();
    return data;
}

export { SumApi, GreaterOrLessApi }