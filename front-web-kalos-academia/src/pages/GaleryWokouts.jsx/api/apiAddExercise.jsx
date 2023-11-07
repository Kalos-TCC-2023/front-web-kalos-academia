export const AddtExerciseApi = (exerciseId, newName, newUrl, newDescription) => {
    const url = `https://kaloscorp.cyclic.app/kalos/exercicio`;
    const id = localStorage.getItem("id_academia");
  
  
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação de dados');
        }
        return response.json();

      })
      .then((exercicios) => {
        console.log(exercicios);
        exercicios.nome = newName;
        exercicios.anexo = newUrl;
        exercicios.descricao = newDescription;
        exercicios.id_academia = id
  
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
          throw new Error('Erro na solicitação de criação de dados');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Exercício criação com sucesso:', data);
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  