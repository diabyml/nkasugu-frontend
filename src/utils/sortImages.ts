export const sortImages = (arr: any) => {
  let images = [];
  if (arr) images = [...arr];
  images.sort((currItem, nextItem) => {
    // if(parseInt(currItem) < parseInt(nextItem)) return -1
    // else if(parseInt(currItem) > parseInt(nextItem)) return 1
    // else return 0
    const currItemIdParsed = parseInt(currItem.id);
    const nextItemIdParsed = parseInt(nextItem.id);

    if (currItemIdParsed < nextItemIdParsed) return -1;
    else if (currItemIdParsed > nextItemIdParsed) 1;
    else return 0;
  });
  return images;
};
