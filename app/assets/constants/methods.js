const randomNumber = () => {
  const generateRandomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${generateRandomColor}`;
  }

module.exports = {
    randomNumber
}