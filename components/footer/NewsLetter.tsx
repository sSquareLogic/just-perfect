"use client";
import { FormEvent } from "react";
import NewsLetterInput from "./NewsLetterInput";

const NewsLetter = () => {
  return (
    <form
      className="newsletter flex flex-col gap-2 text-WHITE font-GR text-XS_TEXT"
      onSubmit={(e: FormEvent) => e.preventDefault()}
    >
      <span>Получайте информацию о скидках и акциях</span>
      <NewsLetterInput />
      <span className="pt-2">
        Подписываясь на рассылку, вы соглашаетесь на обработку персональных
        данных в соотвествии с политикой по обработке персональных данных, а
        также соглошаетесь с условиями публичной оферты
      </span>
    </form>
  );
};

export default NewsLetter;
