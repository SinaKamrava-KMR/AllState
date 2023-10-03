

export function withDebounce(fn:DebounceType,delay:number) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn()
    },delay)
  }

}