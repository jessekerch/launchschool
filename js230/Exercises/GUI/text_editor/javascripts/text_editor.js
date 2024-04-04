document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.toolbar').addEventListener('click', (event) => {
    let selectedTool = event.target.name;
    document.execCommand(selectedTool);
  })


});
