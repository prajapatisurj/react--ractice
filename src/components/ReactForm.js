import React from "react";
import { useForm } from "react-hook-form";

const ReactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ReactForm;
