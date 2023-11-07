import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ botArmy, deleteBot, removeBotFromArmy, addBotToArmy }) {
  console.log(botArmy);
  //your bot army ..
  const mappedBotArmy = botArmy.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        handleAdd={removeBotFromArmy}
        handleDelete={deleteBot}
      />
    );
  });
  return (
    <div className='ui segment inverted red bot-army'>
      <div className='ui five column grid'>
        Your Bot Army
        <div className='row bot-army-row'>
          {/*...and here...*/}

          {mappedBotArmy}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;