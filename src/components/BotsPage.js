import React, { useEffect, useState } from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
// import axios from 'axios';

function BotsPage() {
  const [botList, setBotList] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [click, setClick] = useState(0);

  useEffect(() => {
    const getBots = async () => {
      const response = await fetch('http://localhost:3000/bots');
      const data = await response.json();
      setBotList(data);
      console.log(data);
    }
    getBots();
  }, []);

  function addBotToArmy(singleBotInArmy) {
    if (!botArmy.find((bot) => bot === singleBotInArmy)) {
      const addedBot = botList.find(bot => bot === singleBotInArmy)
      setBotArmy([...botArmy, addedBot]);
    }
    console.log(botArmy);
  }

  function removeBotFromArmy(singleBotInArmy) {
    const filteredArmy = botArmy.filter(bot => bot !== singleBotInArmy);
    setBotArmy(filteredArmy)
  }

  // const deleteBot = async (id) => {
  //    await axios.delete(`http://localhost:3000/bots/${id}`);
  //    const updatedBotList = botList.filter((bot) => bot.id !== id);
  //     setBotList(updatedBotList);
  // }




  // const deleteBot = (id) => {
  //   fetch(`http://localhost:3000/bots/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         const updatedBotList = botList.filter(bot => bot.id !== id);
  //         setBotList(updatedBotList);
  //         console.log(`Bot with id ${id} deleted successfully.`);
  //       } else {
  //         console.error(`Failed to delete bot with id ${id}`);
  //       }
  //     })
  //     .catch(error => console.error('Error deleting bot:', error));
  // };

  const deleteBot = () => {
    setClick(click + 1)
    console.log(click)
  }




 

  // function deleteBot(singleBotInArmy) {
  //   if (botArmy.find((bot) => bot === singleBotInArmy)) {
  //     setBotList(botList.filter((bot) => bot !== singleBotInArmy));
  //     setBotArmy(botArmy.filter((bot) => bot !== singleBotInArmy));

  //     fetch(`http://localhost:3000/bots/${singleBotInArmy.id}`, {
  //       method: 'DELETE'
  //     });
  //   }
  //   console.log(botArmy);
  // }
  return (
    <>
      <YourBotArmy
        botArmy={botArmy}
        deleteBot={deleteBot}
        removeBotFromArmy={removeBotFromArmy}
      />
      <BotCollection
        botList={botList}
        addBotToArmy={addBotToArmy}
        deleteBot={deleteBot}
        click={click}
      />
    </>
  );
}

export default BotsPage;