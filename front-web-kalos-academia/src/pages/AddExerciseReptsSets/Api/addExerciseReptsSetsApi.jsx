export const AddWorkouts = (
  newName,
  newDescription,
  newUrl,
  newDateCreation,
  idNivel,
  idCategoriaTreino,
  idAcademia,
  exercicios
) => {
  const url = `https://kaloscorp.cyclic.app/kalos/treino`;

  const workoutData = {
    nome: newName,
    descricao: newDescription,
    foto: newUrl,
    data_criacao: newDateCreation,
    id_nivel: idNivel,
    id_categoria_treino: idCategoriaTreino,
    id_academia: idAcademia,
    exercicios: exercicios.map((exercicio) => ({
      id_exercicio: exercicio.id,
      id_serie: exercicio.serie,
      id_repeticao: exercicio.repeticao,
      duracao: exercicio.duracao,
    })),
  };

  // Enviar a solicitação POST para a API
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(workoutData),
  })
    .then((response) => {
      if (!response.ok) {
        console.error('Erro na solicitação de criação de dados:', response.status, response.statusText);
        throw new Error('Erro na solicitação de criação de dados');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Exercício criado com sucesso:', data);
      return data;
    })
    .catch((error) => {
      console.error('Erro ao adicionar exercício:', error);
      throw error;
    });
};
