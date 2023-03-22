const instert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  instert.innerHTML = `

<div class="key">
  ${e.key === " " ? "Space" : e.key}
  <small>event.key</small>
</div>

<div class="key">
  ${e.keyCode === " " ? "Space" : e.keyCode}
  <small>evet.keycode</small>
</div>

<div class="key">
  ${e.code === " " ? "Space" : e.code}
  <small>event.code</small>
</div>`;

});
