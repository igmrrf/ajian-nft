export function capitalizeFirst(str: string) {
  const stringArr: Array<string> = str.split(" ");
  let capitalisedStr = "";
  stringArr.map(
    (string) => (capitalisedStr += string[0].toUpperCase() + string.slice(1, string.length) + " "),
  );
  return capitalisedStr + ".";
}
