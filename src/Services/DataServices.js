const SumApi = async (numOne, numTwo) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/Sum/EnterTwoNumbers/${numOne}/${numTwo}`);
    const data = await promise.text();
    return data;
}


const SayHelloApi = async (name) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/SayHello/Greeting/${name}`);
    const data = await promise.text();
    return data;
}


const Reverse2Api = async (num) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/ReverseItNumbers/EnterNumber/${num}`);
    const data = await promise.text();
    return data;
}


const Reverse1Api = async (alpha) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/ReverseItAlphanumeric/EnterAlphanumeric/${alpha}`);
    const data = await promise.text();
    return data;
}


const RestaurantPickerApi = async (category) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/RestaurantPicker/Category/${category}`);
    const data = await promise.text();
    return data;
}


const OddOrEvenApi = async (num) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/OddOrEven/EnterANumber/${num}`);
    const data = await promise.text();
    return data;
}


const NameTimeApi = async (name, time) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/NameAndTime/EnterYourName/${name}/EnterTimeYouWokeUp/${time}`);
    const data = await promise.text();
    return data;
}


const MadLibApi = async (celebrityName, animal, bodyPart, nounThatEndsWithS, wholeNumberGreaterThan1, time, height, adjective, name, condiment) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/MadLib/EnterCelebrityName/${celebrityName}/EnterAnimal/${animal}/EnterBodyPart/${bodyPart}/EnterNounThatEndsWithS/${nounThatEndsWithS}/EnterWholeNumberGreaterThan1/${wholeNumberGreaterThan1}/EnterTime/${time}/EnterHeight/${height}/EnterAdjective/${adjective}/EnterName/${name}/EnterCondiment/${condiment}`);
    const data = await promise.text();
    return data;
}


const GreaterOrLessApi = async (num1, num2) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/GreaterOrLessThan/EnterTwoNumbers/${num1}/${num2}`);
    const data = await promise.text();
    return data;
}


const EightBallApi = async (question) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/EightBall/AskMeYesOrNoQuestion/${question}`);
    const data = await promise.text();
    return data;
}



export { SumApi, SayHelloApi, EightBallApi, GreaterOrLessApi, MadLibApi, OddOrEvenApi, Reverse1Api, Reverse2Api, RestaurantPickerApi, NameTimeApi }