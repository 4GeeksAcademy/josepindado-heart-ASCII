const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
  ]

const animateByChart = (ms) => {
    let retraso = ms;
    asciiHeart.map(element => {
      let arr = Array.from(element);
      arr.forEach((char, index) => {
        setTimeout(() => {
          process.stdout.write(char);
          if (index === arr.length - 1) {
            process.stdout.write('\n');
          }
        }, retraso);
        retraso += ms;
      });
    });
  };
  
  animateByChart(100);