<template>
    <div class="combined-view-container">
      <h1 class="header">Vista Combinada de Tareas</h1>
  
      <div v-if="tareas.length > 0" class="task-list">
        <div v-for="tarea in tareas" :key="tarea.id" class="task-item">
          <div class="task-content">
            <!-- Nombre de la tarea -->
            <h5 :style="{ textDecoration: tarea.completed ? 'line-through' : 'none' }" class="task-title">
              {{ tarea.todo }}
            </h5>
  
            <!-- Estado de la tarea -->
            <span class="task-status" :class="tarea.completed ? 'completed' : 'pending'">
              {{ tarea.completed ? 'Completada' : 'Pendiente' }}
            </span>
  
            <div class="task-buttons">
              <!-- Botón para cambiar el estado de la tarea -->
              <button @click="cambiarEstadoTarea(tarea)" class="btn btn-toggle">
                {{ tarea.completed ? 'Desmarcar' : 'Completar' }}
              </button>
              <!-- Botón para eliminar la tarea -->
              <button @click="eliminarTarea(tarea)" class="btn btn-delete">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Mensaje si no hay tareas -->
      <div v-else class="alert">No hay tareas disponibles.</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'VistaCombinada',
    data() {
      return {
        tareas: [] // Aquí se almacenarán las tareas
      };
    },
    methods: {
      // Función para cargar las tareas desde la API
      async cargarTareas() {
        try {
          const respuesta = await axios.get('https://dummyjson.com/todos');
          this.tareas = respuesta.data.todos;
        } catch (error) {
          console.error('Error al cargar las tareas:', error);
        }
      },
  
      // Cambiar el estado de una tarea (completada/no completada)
      cambiarEstadoTarea(tarea) {
        tarea.completed = !tarea.completed;
      },
  
      // Eliminar una tarea
      eliminarTarea(tarea) {
        this.tareas = this.tareas.filter((t) => t.id !== tarea.id);
      },
    },
    mounted() {
      // Cargar las tareas al montar el componente
      this.cargarTareas();
    },
  };
  </script>
  
  <style scoped>
  /* Estilos generales */
  .combined-view-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .header {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }
  
  /* Lista de tareas */
  .task-list {
    margin-top: 20px;
  }
  
  .task-item {
    background-color: #fff;
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
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn-toggle:hover {
    background-color: #0056b3;
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
  