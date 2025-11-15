export default function Result({ result }) {
  const getCorrectIndex = () => Math.floor(Math.random() * 4) + 1;

  return (
    <div className="container my-4">
      {Object.keys(result).map((key) => {
        const item = result[key];
        const optionsArray = Object.values(item.options);
        const correctIndex = getCorrectIndex();
        const userChoice = item.chosen;

        return (
          <div className="card mb-4 shadow-sm" key={key}>
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">{item.question}</h5>
            </div>

            <div className="card-body">
              <p className="mb-1">
                <strong>Correct Answer:</strong> {optionsArray[correctIndex - 1]}
              </p>

              {userChoice === 0 && (
                <div className="alert alert-warning mt-3">
                  Correct option is: {correctIndex}
                </div>
              )}

              {userChoice !== 0 && (
                <div
                  className={
                    userChoice === correctIndex
                      ? "alert alert-success mt-3"
                      : "alert alert-danger mt-3"
                  }
                >
                  {userChoice === correctIndex
                    ? "Your answer is correct!"
                    : `Option ${userChoice} is wrong.`}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
