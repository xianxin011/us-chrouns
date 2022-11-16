export const numberToEn = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
}

export const converNum2En = (num: number): string =>{
    // @ts-ignore
    const chars = numberToEn[`${num}`] as string

    return chars? chars: num.toString();
}