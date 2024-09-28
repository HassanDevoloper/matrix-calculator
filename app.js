function generateMatrices() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;
    
    const matrix1 = document.getElementById('matrix1');
    const matrix2 = document.getElementById('matrix2');
  
    matrix1.innerHTML = '';
    matrix2.innerHTML = '';
  
    let cellSize = '50px'; // Default size
    if (rows > 10 || cols > 10) {
      cellSize = '30px'; // Shrink cell size for larger matrices
    }
    
    createMatrix(matrix1, rows, cols, 'matrix1', cellSize);
    createMatrix(matrix2, rows, cols, 'matrix2', cellSize);
  }
  
  function createMatrix(container, rows, cols, id, cellSize) {
    for (let i = 0; i < rows; i++) {
      const rowDiv = document.createElement('div');
      for (let j = 0; j < cols; j++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'matrix-cell';
        input.id = `${id}_cell_${i}_${j}`;
        input.style.width = cellSize;
        input.style.height = cellSize;
        rowDiv.appendChild(input);
      }
      container.appendChild(rowDiv);
    }
  }
  
  function getMatrixValues(id, rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        row.push(Number(document.getElementById(`${id}_cell_${i}_${j}`).value));
      }
      matrix.push(row);
    }
    return matrix;
  }
  
  function displayResult(result) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';
  
    for (let i = 0; i < result.length; i++) {
      const rowDiv = document.createElement('div');
      for (let j = 0; j < result[i].length; j++) {
        const span = document.createElement('span');
        span.textContent = result[i][j];
        span.style.margin = '10px';
        rowDiv.appendChild(span);
      }
      resultContainer.appendChild(rowDiv);
    }
  }
  
  function addMatrices() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;
  
    const matrix1 = getMatrixValues('matrix1', rows, cols);
    const matrix2 = getMatrixValues('matrix2', rows, cols);
  
    const result = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        row.push(matrix1[i][j] + matrix2[i][j]);
      }
      result.push(row);
    }
    displayResult(result);
  }
  
  function subtractMatrices() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;
  
    const matrix1 = getMatrixValues('matrix1', rows, cols);
    const matrix2 = getMatrixValues('matrix2', rows, cols);
  
    const result = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        row.push(matrix1[i][j] - matrix2[i][j]);
      }
      result.push(row);
    }
    displayResult(result);
  }
  
  function multiplyMatrices() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;
  
    const matrix1 = getMatrixValues('matrix1', rows, cols);
    const matrix2 = getMatrixValues('matrix2', rows, cols);
  
    const result = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        row.push(matrix1[i][j] * matrix2[i][j]);
      }
      result.push(row);
    }
    displayResult(result);
  }
  