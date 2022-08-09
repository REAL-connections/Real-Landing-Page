import { useRef, useState } from "react";

export enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

export type FormState = {
  state: Form;
  message?: any;
};

export function useSubscribeToNewsletter() {
  const [form, setForm] = useState({ state: Form.Initial });
  const inputEl = useRef(null);

  async function subscribe(e: any) {
    console.log("useSubscribeToNewsletter");

    e.preventDefault();
    setForm({ state: Form.Loading });

    //@ts-ignore
    console.log("inputEl.current.value: ", inputEl.current.value);
    const res = await fetch(`/api/subscribe`, {
      body: JSON.stringify({
        //@ts-ignore
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const response = await res.json();

    console.log("response: ", response);

    if (response.staus !== "OK") {
      setForm({
        state: Form.Error,
        // @ts-ignore
        message: error,
      });
      return;
    }
    // @ts-ignore
    inputEl.current.value = "";

    setForm({
      state: Form.Success,
      // @ts-ignore
      message: `Success! You've been added to the list!`,
    });
  }

  return { subscribe, inputEl, form };
}
