export function getHour(timer: number): string {
  const result = timer / 3600;
  return `0${result.toString().slice(0, 1)}`;
}

export function getMinutes(timer: number): string {
  const minutes = timer / 60;
  const hour = timer / 3600;
  const result = hour.toString().startsWith('2')
    ? 0
    : hour.toString().startsWith('1')
      ? minutes - 60
      : minutes;
  if ((result / 10).toString().startsWith('0')) return `0${result.toString()}`;
  return result.toString();
}

export function getSeconds(timer: number): string {
  const minutes = (timer / 60).toFixed(2);
  const afterDot = minutes.split('.')[1];

  const seconds = Number(afterDot) * 0.6;
  const result = seconds.toFixed(0);
  if ((Number(result) / 10).toString().startsWith('0')) return `0${result}`;
  return result;
}
