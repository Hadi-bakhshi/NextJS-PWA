// import Image from 'next/image';
// import { Inter } from 'next/font/google';

import { ChangeEvent, useState } from 'react';

// const inter = Inter({ subsets: ['latin'] });
interface IVals {
  text: string;
  number: number;
}
export default function Home() {
  const [value, setValue] = useState<IVals>({ text: '', number: 0 });
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log(value);
  };
  return (
    <main className="container w-screen h-screen m-auto">
      <section className="bg-indigo-200 w-full h-full flex items-center justify-center">
        <form className="w-full flex flex-col items-center justify-center gap-1">
          <input onChange={(e) => changeHandler(e)} name="text" className="rounded-md p-2" type="text" placeholder="Enter the text" />
          <input onChange={(e) => changeHandler(e)} name="number" className="rounded-md p-2" type="number" placeholder="Enter the number" />
        </form>
        <div>
          <p>text:{value.text}</p>
          <p>number:{value.number}</p>
        </div>
      </section>
    </main>
  );
}
