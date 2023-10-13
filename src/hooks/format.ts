export const useFormat = () => {
  /**
   * @param dateString
   * @returns yyyy年mm月dd日
   */
  const FormatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();

    return `${year}年${month}月${day}日`;
  };

  return {
    FormatDate,
  };
};
