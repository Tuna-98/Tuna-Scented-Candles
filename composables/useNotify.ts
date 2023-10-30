export function useNotify() {
  const {$notify} = useNuxtApp();

  // success
  const success = (msg: string, group: string = "app") => {
    $notify({ type: "success", title: "success", text: msg });
  }

  // error
  const error = (msg: string, group: string = "app") => {
    $notify({ type: "error", title: "error", text: msg });
  }

  // warn
  const warn = (msg: string, group: string = "app") => {
    $notify({ type: "warn", title: "warn", text: msg });
  }

  // info
  const info = (msg: string, group: string = "app") => {
    $notify({ type: "info", title: "info", text: msg });
  }

  return {
    notify: { success, error, warn, info },
  };
}