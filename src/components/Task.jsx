import { CheckCircle, Trash } from "@phosphor-icons/react";

export function CreatedTask() {
  return (
    <div className="flex justify-center mx-auto gap-4 w-[46rem] bg-neutral-800 rounded-lg p-4">
      <div className="flex flex-row items-start w-[40rem] gap-4 ">
        <p className="text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ipsa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi natus molestias debitis vel vero accusantium asperiores incidunt dicta hic tempore laborum, architecto ad voluptatem blanditiis veritatis magni quia aliquam enim!
        </p>
      </div>
      <div>
        <button>
          <Trash size={28} color="white" />
        </button>
      </div>
    </div>
  );
}
