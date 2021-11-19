import { AlertOptions } from "@ionic/core";

export function sayHello() {
  return Math.random() < 0.5 ? "Hello" : "Hola";
}

export const caseFilterAlertOption = (countryCode: string): AlertOptions => {
  return {
    header: "国で絞り込み",
    inputs: [
      {
        name: "all",
        type: "radio",
        label: "すべて",
        value: "ALL",
        checked: countryCode == "ALL"
      },
      {
        name: "jp",
        type: "radio",
        label: "日本",
        value: "JP",
        checked: countryCode == "JP"
      },
      {
        name: "us",
        type: "radio",
        label: "アメリカ",
        value: "US",
        checked: countryCode == "US"
      },
      {
        name: "es",
        type: "radio",
        label: "スペイン",
        value: "ES",
        checked: countryCode == "ES"
      },
      {
        name: "ir",
        type: "radio",
        label: "イラン",
        value: "IR",
        checked: countryCode == "IR"
      },
      {
        name: "cw",
        type: "radio",
        label: "キュラソー",
        value: "CW",
        checked: countryCode == "CW"
      }
    ]
  };
};
