<template>
  <div id="app">
    <!-- Barra de navegación con iconos usando Bootstrap Icons -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <i class="bi bi-kanban-fill"></i> Gestor de Tareas
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <!-- Enlaces con iconos -->
            <router-link to="/" class="nav-link">
              <i class="bi bi-house-door-fill"></i> Inicio
            </router-link>
            <router-link to="/addtask" class="nav-link">
              <i class="bi bi-plus-circle-fill"></i> Agregar Tarea
            </router-link>
            <router-link to="/taskList" class="nav-link">
              <i class="bi bi-list-task"></i> Lista de Tareas
            </router-link>
            <router-link to="/combinedview" class="nav-link">
              <i class="bi bi-collection-fill"></i> Vista Combinada
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Cargar componente correspondiente a la ruta seleccionada -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
