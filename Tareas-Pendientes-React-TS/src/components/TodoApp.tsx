import { useState } from "react";
import "./../styles.css";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
	const [nuevaTarea, setNuevaTarea] = useState("");
	const [listaTareas, setListaTareas] = useState<string[]>([]);

	const handleAgregarTarea = () => {
		if (nuevaTarea.trim() === "") return;
		setListaTareas((tareas) => [...tareas, nuevaTarea]);
		setNuevaTarea("");
	};

	const handleBorrarTareas = (index: number) => {
		setListaTareas((tareas) => tareas.filter((_, i) => i !== index));
	};

	return (
		<div>
			<h1>Lista de tareas</h1>
			<div className="add-task-container">
				<input
					type="text"
					value={nuevaTarea}
					onChange={(e) => setNuevaTarea(e.target.value)}
					placeholder="Nueva Tarea"
				/>
				<button onClick={handleAgregarTarea}>Agregar Tarea</button>
			</div>
			<ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTareas} />
		</div>
	);
};
