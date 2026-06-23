function solve() {
  const input = document.getElementById('problem').value;
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = "<b>Processing...</b>";

  try {
    if (input.includes('=')) {
      // Solve equations
      const equations = input.split(',');
      const vars = [];
      equations.forEach(eq => {
        math.parse(eq).traverse(node => {
          if (node.isSymbolNode && !vars.includes(node.name)) vars.push(node.name);
        });
      });
      const solutions = math.solve(equations, vars);
      resultDiv.innerHTML = "<b>Result:</b><br>" + JSON.stringify(solutions, null, 2);
    } else {
      // Evaluate expressions
      const answer = math.evaluate(input);
      resultDiv.innerHTML = "<b>Result:</b> " + answer;
    }
  } catch (err) {
    resultDiv.innerHTML = "<b>Error:</b> " + err.message;
  }
}
