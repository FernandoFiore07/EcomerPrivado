const config = window.AppConfig || {};
const LOGIN_URL = config.LOGIN_URL || new URL('login.html', window.location.href).toString();

document.addEventListener("DOMContentLoaded",function(){
        const KEY = "userName";
        const session = localStorage.getItem(KEY);
    if (!session) {
    // --- Redirección si no hay usuario ---
     window.location.href = LOGIN_URL;
    return;
  }

  // --- Mostrar correo en la barra ---
  const slot = document.getElementById("userEmail");
  if (slot) {
    slot.textContent = session;
        }

})
