export function numberConverter(number:number):string {
    return Array.from(String(number))
        .reverse()
        .reduce(
            (acc, cur, index) =>
                index % 3 === 0 && index != 0 ? cur + "," + acc : cur + acc,
            ""
    );
}
