import React from "react";

function game_options() {
  const alphabetPre = [...'abcdefghijklmnopqrstuvwxyz'];
  const options = [
    {
      value: 0,
      text: 'Angular',
    },
    {
      value: 1,
      text: 'Bootstrap',
    },
    {
      value: 2,
      text: 'React.js',
    },
    {
      value: 3,
      text: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          text: 'Django',
        },
        {
          value: 5,
          text: 'Laravel',
        },
        {
          value: 6,
          text: 'Node.js',
        },
      ],
    },
  ]
  


  return (
    <div>
      <div className="game-menu">
        <div className="menu-center">
          <form>
            <label>
              Enter number of Alphabets
              <input type="number" name="NoAlpha" />
            </label>
            <br/>

            <label>
              Choose Different Categories:
              <select multiple>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
              </select>
              <br/>
              </label>

              

            <input type="submit" value="Start Game" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default game_options;
