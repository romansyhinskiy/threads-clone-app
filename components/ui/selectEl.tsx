import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectEl = ({
  genres,
  placeholder,
}: {
  genres: any;
  placeholder: string;
}) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {genres.map((genre: any) => (
          <SelectItem key={genre.id} value={genre.name}>
            {genre.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectEl;
