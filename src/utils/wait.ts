export default async function wait(time?: number) {
  return await new Promise((res, rej) => {
    setTimeout(() => res(true), time);
  });
}
