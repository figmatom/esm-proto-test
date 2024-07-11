export const thingWithSideEffect = [1,2,3,4,5].map(x => x * 2);

let memo: Number[] = []
export const thingWithoutSideeffect = () => memo ??= (memo = [1,2,3,4,5].map(x => x * 2));

export const thingWithSideEffect2 = [1,2,3,4,5].map(x => x * 2);

export const otherThing = 'hello';