const gridSize = document.getElementById('sizePicker');
const drawButton = document.getElementById('draw');
const width = document.getElementById('inputWidth');
const height = document.getElementById('inputHeight');
const color = document.getElementById('colorPicker');
const canvas = document.getElementById('pixelCanvas');
const deleteButton = document.getElementById('del');

//action for submit button:
gridSize.addEventListener('submit', function(event) {
    event.preventDefault();
    makegrid(height.value,width.value);
});

// Creation of  the grid :
function makegrid(){
    canvas.innerHTML='';
    for(var x=0;x<height.value;x++){
        let row = document.createElement('tr');
        canvas.appendChild(row);
        for (var y=0;y<width.value;y++){
            let column = document.createElement('td');
            row.appendChild(column);
            //draw butoon:
            drawButton.addEventListener('click', function(event) {
                column.addEventListener('click', function(event) {
                    event.target.style.backgroundColor = color.value;
                });
            });
            //delete button:
            deleteButton.addEventListener('click', function(event) {
                column.addEventListener('click', function(event) {
                    event.target.style.backgroundColor = 'whitesmoke';
                });
            });
        }
    }
};
