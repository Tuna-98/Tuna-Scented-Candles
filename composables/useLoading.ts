export function useLoading() {
  const isLoading: Ref<boolean> = useState('loading', () => (false));
  
  return {
    isLoading: readonly(isLoading),
    start:start(isLoading),
    finish:finish(isLoading),
  }
}

const start = (isLoading:Ref<boolean>) => () => {
  isLoading.value = true;
}

const finish = (isLoading:Ref<boolean>) => () => {
  isLoading.value = false;
}
