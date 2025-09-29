// Google Analytics 4
(function () {
    const GA_MEASUREMENT_ID = 'G-M1BGTQM7XH';

    // Crear y añadir el script de gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Inicializar gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    // Configurar GA4 con anonimización de IP
    gtag('config', GA_MEASUREMENT_ID, { 'anonymize_ip': true });
})();
