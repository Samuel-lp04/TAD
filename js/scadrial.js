const paths = document.querySelectorAll(".metal-path");

paths.forEach((path) => {
  path.addEventListener("click", function () {

    paths.forEach((p) => p.classList.remove("active"));

    this.classList.add("active");
    const tabPane = this.closest(".tab-pane");
    const tabId = tabPane.getAttribute("id");

    const nombre = this.getAttribute("data-name");
    const descripcion = this.getAttribute("data-desc");

    if (tabId === "tab-alomancia") {
      const alomante = this.getAttribute("data-alomante");

      document.getElementById("metal-alomancia-nombre").innerText = nombre;
      document.getElementById("alomante").innerText = alomante;
      document.getElementById("metal-alomancia-descripcion").innerText = descripcion;
    } else if (tabId === "tab-feruquimia") {
      const feruquimista = this.getAttribute("data-feruquimista");

      document.getElementById("metal-feruquimia-nombre").innerText = nombre;
      document.getElementById("feruquimista").innerText = feruquimista;
      document.getElementById("metal-feruquimia-descripcion").innerText = descripcion;
    }
  });
});