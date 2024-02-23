import { Empty } from "./Empty";
import { CreatedTask } from "./Task";

export function ListTask(props) {
  return (
    <div className="flex flex-col text-white items-center">
      {props.list?.length ? (
        props.list.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center w-[46rem] my-4"
            >
              <CreatedTask
                id={item.id}
                isChecked={item.isChecked}
                text={item.text}
                handleRemoveTask={props.handleRemoveTask}
              />
            </div>
          );
        })
      ) : (
        <Empty />
      )}
    </div>
  );
}
