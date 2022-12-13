export const getScoreOctagonVariant = (id: number, currentId: number) => {
  if (id === currentId) {
    return 'current';
  }

  if (id <= currentId) {
    return 'finished';
  }

  return 'inactive';
};
