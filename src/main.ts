import "./main.css";

type Persona = {
  nombre: string;
  apellido: string;
  email: string;
  edad: number;
};

const persona: Persona = {
  nombre: "",
  apellido: "",
  email: "",
  edad: 0,
};

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html */ `
  <main>
    <header>
      <nav class="navbar bg-dark p-3">
        <p class="text-light mb-0">Mi Aplicación</p>
      </nav>
    </header>
    <div class="container-fluid py-2">
      <div class="row">
        <div class="col-12">
          <h3>Clientes</h3>
        <div>
      </div>
      <div class="row">
        <div class="col-12">
          <form class="row gy-3">
            <div class="col-md-6">
              <label for="nombre" class="form-label">Nombre</label>
              <input name="nombre" id="nombre" class="form-control" />
            </div>
            <div class="col-md-6">
              <label for="apellido" class="form-label">Apellido</label>
              <input name="apellido" id="apellido" class="form-control" />
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">Email</label>
              <input name="email" id="email" class="form-control" />
            </div>
            <div class="col-md-6">
              <label for="edad" class="form-label">Edad</label>
              <input name="edad" id="edad" class="form-control" />
            </div>
            <div class="col-md-6">
              <button class="btn btn-primary">Crear</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
`;

/**
 *       T
 * S            E
 *       B
 */
