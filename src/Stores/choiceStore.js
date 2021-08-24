import { writable } from "svelte/store";

const choiceStore = writable({
    isOpenPreferences: false,
    isOpenBeanType: false,
    isOpenQuantity: false,
    isOpenGrindOption: false,
    isOpenDeliveries: false,
    valuePreferences: "_____",
    valueBeanType: "_____",
    valueQuantity: "_____",
    valueGrindOption: "_____",
    valueDeliveries: "_____",
    priceEveryWeek: "0",
    priceEvery2Weeks: "0",
    priceEveryMonth: "0",

}
);

export default choiceStore;