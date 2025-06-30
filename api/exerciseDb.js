import AllExercises from "../data";

export const fetchBodyParts = async (bodyPart) => {
  if (!bodyPart || typeof bodyPart !== "string") {
    console.warn("Invalid body part:", bodyPart);
    return [];
  }

  const flatExercise = AllExercises.flat?.() || [];

  const filteredData = flatExercise.filter((exercise) =>
    exercise?.bodyPart?.toLowerCase() === bodyPart.toLowerCase()
  );

  console.log("Filtered Data:", filteredData);
  return filteredData;
};
