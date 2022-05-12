import DictData from "../Data/data.json"

let pleonasms = DictData

export function getPleonasms() {
    return pleonasms;
  }
  
  export function getPleonasm(number) {
    return pleonasms.find(
      (pleonasm) => pleonasm.id === number
    );
  }