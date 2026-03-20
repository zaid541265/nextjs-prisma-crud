"use client";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

function NewPage({ params }) {
  const router = useRouter();
  const { id } = use(params);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

 useEffect(() => {
  if (id) {
    fetch(`/api/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title || "");
        setDescription(data.description || "");
        console.log(data);
      });
  }
}, [id]);
const onSubmit = async (e) => {
  e.preventDefault();

  if (id) {
 
    await fetch(`/api/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
  
    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  router.refresh();
  router.push("/");
};

  return (
    <div className="h-screen flex justify-center items-center bg-slate">
      <form
        onSubmit={onSubmit}
        className="bg-slate-900 p-8 rounded-md w-[400px] shadow-lg"
      >
        <label className="text-white font-semibold mb-2 block">
          Título de la tarea
        </label>
        <input
          type="text"
          name="title"
          className="w-full p-2 mb-4 rounded-md bg-slate-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Título"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label className="text-white font-semibold mb-2 block">
          Descripción de la tarea
        </label>
        <textarea
          name="description"
          rows="4"
          className="w-full p-2 mb-4 rounded-md bg-slate-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe tu tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
<div className="flex justify-between">
  
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
          Crear
        </button>
        {id && (
  <button
    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    type="button"
    onClick={async () => {
      const res = await fetch(`/api/tasks/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      router.refresh();
      router.push("/");
    }}
  >
    Delete
  </button>
)}
</div>
      </form>
    </div>
  );
}

export default NewPage;