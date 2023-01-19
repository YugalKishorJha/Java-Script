let word13 = "aanmchd";



let ch = Array.from(word13);

let mmmm = new Map();

for (let i = 0; i < ch.length; i++) {
  if (mmmm.has(ch[i])) mmmm.set(ch[i], mmmm.get(ch[i]) + 1);
  else mmmm.set(ch[i], 1);
}

for (let [key, value] of mmmm) {
  if (value === 1) {
    console.log(`The first non repeated word in ${word13} is ${key}`);
    break
  }
}

