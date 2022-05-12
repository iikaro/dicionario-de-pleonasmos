import DictData from "./data.json"

let pleonasms = DictData

export function getPleonasms() {
    return pleonasms;
  }
  
  export function getPleonasm(number) {
    return pleonasms.find(
      (pleonasm) => pleonasm.id === number
    );
  }