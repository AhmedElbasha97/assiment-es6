const range = {
    [Symbol.iterator]() {
      return { 
        from: 1,
        to:10,
        currentNum:0,
        next() {
          if (this.currentNum <10) {
            this.currentNum = this.currentNum + 1;
            return { value: this.currentNum, done: false };
          } else {
            return { value: undefined, done: true };
          }
        },
      };
    },
  };

for (let item of range) {
  console.log(item);
}