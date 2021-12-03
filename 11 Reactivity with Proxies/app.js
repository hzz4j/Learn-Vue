const data = {
  msg: "Hello Reactivity",
};

const proxy = new Proxy(data, {
  set(target, key, value) {
    document.getElementById("app").textContent = value;
    target[key] = value;
  },
});

proxy.msg = "Change Reactivity"
console.log(proxy);
