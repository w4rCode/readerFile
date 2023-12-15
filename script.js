function mostrar() {
    // Cria uma nova instância do FileReader
    let leitor = new FileReader();
    
 
    let imagem = document.getElementById('imagem').files[0];

    // Configura o manipulador de eventos para quando a leitura do arquivo for concluída
    leitor.onloadend = function() {
        // Cria um elemento de imagem
        let img = document.createElement('img');
        
        // Define a fonte da imagem como a URL de dados resultante da leitura do arquivo
        img.src = leitor.result;

        // Define a largura da imagem como 200 pixels
        img.width = 200;

        // Adiciona a imagem ao elemento com o ID 'area' na página
        document.getElementById('area').appendChild(img);
    };

    // Inicia a leitura do arquivo como uma URL de dados
    leitor.readAsDataURL(imagem);
}
