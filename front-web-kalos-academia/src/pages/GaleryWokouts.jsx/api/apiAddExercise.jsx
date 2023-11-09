export const AddExerciseApi = (exerciseId, newName, newUrl, newDescription) => {
  // URL da API
  const url = `https://kaloscorp.cyclic.app/kalos/exercicio`;

  // Obter o ID da academia a partir do armazenamento local
  const id = localStorage.getItem("id_academia");

  // Definir os dados do exercício a ser adicionado
  const exerciseData = {
    nome: newName,
    anexo: newUrl,
    descricao: newDescription,
    id_academia: id,
  };

  // Enviar a solicitação POST para a API
  return fetch(url, {
    method: 'POST', // Método HTTP POST para adicionar um exercício
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(exerciseData), // Converter o objeto para JSON
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro na solicitação de criação de dados');
      }
      return response.json(); // Analisar a resposta JSON
    })
    .then((data) => {
      console.log('Exercício criado com sucesso:', data);
      return data; // Retornar os dados do exercício criado
    })
    .catch((error) => {
      console.error(error);
    });
};
