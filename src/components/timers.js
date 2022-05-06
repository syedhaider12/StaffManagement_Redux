var clearTime;

export function timer() {
  clearTime = setInterval(() => {
    localStorage.removeItem("email");

    window.location.reload();
  }, 10 * 60 * 1000);
}
export function reset() {
  clearInterval(clearTime);
}
