import { useRef, useState, type FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export const Form = () => {
  const [submittedData, setSubmittedData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmittedData({ name: nameValue, email: emailValue, password: passwordValue });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="enter your name" ref={name} />
      <input type="email" placeholder="enter your email" ref={email} />
      <input type="password" placeholder="enter your password" ref={password} />
      <button>submit</button>

      <section>
        <h1>Name : {submittedData.name}</h1>
        <h2>Email : {submittedData.email}</h2>
        <h2>Password : {submittedData.password}</h2>
      </section>
    </form>
  );
};
