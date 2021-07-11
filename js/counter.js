function Counter() {
  return {
    cnt: 0,
    inc() {
      this.cnt++;
    },
    dec() {
      this.cnt--;
    }
  }
};
