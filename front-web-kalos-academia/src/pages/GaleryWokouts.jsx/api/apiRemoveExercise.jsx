export const removeExercise = (exerciseId) => {
    const url = `https://kaloscorp.cyclic.app/kalos/exercicio/id/${exerciseId}`;
  
    return fetch(url, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação de exclusão');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Exercício removido com sucesso:', data);
        return data;
      })
      .catch((error) => {
        console.error('Erro ao remover exercício:', error);
      });
  };
  