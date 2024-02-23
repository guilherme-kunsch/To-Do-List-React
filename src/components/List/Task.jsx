import { Trash } from "@phosphor-icons/react";

export function CreatedTask(props) {



  return (
    <div className="flex justify-center mx-auto gap-4 w-[46rem] bg-neutral-800 rounded-lg p-4">
      <label className="flex flex-row items-start w-[40rem] gap-4 ">
        <input value={props.isChecked} input readOnly type="checkbox" />
        <p className="text-gray-200">
          {props.text}
        </p>
      </label>
      <div>
        <button onClick={() => props.handleRemoveTask(props.id)}>
          <Trash size={28} color="#808080" />
        </button>
      </div>
    </div>
  );
}
