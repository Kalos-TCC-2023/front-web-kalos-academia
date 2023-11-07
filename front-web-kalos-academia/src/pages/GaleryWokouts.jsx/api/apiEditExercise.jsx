export const EditExerciseName = (exerciseId, newName, newUrl, newDescription) => {
  const url = `https://kaloscorp.cyclic.app/kalos/exercicio/id/${exerciseId}`;
  const id = localStorage.getItem("id_academia");


  // Primeiro, faça uma solicitação GET para obter os dados atuais do exercício
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro na solicitação de dados');
      }
      return response.json();
    })
    .then((exercicios) => {
      // Atualize os valores do exercício com os novos valores
      exercicios.nome = newName;
      exercicios.anexo = newUrl;
      exercicios.descricao = newDescription;
      exercicios.id_academia = id

      // Em seguida, faça uma solicitação PUT para atualizar os dados na API
      return fetch(url, {
        method: 'post', // Ou 'POST' dependendo da API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(exercicios),
      });
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro na solicitação de atualização de dados');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Exercício atualizado com sucesso:', data);
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};
