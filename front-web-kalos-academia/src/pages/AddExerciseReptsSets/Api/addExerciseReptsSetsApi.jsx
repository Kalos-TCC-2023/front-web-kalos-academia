export const AddWorkouts = ( newName, newDescription,newUrl,newDateCreation, idNivel, idCategoriaTreino,idAcademia) => {
    const url = `https://kaloscorp.cyclic.app/kalos/treino;`
  
  
    const workoutData = {
      nome: newName,
      descricao: newDescription,
      foto: newUrl,
      data_criacao: newDateCreation,
      id_nivel: idNivel,
      idCategoriaTreino: idCategoriaTreino,
      id_academia: idAcademia
      
    };

    
  
    // Enviar a solicitação POST para a API
    return fetch(url, {
      method: 'POST', // Método HTTP POST para adicionar um exercício
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workoutData), // Converter o objeto para JSON
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
  