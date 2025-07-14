// script.js
const materias = [
  { id: "calc1", nombre: "Cálculo Diferencial", abre: ["calc2", "algebra"] },
  { id: "fisica1", nombre: "Física Mecánica", abre: ["fisica2", "estatica"] },
  { id: "quimica", nombre: "Química General", abre: ["geologia"] },
  { id: "dibujo", nombre: "Dibujo de Ingeniería" },
  { id: "introcc", nombre: "Introducción a las Construcciones Civiles" },
  { id: "calc2", nombre: "Cálculo Integral" },
  { id: "algebra", nombre: "Álgebra Lineal" },
  { id: "fisica2", nombre: "Física Electromagnética", abre: ["redes"] },
  { id: "estatica", nombre: "Estática", abre: ["resmate"] },
  { id: "geologia", nombre: "Geología para Ingenieros" },
  { id: "constitucion", nombre: "Constitución Política" },
  { id: "ingles1", nombre: "Inglés 1", abre: ["ingles2"] },
  { id: "deporte", nombre: "Deporte Formativo" },
  { id: "prob", nombre: "Probabilidad y Estadística" },
  { id: "redes", nombre: "Redes Eléctricas Media y Baja Tensión" },
  { id: "resmate", nombre: "Resistencia de Materiales", abre: ["materiales", "conedif", "mecsuelo"] },
  { id: "biologia", nombre: "Biología General" },
  { id: "autocad", nombre: "Interpretación de Planos y AUTOCAD", abre: ["topografia"] },
  { id: "admin", nombre: "Fundamentos de Administración", abre: ["admconst", "elec1", "elec2"] },
  { id: "elec1", nombre: "Electiva Co-sh (I)" },
  { id: "ingles2", nombre: "Inglés 2", abre: ["ingles3"] },
  { id: "flu", nombre: "Mecánica de Fluidos", abre: ["redhysani"] },
  { id: "materiales", nombre: "Materiales de Construcción" },
  { id: "conedif", nombre: "Construcción de Edificaciones", abre: ["elec3", "elec4", "elec5"] },
  { id: "mecsuelo", nombre: "Mecánica de Suelos" },
  { id: "topografia", nombre: "Topografía", abre: ["vias"] },
  { id: "admconst", nombre: "Administración de Empresas Constructoras", abre: ["admpresup", "interventoria"] },
  { id: "elec3", nombre: "Electiva (I) Terminados y Acabados" },
  { id: "elec4", nombre: "Electiva (I) Instalaciones Especiales" },
  { id: "ingles3", nombre: "Inglés 3", abre: ["ingles4"] },
  { id: "redhysani", nombre: "Construcciones Redes Hidráulicas y Sanitarias", abre: ["pasantia"] },
  { id: "elec5", nombre: "Electiva (I) Licitaciones y Contratos", abre: ["pasantia"] },
  { id: "elec6", nombre: "Electiva (II) Contabilidad en la Construcción", abre: ["pasantia"] },
  { id: "elec7", nombre: "Electiva (II) HSQ", abre: ["pasantia"] },
  { id: "vias", nombre: "Equipos y Construcción de Vías y Pavimentos", abre: ["pasantia"] },
  { id: "admpresup", nombre: "Administración, Presupuesto y Programación de Obras", abre: ["pasantia"] },
  { id: "interventoria", nombre: "Supervisión Técnica e Interventoría", abre: ["pasantia"] },
  { id: "economia", nombre: "Fundamentos de Economía", abre: ["pasantia"] },
  { id: "comunicacion", nombre: "Comunicación Lingüística", abre: ["pasantia"] },
  { id: "ingles4", nombre: "Inglés 4", abre: ["pasantia"] },
  { id: "pasantia", nombre: "Pasantía Supervisada" }
];

const mallaDiv = document.getElementById("malla");

const estadoMaterias = {};

function renderMaterias() {
  materias.forEach((materia) => {
    estadoMaterias[materia.id] = {
      aprobada: false,
      bloqueada: !materias.slice(0, 5).map(m => m.id).includes(materia.id), // primer semestre desbloqueado
    };

    const div = document.createElement("div");
    div.classList.add("materia");
    if (estadoMaterias[materia.id].bloqueada) div.classList.add("bloqueada");
    div.id = materia.id;
    div.innerHTML = `${materia.nombre} <span class="check">✔</span>`;
    div.addEventListener("click", () => toggleMateria(materia));
    mallaDiv.appendChild(div);
  });
}

function toggleMateria(materia) {
  const estado = estadoMaterias[materia.id];
  const div = document.getElementById(materia.id);
  if (estado.bloqueada) return;

  if (estado.aprobada) {
    estado.aprobada = false;
    div.classList.remove("aprobada");
  } else {
    estado.aprobada = true;
    div.classList.add("aprobada");
    if (materia.abre) {
      materia.abre.forEach((id) => {
        const desbloquear = document.getElementById(id);
        if (desbloquear) {
          desbloquear.classList.remove("bloqueada");
          estadoMaterias[id].bloqueada = false;
        }
      });
    }
  }
}

renderMaterias();

