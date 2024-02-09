const SumApi = async (numOne, numTwo) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/Sum/EnterTwoNumbers/${numOne}/${numTwo}`);
    const data = await promise.text();
    return data;
}

export { SumApi }