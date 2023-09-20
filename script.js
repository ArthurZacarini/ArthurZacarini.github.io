// Função que adiciona valor ao visor
function addToDisplay(value) {
    document.getElementById("display").value += value;
}

// Funçao para realizar calculos e atualizar o visor
function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Erro";
    }
}

// Funçao para limpar visor
function clearDisplay() {
    document.getElementById("display").value = "";
}