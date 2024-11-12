<template>
    <div class="task-container">
        <h1 class="header">Lista de Tareas</h1>
        <button @click="cargarTareas" class="btn btn-load">Cargar Tareas</button>
        
        <div v-if="tareas.length > 0" class="task-list">
            <div v-for="tarea in tareas" :key="tarea.id" class="task-item">
                <div class="task-content">
                    <h5 :style="{ textDecoration: tarea.completed ? 'line-through' : 'none' }" class="task-title">
                        {{ tarea.todo }}
                    </h5>
                    <span class="task-status" :class="tarea.completed ? 'completed' : 'pending'">
                        {{ tarea.completed ? 'Completada' : 'Pendiente' }}
                    </span>
                    <div class="task-buttons">
                        <button @click="cambiarEstadoTarea(tarea)" class="btn btn-toggle">
                            {{ tarea.completed ? 'Desmarcar' : 'Completar' }}
                        </button>
                        <button @click="eliminarTarea(tarea)" class="btn btn-delete">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="alert">No hay tareas disponibles.</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ListaDeTareas",
    data() {
        return {
            tareas: [], // Almacenamiento local de las tareas traídas de la API
        };
    },
    methods: {
        // Llamada para obtener las tareas desde la API externa
        async cargarTareas() {
            try {
                const respuesta = await axios.get('https://dummyjson.com/todos');
                // Traducir las tareas al español
                this.tareas = respuesta.data.todos.map(tarea => {
                    return {
                        ...tarea,
                        // Reemplaza las tareas específicas de la API con su traducción al español
                        todo: this.traducirTarea(tarea.todo)
                    };
                });
            } catch (error) {
                console.error('Error al cargar las tareas:', error);
            }
        },

        // Función para traducir las tareas
        traducirTarea(tarea) {
            const traducciones = {
                'Buy groceries': 'Comprar víveres',
                'Complete homework': 'Terminar tarea',
                'Clean the house': 'Limpiar la casa',
                'Walk the dog': 'Sacar a pasear al perro',
                // Agrega aquí más traducciones según sea necesario
            };

            return traducciones[tarea] || tarea;  // Si no hay traducción, devuelve el texto original
        },

        // Cambiar el estado de una tarea (completada/no completada)
        cambiarEstadoTarea(tarea) {
            tarea.completed = !tarea.completed;
        },

        // Eliminar la tarea seleccionada
        eliminarTarea(tarea) {
            this.tareas = this.tareas.filter((t) => t.id !== tarea.id);
        },
    },
};
</script>

<style scoped>
/* Estilos generales */
.task-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f0f8ff;  /* Azul claro */
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.header {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #00509E;  /* Azul oscuro */
    margin-bottom: 20px;
}

.btn-load {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #00509E;  /* Azul oscuro */
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-load:hover {
    background-color: #003d73;  /* Azul más oscuro */
}

/* Lista de tareas */
.task-list {
    margin-top: 20px;
}

.task-item {
    background-color: #ffffff;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
}

.task-item:hover {
    transform: translateY(-5px);
}

.task-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-right: 15px;
    flex-grow: 1;
}

.task-status {
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 15px;
}

.completed {
    background-color: #28a745;
    color: white;
}

.pending {
    background-color: #ffc107;
    color: white;
}

/* Botones */
.task-buttons {
    display: flex;
    gap: 10px;
}

.btn-toggle {
    padding: 5px 10px;
    background-color: #00509E;  /* Azul oscuro */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-toggle:hover {
    background-color: #003d73;  /* Azul más oscuro */
}

.btn-delete {
    padding: 5px 10px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-delete:hover {
    background-color: #c82333;
}

/* Alerta */
.alert {
    text-align: center;
    padding: 10px;
    background-color: #f8d7da;
    color: #721c24;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 20px;
}
</style>
