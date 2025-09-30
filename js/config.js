/**
 * Configuración de entornos para la aplicación.
 *
 * Cómo cambiar de entorno manualmente:
 *   localStorage.setItem('APP_ENV', 'local');      // Fuerza el modo local
 *   localStorage.setItem('APP_ENV', 'production'); // Fuerza el modo producción
 *   localStorage.removeItem('APP_ENV');            // Vuelve a detección automática
 */
(function configureEnvironment(window) {
  const ENV_STORAGE_KEY = 'APP_ENV';

  const ENVIRONMENTS = {
    local: {
      baseUrl: 'http://127.0.0.1:5500/'
    },
    production: {
      baseUrl: 'https://donsebamarquez.github.io/EcommerceJap/'
    }
  };

  function detectEnvironment() {
    const override = window.localStorage.getItem(ENV_STORAGE_KEY);
    if (override && Object.prototype.hasOwnProperty.call(ENVIRONMENTS, override)) {
      return override;
    }

    const hostname = window.location.hostname;
    if (hostname === '127.0.0.1' || hostname === 'localhost') {
      return 'local';
    }

    return 'production';
  }

  const currentEnv = detectEnvironment();
  const baseUrl = ENVIRONMENTS[currentEnv].baseUrl;

  const config = Object.freeze({
    BASE_URL: baseUrl,
    LOGIN_URL: new URL('login.html', baseUrl).toString(),
    ENV: currentEnv,
    ENV_STORAGE_KEY
  });

  window.AppConfig = config;
})(window);
