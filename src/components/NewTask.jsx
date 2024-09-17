import { PlusCircle } from "@phosphor-icons/react";
import { Input } from "./Input/Input";

export function NewTask() {
  return (
    <div className="flex justify-center w-[46rem] mx-auto gap-2 relative -top-7">
      <form>
        <div className="flex flex-col">
          <Input />
          <Input />
        </div>
      </form>
      
    </div>
  );
}
