import { AddWorkouts } from "../../pages/AddExerciseReptsSets/Api/addExerciseReptsSetsApi";

export const createWorkoutSucess = async () => {
      const treinoNome = localStorage.getItem("nome_treino");
    const fotoTreino = localStorage.getItem("foto_treino");
    const descricaoTreino = localStorage.getItem("descricao_treino");
    const dataTreino = localStorage.getItem("data_treino");
    const nivelTreino = localStorage.getItem("nivel_treino");
    const categoriaTreino = localStorage.getItem("categoria_treino");
    const idAcademia = localStorage.getItem("id_academia");

    const selectedExercises = JSON.parse(localStorage.getItem("selectedExercises")) || [];

    try {
      await AddWorkouts(
        treinoNome,
        descricaoTreino,
        fotoTreino,
        dataTreino,
        nivelTreino,
        categoriaTreino,
        idAcademia,
        selectedExercises
      );
      console.log("Exercício criado com sucesso");
      console.log("Conteúdo do localStorage:");
      console.log("nome_treino:", treinoNome);
      console.log("foto_treino:", fotoTreino);
      console.log("descricao_treino:", descricaoTreino);
      console.log("data_treino:", dataTreino);
      console.log("nivel_treino:", nivelTreino);
      console.log("id_academia:", idAcademia);
      console.log("selectedExercises:", selectedExercises);
    } catch (error) {
      console.error("Erro ao adicionar exercício:", error);
    }
  };

  
