export function leftPad(number) {
  const pad = "00";
  return pad.substring(0, pad.length - number.length) + number;
}

export function formattedTime(secs) {
  const minutes = ~~(secs / 60);
  const seconds = ~~(secs % 60);

  return `${minutes}:${leftPad(seconds.toString())}`;
}