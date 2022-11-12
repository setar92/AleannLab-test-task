const changeIsSelected = (id: string): void => {
  const selectedList = localStorage.getItem('selected');
  if (selectedList) {
    const list = JSON.parse(selectedList) as [];
    const isSelected = list.find((jobId) => jobId === id);
    if (isSelected) {
      const newList = list.filter((jobId) => jobId !== id);
      localStorage.setItem('selected', JSON.stringify(newList));
      return;
    }
    localStorage.setItem('selected', JSON.stringify([...list, id]));
    return;
  }
  localStorage.setItem('selected', JSON.stringify([id]));
  return;
};

const getSelectedStatus = (id: string): boolean => {
  const selectedList = localStorage.getItem('selected');
  if (selectedList) {
    const list = JSON.parse(selectedList) as [];
    const isSelected = list.find((jobId) => jobId === id);
    return isSelected ? true : false;
  }
  return false;
};

export { changeIsSelected, getSelectedStatus };
