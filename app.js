import { auth, db, GoogleAuthProvider, signInWithPopup, signOut, collection, addDoc, getDocs, deleteDoc, doc } from './firebase.js';

const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const reservarBtn = document.getElementById('reservar-btn');
const carritoLista = document.getElementById('carrito-lista');
const totalEl = document.getElementById('total');
const reservasEl = document.getElementById('mis-reservas');
const reservasSec = document.getElementById('reservas');

let carrito = [];
let user = null;

loginBtn.onclick = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  user = result.user;
  loginBtn.style.display = "none";
  logoutBtn.style.display = "inline-block";
  reservasSec.style.display = "block";
  cargarReservas();
};

logoutBtn.onclick = async () => {
  await signOut(auth);
  user = null;
  loginBtn.style.display = "inline-block";
  logoutBtn.style.display = "none";
  reservasSec.style.display = "none";
};

document.querySelectorAll('.add-btn').forEach(btn => {
  btn.onclick = () => {
    const item = btn.parentElement;
    const nombre = item.dataset.nombre;
    const precio = parseFloat(item.dataset.precio);
    carrito.push({ nombre, precio });
    renderCarrito();
  };
});

function renderCarrito() {
  carritoLista.innerHTML = "";
  let total = 0;
  carrito.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.nombre} - ${p.precio.toFixed(2)}€`;
    carritoLista.appendChild(li);
    total += p.precio;
  });
  totalEl.textContent = total.toFixed(2);
}

reservarBtn.onclick = async () => {
  if (!user) return alert("Inicia sesión");
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const personas = parseInt(document.getElementById("personas").value);
  await addDoc(collection(db, "reservas"), { fecha, hora, personas, usuario: user.email });
  cargarReservas();
};

async function cargarReservas() {
  reservasEl.innerHTML = "";
  const snap = await getDocs(collection(db, "reservas"));
  const datos = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  datos.filter(r => r.usuario === user.email).forEach(r => {
    const li = document.createElement('li');
    li.textContent = `${r.fecha} ${r.hora} - ${r.personas} personas`;
    const btn = document.createElement('button');
    btn.textContent = "Cancelar";
    btn.onclick = async () => {
      await deleteDoc(doc(db, "reservas", r.id));
      cargarReservas();
    };
    li.appendChild(btn);
    reservasEl.appendChild(li);
  });
}