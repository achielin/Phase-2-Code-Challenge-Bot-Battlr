import React from 'react';
import BotCard from './BotCard';

function BotCollection({ botList, addBotToArmy, deleteBot, click }) {
  
  const mappedBots = botList.map((bot) => {
    return <BotCard bot={bot} key={bot.id} handleAdd={addBotToArmy} deleteBot={deleteBot} click={click}/>;
  });

  return (
    <div className='ui four column grid'>
      Collection of all bots
      <div className='row'>{mappedBots}</div>
    </div>
  );
}

export default BotCollection;