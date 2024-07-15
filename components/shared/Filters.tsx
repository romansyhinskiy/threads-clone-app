"use client";
import React from "react";
import SelectEl from "../ui/selectEl";
import { Button } from "../ui/button";

const Filters = ({ data }: any) => {
  return (
    <div className="flex justify-between py-3">
      <SelectEl placeholder="Жанри" genres={data.genres} />
      <Button className="user-card_btn">Пошук</Button>
    </div>
  );
};

export default Filters;
