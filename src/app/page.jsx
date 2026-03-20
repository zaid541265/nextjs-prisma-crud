import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";
async function loadTasks() {
  return await prisma.task.findMany();
}

async function HomePage() {
  const tasks = await loadTasks();

  return (
    <section className="container mx-auto p-6">
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;